import axios from 'axios'
// import { logger } from '../log'
import config from '../utils/config'
// access_token 的有效期目前为 2 个小时 (2022-03-01 19:45:57)
interface temp {
  access_token?: string
  date?: number
}
const temp: temp = {}

const getAccessToken = async (): Promise<string> => {
  // https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
  const { data: res } = await axios({
    method: 'GET',
    url: 'https://api.weixin.qq.com/cgi-bin/token',
    params: {
      grant_type: 'client_credential',
      appid: config.wx.appid,
      secret: config.wx.secret
    }
  })
  // 异常
  if (res.code && res.code != 0) {
    // logger.warn('AccessToken 获取失败', JSON.stringify(res))
    console.log('AccessToken 获取失败', JSON.stringify(res));

  }
  // 缓存
  temp.date = Date.now()
  temp.access_token = res.access_token
  return res.access_token
}

export default async (): Promise<string> => {
  if (!temp.access_token || (temp.date || 0) + (2 * 60 * 60 * 1000) <= Date.now()) {
    await getAccessToken()
  }
  return temp.access_token || 'error'
}