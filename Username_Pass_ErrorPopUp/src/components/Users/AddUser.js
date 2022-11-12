import React, { useState,useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from '../UI/Card'
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'


//**********Using Refs*****************
const AddUser = (props) => {
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const [error,seterror]=useState();
       
    const addUserHandler = (event) => {
        
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) 
        {
            seterror({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+enteredUserAge < 1) {
            seterror({
                title: 'Invalid Input',
                message: 'Please enter a valid age (>0).'
            })
            return;
        }
        // console.log(enteredUsername,enteredAge)
        //Sending to App.js to render the data in form
        props.onAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value='';
        ageInputRef.current.value='';

        
        }
        const errorHandler=()=>{
            seterror(null)
    }


    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years) </label>
                    <input id="age" type="number"  ref={ageInputRef} />
                    {/* <button type="submit">Add User</button> */}
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser


//-----*****USING USESTATE ******----------------------------

// const AddUser = (props) => {
//     const [enteredUsername, setenteredUsername] = useState('');
//     const [enteredAge, setenteredAge] = useState('');
//     const [error, seterror] = useState();

//     const addUserHandler = (event) => {
//         event.preventDefault();
//         if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) 
//         {
//             seterror({
//                 title: 'Invalid Input',
//                 message: 'Please enter a valid name and age (non-empty values).'
//             })
//             return
//         }

//         if (+enteredAge < 1) {
//             seterror({
//                 title: 'Invalid Input',
//                 message: 'Please enter a valid age (>0).'
//             })
//             return;
//         }
//         // console.log(enteredUsername,enteredAge)
//         //Sending to App.js to render the data in form
//         props.onAddUser(enteredUsername, enteredAge)
//         setenteredUsername("");
//         setenteredAge("");
//     }
//     const usernameChangeHandler = (event) => {
//         setenteredUsername(event.target.value);
//     }
//     const AgeChangeHandler = (event) => {
//         setenteredAge(event.target.value);
//     }
    // const errorHandler=()=>{
    //     seterror(null)
    // }


//     return (
//         <Wrapper>
//             {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
//             <Card className={classes.input}>
//                 <form onSubmit={addUserHandler}>
//                     <label htmlFor="username">Username</label>
//                     <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
//                     <label htmlFor="age">Age (Years) </label>
//                     <input id="age" type="number" value={enteredAge} onChange={AgeChangeHandler} />
//                     {/* <button type="submit">Add User</button> */}
//                     <Button type="submit">Add User</Button>
//                 </form>
//             </Card>
//         </Wrapper>
//     )
// }

// export default AddUser