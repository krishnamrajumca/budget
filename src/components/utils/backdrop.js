import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    root: {
        width: '100%',
        position:'absolute',
        top:0
      },
  }));
  
const  BackDrop = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
    const loader = useSelector(state => state.loader)
  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  
    return (
      
        <Backdrop className={classes.backdrop} open={loader}>
            <div className={classes.root}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color="secondary"/>
            </div>
        </Backdrop>
      
    );
  }

  export default BackDrop;