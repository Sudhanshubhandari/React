import React ,{useContext} from 'react';
import AuthContext from '../store/Auth-context';
import classes from './Navigation.module.css';

//Another way of taking value as hook from provider(i.e from app.js)



const Navigation = (props) => {
  const ctx=useContext(AuthContext);
  return (
    // <AuthContext.Consumer /*takes value drom provideer*/>
    // {
    //   (ctx)=>{
    //     return (
        <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
        )
    //   }    }
    
    // </AuthContext.Consumer>
  // );
};

export default Navigation;
