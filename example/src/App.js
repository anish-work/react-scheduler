import moment from 'moment'
import React from 'react'

import Calendar from 'react-scheduler'
import 'react-scheduler/dist/index.css'

const App = () => {
  return (
    <Calendar 
      timeInterval={30} 
      startDate={moment().toDate()}
      data={[]}
      sessionComponent={null}
      headerCellComponent={null}
    />
  );
}

export default App
