import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import moment from 'moment'
import React from 'react'
import useCalendarStyles from './useCalendarBaseStyles'
import clsx from 'clsx'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
const DefaultHeaderCell = (props) => {
  const { date } = props
  if (moment(date.date).isSame(moment(), 'day')) {
    return (
      <div className={`d-flex justify-content-center `}>
        Today, {moment(date.date).format('D')}
      </div>
    )
  }
  return (
    <div className='d-flex justify-content-center'>
      {days[moment(date.date).day()]}, {moment(date.date).format('D')}
    </div>
  )
}
const CalendarHeader = (props) => {
  const { dates, headerCellComponent: HeaderCellComponent } = props
  const classes = useCalendarStyles()
  const cellClasses = (date) =>
    clsx(
      moment(date.date).isSame(moment(), 'day') && classes.todayCell,
      classes.columnCell,
      'position-sticky'
    )
  return (
    <TableHead className={classes.tableHead}>
      <TableRow className={classes.headerRow}>
        <TableCell />
        {dates.map((date) => (
          <TableCell key={date.id} className={cellClasses(date)}>
            {HeaderCellComponent ? (
              <HeaderCellComponent {...props} date={date} />
            ) : (
              <DefaultHeaderCell date={date} />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
export default CalendarHeader
