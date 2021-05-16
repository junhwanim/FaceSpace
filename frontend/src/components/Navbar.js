import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Navbar({
  linkDisabled,
  setLinkDisabled,
  loggedinUser,
  setLoggedinUser,
  setUserFriends,
  setCurrentUser,
}) {
  const logOut = () => {
    let updatedLogOutArr = [...loggedinUser];
    updatedLogOutArr.splice(0);
    setLoggedinUser(updatedLogOutArr);
    setLinkDisabled(!linkDisabled);
    setUserFriends("");
    setCurrentUser("");
  };
  const location = useLocation();
  return (
    <Wrapper>
      <Logo to="/">Facespace</Logo>
      {!linkDisabled ? (
        <SignIn to="/signin">
          {location.pathname !== "/signin" && "Sign in"}
        </SignIn>
      ) : (
        <SigninWrapper>
          <SignIn to="#">Hello {loggedinUser}</SignIn>{" "}
          <SignIn onClick={logOut} to="/signin">
            Sign out
          </SignIn>
        </SigninWrapper>
      )}
    </Wrapper>
  );
}

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 5vw;
  font-size: 35px;
`;

const SignIn = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 5vw;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #292929;
  height: 60px;
`;

export default Navbar;
