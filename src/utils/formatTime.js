export function convertMinToHours(number) {
  const hours = number / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return `${rhours}h${rminutes}`
}

export function convertToFullDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
