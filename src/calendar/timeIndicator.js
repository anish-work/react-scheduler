import { makeStyles } from '@material-ui/core'
import useInterval from '../hooks/useInterval';
import moment from 'moment'
import React from 'react'
import { findCoordinates } from './helpers'
import { CELL_HEIGHT, CELL_WIDTH } from './useCalendarBaseStyles'

export default function TimeIndicator({
  scrollToNow,
  updateInterval,
  dates,
  timeInterval
}) {
  const [coordinates, setCoord] = React.useState({ x: 0, y: 0 })

  function scrollToMe() {
    const timeIndicator = document.getElementById('time-indicator')
    setTimeout(() => {
      timeIndicator.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }, 400)
  }
  function setPosition() {
    const now = moment()
    setCoord({ ...findCoordinates(now, dates, timeInterval || 30) })
  }
  // Set top position on every interval
  useInterval(
    () => {
      // find top postion for now
      setPosition()
    },
    updateInterval ? updateInterval * 1000 : null
  )

  // Set top position on first render
  React.useEffect(() => {
    setPosition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, timeInterval])

  // Scroll to current time if prop is true
  React.useEffect(() => {
    if (scrollToNow) scrollToMe()
  }, [scrollToNow, dates])

  const classes = useStyles({ left: coordinates.x, top: coordinates.y })
  return (
    <div
      className={`${classes.nowIndicator} d-flex align-items-center`}
      id='time-indicator'
    >
      <div className={` ${classes.circle} m-0 p-0`} />
      <div className={` ${classes.line} m-0 p-0`} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  line: {
    borderTop: `2px #4088F6 solid`,
    width: `100%`,
    transform: 'translate(-5%, 0%)'
  },
  circle: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    transform: 'translate(-50%, 0%)',
    background: '#4088F6'
  },
  nowIndicator: {
    position: 'absolute',
    zIndex: 1,
    top: ({ top }) => `${top - CELL_HEIGHT / 2}px`, // Adjust to border-top
    left: ({ left }) => `${left}px`,
    width: CELL_WIDTH + 10 + 'px',
    pointerEvents: 'none',
    transform: 'translateY(-50%)'
  }
}))
