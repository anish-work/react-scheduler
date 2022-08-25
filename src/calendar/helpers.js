import moment from 'moment'
import { CELL_HEIGHT, CELL_WIDTH, HEADER_HEIGHT } from './useCalendarBaseStyles'

export function findY(time, timeInterval) {
  const newTime = moment(time)
  const timeInSeconds = newTime
    .clone()
    .diff(moment(newTime).startOf('day'), 'seconds')
  const distanceFor1Sec = CELL_HEIGHT / timeInterval / 60 // timeInterval is in minutes
  return Math.ceil(
    timeInSeconds * distanceFor1Sec + HEADER_HEIGHT + CELL_HEIGHT / 2
  ) // add top-fixed heade's height
}
export function findX(indexInDates) {
  const position = indexInDates * CELL_WIDTH + 100
  return Number(position)
}
export function findCoordinates(time, dates, timeInterval) {
  const y = findY(moment(time), timeInterval)
  const index = dates.findIndex(
    (date) => date.id === moment(time).format('YYYY-MM-DD')
  )
  const x = findX(index)
  return { x, y }
}
export function findHeight(startTime, endTime, timeInterval) {
  const y1 = findY(startTime, timeInterval)
  const y2 = findY(endTime, timeInterval)
  return Math.round(y2 - y1)
}
export const generateWeek = (startDate) => {
  const out = []
  for (let i = 0; i <= 6; i++) {
    const newDay = moment(startDate).startOf('day').add(i, 'day')
    out.push({
      id: `${newDay.clone().format('YYYY-MM-DD')}`,
      date: newDay.clone().toDate()
    })
  }
  return out
}
export const allDaySlots = (duration) => {
  const hoursPerDay = (60 * 24) / duration
  const startTime = moment().startOf('day')
  const timeStops = []
  let i = 1
  while (i <= hoursPerDay) {
    i++
    timeStops.push(new moment(startTime).format('h:mm a'))
    startTime.add(duration, 'minutes')
  }
  return timeStops
}
