import React, { useState } from 'react'
import Calendar from 'react-scheduler'
import Topbar from '../components/topbar';
import moment from "moment";
import DefaultEvents from '../utils/defaultEvents';

const Views = (props) => {
  const [events, setEvents] = useState(DefaultEvents);

  return (
    <div className='d-flex flex-column position-relative' style={{ maxHeight: '100vh' }}>
      <Topbar />
      <div className="w-100 py-5 border position-relative overflow-hidden d-flex justify-content-center shadow-lg">
        <Calendar
          timeInterval={30}
          startDate={moment().toDate()}
          data={[]}
          sessionComponent={null}
          headerCellComponent={null}
        />
      </div>
  </div>
  )
}

export default Views