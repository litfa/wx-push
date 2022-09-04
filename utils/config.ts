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
    template: 'uUbfGUuNUkO0A_HilHqpV87rZoJ0GD6TvCFGi1V3w3o',
    colors: {
      WeekDay: '#d999ff',
      Date: '#ff9190',
      CTime: '#8dc4ff',
      CTeacher: '#96d475',
      CNote: '#6d6d6d',

      DYear: '#fa2e2e',
      DZhongQiu: '#d5fa2e',
      DGuoQing: '#fa2e2e',
    },
    daoshu: [
      {
        date: '2023-1-21',
        key: 'DYear'
      },
      {
        key: 'DZQ',
        date: '2023-9-10'
      },
      {
        key: 'DGQ',
        date: '2023-10-1'
      },
    ]
  }
}

export const keChengBiao = () => {
  return kcb as KeChrngBiao[][]
}