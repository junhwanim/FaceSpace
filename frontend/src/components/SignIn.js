import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function SignIn({
  allUsers,
  linkDisabled,
  setLinkDisabled,
  setLoggedinUser,
  setUserFriends,
  setCurrentUser,
}) {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const [errMessage, setErrMessage] = useState("");

  const handlerInput = (ev) => {
    setInputValue(ev.target.value);
  };

  const handlerButton = () => {
    for (let i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].name.toLowerCase().includes(inputValue.toLowerCase()) &&
        inputValue
      ) {
        setLinkDisabled(!linkDisabled);
        setLoggedinUser(allUsers[i].name);
        setUserFriends(allUsers[i].friends);
        setCurrentUser(allUsers[i]._id);
        history.push("/");
      } else {
        setErrMessage(`${inputValue} does not exist`);
      }
    }
  };

  return (
    <Wrapper>
      <Form>
        <Label>Enter your first name</Label>
        <Input
          onChange={handlerInput}
          type="text"
          placeholder="Your first name"
        />
        <Button onClick={handlerButton}>Submit</Button>
        {errMessage && (
          <ErrMessage>
            <i className="fas fa-exclamation-triangle" />
            {errMessage}
          </ErrMessage>
        )}
      </Form>
    </Wrapper>
  );
}

const ErrMessage = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 10px;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 292px;
  height: 30px;
  font-family: "Allerta Stencil", sans-serif;
  font-size: 20px;
  border: 3px solid transparent;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 3px solid #292929;
    color: #292929;
  }
`;

const Button = styled.button`
  width: 304px;
  height: 40px;
  margin-top: 8px;
  font-family: "Allerta Stencil", sans-serif;
  font-size: 20px;
  border: none;
  color: #fff;
  background-color: #292929;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #505050;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 170px;
  background-image: linear-gradient(#292929, #fff);
  border-radius: 5px;
  margin-top: -40px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/images/facespace_bg.jpg) center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

export default SignIn;
