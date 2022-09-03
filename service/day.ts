import { schedule } from 'node-cron'
import config, { keChengBiao } from '../utils/config'
import sendUniformMessage from '../wx/sendUniformMessage'
import { getWeek, date } from '../utils/date'
import type KeChrngBiao from '../types/KeChrngBiao'
import dayjs from 'dayjs'

const colors = config.day.colors as any
// 获取颜色
const color = (val: string) => {
  return colors[val] || '#000'
}

schedule(config.day.cron, () => {
  // 今天的课程
  const todayClass = keChengBiao()[new Date().getDay()] as KeChrngBiao[] || []

  // 课程的数据
  const getClassData = () => {
    const data: any = {}
    todayClass.forEach((e, i) => {
      const day = (add = 0) => dayjs(e.date)?.add(add, 'minute').format('HH:mm')
      data[`CName${i}`] = {
        value: e.name,
        color: color('CName')
      }

      data[`CTime${i}`] = {
        value: `${day()}-${day(e['length'] || 45)}`,
        color: color('CTime')
      }
    })
    return data
  }
  // 批量用户发送
  config.day.users.forEach(e => {
    sendUniformMessage(e, config.day.template, '#00f', {
      WeekDay: {
        value: getWeek(),
        color: color('WeekDay')
      },
      Date: {
        value: date('YYYY年MM月DD日'),
        color: color('Date')
      },
      Count: {
        value: todayClass.length,
        color: color('Count')
      },
      ...getClassData()
    })
  })
})