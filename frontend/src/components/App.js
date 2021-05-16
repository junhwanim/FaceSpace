import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Profile from "./Profile";
import SignIn from "./SignIn";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [linkDisabled, setLinkDisabled] = useState(false);
  const [loggedinUser, setLoggedinUser] = useState("");
  const [userFreinds, setUserFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch("/api/users").then((response) =>
      response.json().then((json) => {
        setAllUsers(json.data);
      })
    );
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar
        linkDisabled={linkDisabled}
        setLinkDisabled={setLinkDisabled}
        loggedinUser={loggedinUser}
        setLoggedinUser={setLoggedinUser}
        userFriends={userFreinds}
        setUserFriends={setUserFriends}
        setCurrentUser={setCurrentUser}
      />
      <Switch>
        <Route exact path="/">
          <Homepage
            allUsers={allUsers}
            userFriends={userFreinds}
            setUserFriends={setUserFriends}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path="/profile/:id">
          <Profile allUsers={allUsers} />
        </Route>
        <Route exact path="/signin">
          <SignIn
            allUsers={allUsers}
            linkDisabled={linkDisabled}
            setLinkDisabled={setLinkDisabled}
            loggedinUser={loggedinUser}
            setLoggedinUser={setLoggedinUser}
            userFriends={userFreinds}
            setUserFriends={setUserFriends}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
