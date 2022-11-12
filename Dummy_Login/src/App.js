import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from './components/store/Auth-context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Use effect run after all the code runs,if the code changes by state then only it runs again i.e)it help us fron infinite loop

  useEffect(() => 
    {
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
      if (storedUserLoggedInInformation === '1') 
      setIsLoggedIn(true);
    },
    /*after one iteration if this is same then useeffect will not run*/ []
  );
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
  };

  return (

    <AuthContext.Provider /*Gives the dynamic value to Consumer*/
    value={{
      isLoggedIn:isLoggedIn,
      onLogout:logoutHandler
    }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
