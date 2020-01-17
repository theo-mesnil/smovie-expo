import { format } from 'date-fns'

export function convertMinToHours(number) {
  const hours = number / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return `${rhours}h${rminutes && `${rminutes}m`}`
}

export function convertToFullDate(date) {
  return format(new Date(date), 'PPPP')
}
