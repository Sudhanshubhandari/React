import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';

const emailReducer=(state,action)=>{
if(action.type==='USER_INPUT'){
  return{value:action.val , isValid:action.val.includes('@')};
}
if(action.type==='INPUT_BLUR'){
  return {value: state.value,isValid:state.value.includes('@')}//State means the last updated value
}
//Default
return {value:'',isValid:false}
} 
const PasswordReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
    return{value:action.val , isValid:action.val.trim().length > 6};
  }
  if(action.type==='INPUT_BLUR'){
    return {value: state.value, isValid:state.value.trim().length> 6}//State means the last updated value
  }
  //Default
  return {value:'',isValid:false}
  } 

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //*********USE REDUCER*********** */
const [emailState,dispatchEmail]=useReducer(/*reducer*/emailReducer,/*initial state*/{
  value:'',
  isValid:null,
})
const [PasswordState,dispatchPassword]=useReducer(/*reducer*/PasswordReducer,/*initial state*/{
  value:'',
  isValid:null,
})



//copying object specific value in alias,
const {isValid:/*alias*/emailIsValid}=emailState;
const {isValid:passwordIsValid}=PasswordState
useEffect(()=>{
   //after every key stroke the req was send which is not goof so we set a timer that whenever the user takes the break in typing then we send req
     const identifier=setTimeout(()=>{
      console.log("checking validation")
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
     },500)
     //reset the timer after another keystroke
     return ()=>{
      console.log("cleanup")
      clearTimeout(identifier)
     }
 
},[emailIsValid,passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT',val:event.target.value})
    // setFormIsValid(
    //   emailState.isValid&& PasswordState.isValid
    // );
    
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
   dispatchPassword({type:'USER_INPUT',val:event.target.value})


    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
    // setFormIsValid(
    //   emailState.isValid &&PasswordState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({type:'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, PasswordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" 
         label="E-Mail" 
         type="email" 
         isValid={emailIsValid}
         value={emailState.value} 
         onChange={emailChangeHandler} 
         onBlur={validateEmailHandler}/>
           <Input id="password" 
         label="Password" 
         type="password" 
         isValid={passwordIsValid}
         value={PasswordState.value} 
         onChange={passwordChangeHandler} 
         onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
