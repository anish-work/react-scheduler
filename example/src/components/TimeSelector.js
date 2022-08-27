import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import moment from 'moment';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const TimeSelector = ({onSubmit, ...restProps}) => {
  const classes = useStyles();
  const handleConfirm = () => {
    const startTime = document.getElementById("startTime-picker").value;
    const endTime = document.getElementById("endTime-picker").value;
    onSubmit(moment(startTime, "YYYY-MM-DDTHH:mm").toDate(), moment(endTime, "YYYY-MM-DDTHH:mm").toDate());
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      {...restProps}
    >
      <DialogTitle>Add a new event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can add a new event by selecting a start time and end time from below. 
          Once you save, the event should show up in the scheduler table.
        </DialogContentText>
        <div>
          <TextField
            id="startTime-picker"
            label="Start Time"
            type="datetime-local"
            defaultValue={moment().add(10, "minutes").format("yyyy-MM-DDThh:mm")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className='mt-4'>
          <TextField
            id="endTime-picker"
            label="End Time"
            type="datetime-local"
            defaultValue={moment().add(35, "minutes").format("yyyy-MM-DDThh:mm")}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button className='mr-3' onClick={restProps.onClose}>
          Close
        </Button>
        <Button onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TimeSelector