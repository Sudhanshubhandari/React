import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay=(props)=>{
  return ( 
  <Card className={classes.modal}>
  <header className={classes.header}>
    <h2>{props.title}</h2>
  </header>
  <div className={classes.content}>
    <p>{props.message}</p>
  </div>
  <footer className={classes.actions}>
    <Button onClick={props.onConfirm}>Okay</Button>
  </footer>
</Card>
  )
}
const ErrorModal = (props) => {
  

  return (
    // <div>
    //   <div className={classes.backdrop}/*when error occur it will change the bg color(done by css)*/ 
    //   onClick={props.onConfirm}/>
    //   <Card className={classes.modal}>
    //     <header className={classes.header}>
    //       <h2>{props.title}</h2>
    //     </header>
    //     <div className={classes.content}>
    //       <p>{props.message}</p>
    //     </div>
    //     <footer className={classes.actions}>
    //       <Button onClick={props.onConfirm}>Okay</Button>
    //     </footer>
    //   </Card>
    // </div>
    <React.Fragment>
      {ReactDOM.createPortal(
      <Backdrop onConfirm={props.onConfirm} />,
      document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
        /> ,
        document.getElementById('overlay-root')
        )}
    </React.Fragment>
  );
};

export default ErrorModal;