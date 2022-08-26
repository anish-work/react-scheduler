import React, { useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function task() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(task, delay);
      return () => clearInterval(id)
    }
  }, [delay])
}
export default useInterval
