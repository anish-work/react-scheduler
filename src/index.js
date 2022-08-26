import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import moment from 'moment'
import React from 'react'
import { Sessions } from './calendar/sessions'
import CalendarBody from './calendar/body'
import CalendarHeader from './calendar/header'
import { LeftScrollButton, RightScrollButton } from './calendar/scrollButtons'
import TimeIndicator from './calendar/timeIndicator'
import useCalendarStyles from './calendar/useCalendarBaseStyles'
import { generateWeek, allDaySlots } from './calendar/helpers'
import PropTypes from 'prop-types'
import "./css/fonts.scss";
import "./css/bootstrap/full.scss";

/**
 *
 * @props {
 * timeInterval: <number> minutes (the difference between time shown on th left most column)
 * updateInterval: <Number> Time interval to update the current time indicator
 * startDate: <JS Date> from which the next 7 days will be shown
 * data: <array> Slots structured in the following basic format to render session on grid at their respective position :
 *  {
 *  startDate: <JS Date>
 *  endDate: <JS Date>
 *  ...whatever you need to pass forward to your custom components
 *  }
 * scrollToNow: <Boolean> To scroll to current time on each render
 * showScrollButtons: <Boolean> To show the left and right scroll buttons
 * hideGrid: <Boolean> To hide the grid lines
 * sessionComponent: <React.Component> To render a custom component for the sessions
 * headerCellComponent: <React.Component> To render a custom component for the the header cells
 * }
 * @returns Calendar component to show one week of availability for the given data
 */
const Calendar = (props) => {
  const classes = useCalendarStyles()
  const {
    timeInterval = 30,
    startDate = moment().toDate(),
    data = [],
    scrollToNow = false,
    updateInterval = false,
    showScrollButtons = true,
    hideGrid = false,
    sessionComponent,
    headerCellComponent
  } = props
  const dates = React.useMemo(() => generateWeek(startDate), [startDate])
  const slots = React.useMemo(() => allDaySlots(timeInterval), [timeInterval])
  return (
    <Paper className={classes.root}>
      {showScrollButtons && <RightScrollButton />}
      {showScrollButtons && <LeftScrollButton />}
      <TableContainer className={classes.container} id='calendar-root'>
        <Table className={classes.table}>
          <CalendarHeader
            dates={dates}
            headerCellComponent={headerCellComponent}
            showScrollButtons={showScrollButtons}
          />
          <CalendarBody slots={slots} hideGrid={hideGrid} />
        </Table>
        <Sessions
          data={data}
          dates={dates}
          timeInterval={timeInterval}
          sessionComponent={sessionComponent}
        />
        <TimeIndicator
          scrollToNow={scrollToNow}
          dates={dates}
          timeInterval={timeInterval}
          updateInterval={updateInterval}
        />
      </TableContainer>
    </Paper>
  )
}
Calendar.propTypes = {
  timeInterval: PropTypes.number,
  updateInterval: PropTypes.number,
  startDate: PropTypes.object,
  data: PropTypes.array,
  scrollToNow: PropTypes.bool,
  showScrollButtons: PropTypes.bool,
  hideGrid: PropTypes.bool,
  sessionComponent: PropTypes.func,
  headerCellComponent: PropTypes.func
}

export default React.memo(Calendar)
