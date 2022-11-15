import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';



//Class based state
class Users extends Component {
  constructor() {
    //When you add the contructor to your class and you extend another class you need to call super which calls the contructor of the super class 
    super();
       //In class based state,we can only passed objects inside the state
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }
 
  toggleUsersHandler() {
     //after this setState it does not change in initial state instead it merges it with old state  
  // this.setState({showUsers:false})
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;