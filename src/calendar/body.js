import { Typography } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import useCalendarStyles from './useCalendarBaseStyles';

const TimeCell = ({slot, index}) => {
  const classes = useCalendarStyles();
  if(index === 0) return null;
  return (
    <div className={`d-flex justify-content-end align-items-center ${classes.timeCellText}`}>
      <div className='d-flex justify-content-end align-items-center'>
        <Typography variant='caption' className='font-weight-500 fmr-10 text-uppercase' color='textSecondary'>
          {slot}
        </Typography>
      </div>
      {<div className='d-flex align-items-center' style={{width: '15px'}}>
        <div className='border-bottom h-50 w-100' />
      </div>}
    </div>
  );
}

const CalendarBody = (props) => {
  const { hideGrid, slots } = props;
  const classes = useCalendarStyles();
  return (
    <TableBody className={classes.bodyContainer}>
      {slots.map((slot, index) => (
        <TableRow key={slot + index} className={classes.row}>
          {<TableCell className={`${classes.timeSlotColumn} ${hideGrid 
            || index === 0 ? classes.hideBorderTop : ''} `}>
            <TimeCell slot={slot} hideGrid={hideGrid} index={index}/>
          </TableCell>}
          {[1,1,1,1,1,1,1].map((i, idx)=> {
            return (
              <TableCell key={idx+1} className={`${classes.tableCell} ${hideGrid || index === 0 ? classes.hideBorderTop : ''}`} />
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}
export default CalendarBody;