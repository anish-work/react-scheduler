import { Fade, IconButton } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'
import useCalendarStyles from './useCalendarBaseStyles'
import _ from 'lodash'

function scrollParent(e, direction) {
  e.preventDefault()
  const root = document.getElementById('calendar-root')
  root.scrollBy({
    left: direction === 'right' ? 150 : -150,
    behavior: 'smooth'
  })
}

export const RightScrollButton = (props) => {
  const classes = useCalendarStyles()

  const [showRightScrollButton, setRightScroll] = React.useState(false)

  function updateRightScrollButton() {
    const root = document.getElementById('calendar-root')
    const { scrollWidth, offsetWidth, scrollLeft } = root
    // when scrolled to left most cell
    if (
      scrollWidth > offsetWidth &&
      Math.round(scrollLeft) === scrollWidth - offsetWidth
    )
      return setRightScroll(false)
    // when already full width
    setRightScroll(Boolean(scrollWidth > offsetWidth))
  }

  const determineRightScroll = _.debounce(updateRightScrollButton, 400)

  React.useEffect(() => {
    const root = document && document.getElementById('calendar-root')

    // Decide to show / hide the right scroll button
    updateRightScrollButton()
    root.addEventListener('scroll', updateRightScrollButton) // To Change when reaches end of scroll
    window.addEventListener('resize', determineRightScroll) // To Change when already full width

    // Remove listeners on unmount
    return () => {
      root.removeEventListener('scroll', determineRightScroll)
      window.removeEventListener('resize', determineRightScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!showRightScrollButton) return null
  function scrollRight(e) {
    scrollParent(e, 'right')
  }
  return (
    <Fade in={showRightScrollButton}>
      <div
        className={
          classes.rightScrollerContainer + ' border-bottom position-absolute'
        }
        onClick={scrollRight}
      >
        <IconButton size='small'>
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </Fade>
  )
}
export const LeftScrollButton = ({ ...restProps }) => {
  function scrollLeft(e) {
    scrollParent(e, 'left')
  }

  const classes = useCalendarStyles()
  return (
    <div
      className={
        classes.leftScrollerContainer +
        ' d-flex align-items-center justify-content-center border-bottom position-absolute'
      }
      onClick={scrollLeft}
    >
      <IconButton size='small'>
        <KeyboardArrowLeft />
      </IconButton>
    </div>
  )
}
