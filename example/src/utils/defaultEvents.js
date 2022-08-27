import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const makeDefaultEvetns = () => {
  return [];
};

/*
 @startDate - 
*/
const makeNewEvent = (
  startDate=moment().add(10, "minutes").toDate(), 
  endDate=moment().add(25, "minutes").toDate(), 
  extraData={}
) => {
  const id = uuidv4();
  const duration = moment(startDate).diff(moment(endDate), "seconds");
  return {
    id,
    startDate,
    endDate,
    duration,
    ...extraData,
  }
};

export {
  makeNewEvent,
}
export default [...makeDefaultEvetns()];