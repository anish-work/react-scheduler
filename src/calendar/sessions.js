import { makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
import { findCoordinates, findHeight } from './helpers'
import { CELL_WIDTH, CELL_HEIGHT } from './useCalendarBaseStyles'

const useSessionStyles = makeStyles((theme) => ({
  sessionContainer: {
    position: 'absolute',
    top: ({ top, isConflicted }) =>
      isConflicted
        ? `${top - CELL_HEIGHT / 2 + 5}px`
        : `${top - CELL_HEIGHT / 2}px`, // subtract CELL_HEIGHT / 2 as the time mark is top border of the table cell
    left: ({ left, isConflicted }) =>
      isConflicted ? `${left + 30}px` : `${left}px`,
    width: ({ isConflicted }) =>
      isConflicted ? `${CELL_WIDTH - 30}px` : `${CELL_WIDTH}px`,
    height: ({ height }) => `${height}px`,
    minHeight: '20px',
    paddingRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  defaultSession: {
    backgroundColor: '#E7F1FE',
    flex: 1,
    border: '.1px solid #ddd',
    width: '100%',
    borderRadius: '3px'
  }
}))

const Session = ({
  session,
  dates,
  timeInterval,
  sessionComponent: SessionComponent,
  parentSession,
  isConflicted
}) => {
  const coordinates = findCoordinates(session.startDate, dates, timeInterval)
  const height = findHeight(session.startDate, session.endDate, timeInterval)
  const classes = useSessionStyles({
    left: coordinates.x,
    top: coordinates.y,
    height,
    isConflicted
  })

  if (!height) return null
  return (
    <div className={classes.sessionContainer}>
      {Boolean(SessionComponent) ? (
        <SessionComponent
          session={parentSession ? parentSession : session}
          isConflicted={isConflicted}
        />
      ) : (
        <div className={classes.defaultSession}>
          <Typography variant='caption'>
            {moment(session.startDate).format('h:mm a')} to{' '}
            {moment(session.endDate).format('h:mm a')}
          </Typography>
        </div>
      )}
    </div>
  )
}

export const Sessions = (prop) => {
  const { data, dates, timeInterval, sessionComponent } = prop
  if (!data || !data.length || !timeInterval) return null
  const alreadyEncounteredTime = {} // Keep record of rendered sessions
  const renderEvents = (session) => {
    const isEncountered =
      alreadyEncounteredTime[session.startDate.toISOString()] // check if any session at this time was already encountered
    alreadyEncounteredTime[session.startDate.toISOString()] = true // mark encountered
    const sessionStart = moment(session.startDate)
    const firstDay = moment(dates[0].date)
    const lastDay = moment(dates[dates.length - 1].date)
    if (
      sessionStart.isBefore(firstDay, 'day') ||
      sessionStart.isAfter(lastDay, 'day')
    )
      return null
    const sessionEnd = moment(session.endDate)
    if (sessionEnd.isAfter(sessionStart, 'day')) {
      // Split session into two parts if it is carried on to the next date
      // subtract timeInterval mins from the first slots endDate to adjust UI as as last slot is -timeInterval the end of day
      let newSessions = [
        {
          ...session,
          startDate: sessionStart.clone().toDate(),
          endDate: sessionStart.clone().endOf('day').toDate()
        },
        {
          ...session,
          startDate: sessionEnd.clone().startOf('day').toDate(),
          endDate: sessionEnd.clone().toDate()
        }
      ]
      return newSessions.map((sess, index) => (
        <Session
          parentSession={session}
          session={sess}
          key={session.id + index}
          dates={dates}
          timeInterval={timeInterval}
          sessionComponent={sessionComponent}
          isConflicted={Boolean(isEncountered)}
        />
      ))
    }
    return (
      <Session
        session={session}
        key={session.id}
        dates={dates}
        timeInterval={timeInterval}
        sessionComponent={sessionComponent}
        isConflicted={Boolean(isEncountered)}
      />
    )
  }

  return data.map(renderEvents)
}
