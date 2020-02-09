import { format } from 'date-fns'

export function convertMinToHours(number) {
  const hours = number / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  const formatHour = `${rhours}h`
  const formatMinutes = `${rminutes}m`

  if (rhours === 0 && rminutes !== 0) {
    return formatMinutes
  } else if (rminutes === 0 && rhours !== 0) {
    return formatHour
  } else {
    return formatHour + formatMinutes
  }
}

export function convertToFullDate(date) {
  return format(new Date(date), 'PPPP')
}

export function convertToDate(date) {
  return format(new Date(date), 'PPP')
}
