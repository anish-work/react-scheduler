import { makeStyles } from '@material-ui/core';

export const CELL_HEIGHT = 81;
export const CELL_WIDTH = 180;
export const HEADER_HEIGHT = 81;
export const TIME_CELL_WIDTH = 100;

const useCalendarStyles = () => {
  return makeStyles(theme => ({
    root: {
      maxWidth: '100%',
      position: 'relative',
      zIndex:10
    },
    container: {
      maxHeight: '100%',
      position: 'relative',
    },
    table:{
      borderCollapse: 'separate',
      borderSpacing: 0,
      position: 'relative',
    },
    tableHead:{
      borderCollapse:'separate',
      borderSpacing: 0,
      position:'relative',
    },
    row:{
      height: `${CELL_HEIGHT}px`,
    },
    headerRow:{
      height: `${HEADER_HEIGHT}px`,
      position:'sticky',
      top: 0,
      zIndex: 100,
      boxShadow:'1px 1px 15px -10px #000',
    },
    columnCell:{
      minWidth: `${CELL_WIDTH}px`,
      maxWidth: `${CELL_WIDTH}px`,
      borderRight:'1px solid #ddd',
      padding:0,
      position:'relative',
      backgroundColor: '#FAFAFA',
    },
    todayCell:{
      backgroundColor: '#EBF3FE'
    },
    leftScrollerContainer:{
      minWidth: `${TIME_CELL_WIDTH}px`,
      maxWidth: `${TIME_CELL_WIDTH}px`,
      position: 'absolute',
      height: `${HEADER_HEIGHT}px`,
      top:0,
      left: 0,
      zIndex: 1001,
      borderRight:'1px solid #ddd',
      backgroundColor: '#FAFAFA',
    },
    rightScrollerContainer:{
      minWidth: '80px',
      maxWidth:'80px',
      height: `${HEADER_HEIGHT}px`,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      top:0,
      right: 0,
      zIndex: 1001,
      borderLeft:'1px solid #ddd',
      backgroundColor: '#FAFAFA',
    },
    timeSlotColumn:{
      minWidth: `${TIME_CELL_WIDTH}px`,
      maxWidth:`${TIME_CELL_WIDTH}px`,
      position:'sticky',
      left: 0,
      zIndex: 2,
      borderRight:'1px solid #ddd',
      borderBottom:'none',
      backgroundColor: '#FAFAFA',
      padding: 0
    },
    timeCellText: {
      marginTop: `-${CELL_HEIGHT / 2}px`, // pull half the cell height upward as time mark is @ border-top
      transform: 'translateY(-50%)', // pull text 50% up and align with border top of the cell 
    },
    tableCell: {
      borderRight:'1px solid #ddd',
      padding:0,
      borderBottom:'none',
      borderTop:'1px solid #ddd',
    },
    hideBorderTop:{
      borderTop:'none',
    },
  }))();
};
export default useCalendarStyles;