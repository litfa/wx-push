import dayjs from 'dayjs'

export const getWeek = () => {
  const week = new Date().getDay();
  if (week == 0) {
    return '日'
  } else if (week == 1) {
    return '一'
  } else if (week == 2) {
    return '二'
  } else if (week == 3) {
    return '三'
  } else if (week == 4) {
    return '四'
  } else if (week == 5) {
    return '五'
  } else if (week == 6) {
    return '六'
  }
}

export const date = (format: string, date?: string | number) => {
  return dayjs(date).format(format)
}