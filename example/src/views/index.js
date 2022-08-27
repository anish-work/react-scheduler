import React, { useState } from 'react'
import Calendar from 'react-scheduler'
import Topbar from '../components/topbar';
import moment from "moment";
import DefaultEvents, { makeNewEvent } from '../utils/defaultEvents';
import { Button } from '@material-ui/core';
import TimeSelector from '../components/TimeSelector';

const Views = (props) => {
  const [events, setEvents] = useState(DefaultEvents);

  const addEvent = (start, end) => {
    let newEvent = makeNewEvent(start, end);
    setEvents((prev) => [...prev, newEvent]);
  };
  console.log(events, '>>')
  return (
    <div className='d-flex flex-column position-relative' style={{ maxHeight: '100vh' }}>
      <Topbar />
      <ActionButtons onAddEvent={addEvent} />
      <div className="w-100 py-5 border position-relative overflow-hidden d-flex justify-content-center shadow-lg">
        <Calendar
          timeInterval={30}
          startDate={moment().toDate()}
          data={[...events]}
          sessionComponent={null}
          headerCellComponent={null}
        />
      </div>
  </div>
  )
};
const ActionButtons = ({ onAddEvent }) => {
  const [openSelector, setSelector] = useState(false);

  const handleAddEvent = (start, end) => {
    onAddEvent(start, end);
    setSelector(false);
  };

  const handleAddEventClick = (e) => {
    e.preventDefault();
    setSelector(true);
  };

  const handleCloseEvent = (e) => {
    e.preventDefault();
    setSelector(false);
  };

  return (
    <div className='border w-100 p-3 d-flex justify-content-center align-items-center'>
      <TimeSelector open={!!openSelector} onClose={handleCloseEvent} onSubmit={handleAddEvent} />
      <Button size='small' variant='contained' color='primary' onClick={handleAddEventClick}>
        Add Event
      </Button>
    </div>
  )
};

export default Views;