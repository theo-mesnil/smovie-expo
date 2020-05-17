import { format } from 'date-fns'

import { useDateFnsLocale } from './i18n'

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

export function useConvertToFullDate() {
  const dateFnsLocale = useDateFnsLocale()

  function convertToFullDate(date) {
    return format(new Date(date), 'PPPP', { locale: dateFnsLocale })
  }

  return convertToFullDate
}

export function useConvertToDate() {
  const dateFnsLocale = useDateFnsLocale()

  function convertToDate(date) {
    return format(new Date(date), 'PPP', { locale: dateFnsLocale })
  }

  return convertToDate
}
