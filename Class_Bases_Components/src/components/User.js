import {Component} from "react"
import classes from './User.module.css';

//Class Based Components
class User extends Component{
//   //We cannot pass props in class based components inside the render fucntion
  render(){
  return <li className={classes.user}>{this.props.name}</li>;
}
}

//Functional based components

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;

