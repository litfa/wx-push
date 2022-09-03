import kcb from '../config/kcb'
import KeChrngBiao from '../types/KeChrngBiao'

export default {
  wx: {
    appid: 'wxea34d8332fdb3c5d',
    secret: '753518eafaf145773b91df70a9bfb1b4'
  },
  day: {
    // 8点
    cron: '*/10 * * * * *',
    users: ['omr-K5nM8a1lik1TklT2EVgx2QVc'],
    template: 'uQwTAYQwgGsJCwWgX2FHRVEGwCFmQzVZAlmBkPOWCK8',
    colors: {
      WeekDay: '#18abc5',

    }
  }
}

export const keChengBiao = () => {
  return kcb as KeChrngBiao[][]
}