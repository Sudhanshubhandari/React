import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList,SetUserList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    SetUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
    
    
  }
  return (
    <> {/*or <React.Fragment><React.Fragment/>*/}
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={userList}/>
    </>
  );
}

export default App;
