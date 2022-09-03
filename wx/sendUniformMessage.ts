import getAccessToken from './getAccessToken'
import axios from 'axios'

// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-message-management/uniform-message/sendUniformMessage.html
// https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=ACCESS_TOKEN
export default async (openId: string, templateId: string, topcolor: string, data: any) => {
  const accessToken = await getAccessToken()
  axios({
    url: 'https://api.weixin.qq.com/cgi-bin/message/template/send',
    method: 'POST',
    params: {
      access_token: accessToken
    },
    data: {
      touser: openId,
      template_id: templateId,
      topcolor: topcolor || '#FF0000',
      data
    }
  })
}