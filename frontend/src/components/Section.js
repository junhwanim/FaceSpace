import React, { useState, useEffect, createContext } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

function Section({ allUsers, userFriends, currentUser }) {
  return (
    <Wrapper>
      <Members>All Facespace members</Members>
      <AllImages>
        {allUsers.map((user) => (
          <Link key={`users-${user._id}`} to={`/profile/${user._id}`}>
            {currentUser.includes(user._id) ? (
              <CurrentUserImage src={user.avatarUrl}></CurrentUserImage>
            ) : (
              <Image src={user.avatarUrl}></Image>
            )}
            <MyselfTag
              className={currentUser.includes(user._id) ? "far fa-user" : ""}
            />
            <FriendTag
              className={
                userFriends.includes(user._id) ? "fas fa-user-friends" : ""
              }
            />
          </Link>
        ))}
      </AllImages>
    </Wrapper>
  );
}

const myself = keyframes`
0%{transform: scale(1)}
50%{transform: scale(1.4)}
100%{transform: scale(1)}
`;

const MyselfTag = styled.i`
  text-decoration: none;
  position: absolute;
  margin-left: -24px;
  margin-top: 10px;
  color: #292929;
  animation-name: ${myself};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;

const FriendTag = styled.i`
  text-decoration: none;
  position: absolute;
  margin-left: -27px;
  transform: translateY(10px);
  color: #292929;
`;

const AllImages = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70vw;
  margin-top: 20px;
`;

const CurrentUserImage = styled.img`
  height: 120px;
  margin: 4px;
  border-radius: 10px;
  opacity: 0.6;

  &:hover {
    border: 3px solid #292929;
  }
`;

const Image = styled.img`
  height: 120px;
  margin: 4px;
  border: 1px solid #292929;
  border-radius: 10px;

  &:hover {
    border: 4px solid #292929;
    transition: 0.3s ease-in-out;
  }
`;

const Members = styled.h2`
  color: #292929;
  width: 70vw;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Section;
