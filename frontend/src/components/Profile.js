import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Friend from "./Friends";

function Profile({ allUsers }) {
  const { id } = useParams();
  const [idUser, setIdUser] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${id}`).then((response) =>
      response.json().then((json) => {
        setIdUser(json.data);
        setFriends(json.data.friends);
      })
    );
  }, [id]);

  return (
    <Wrapper>
      <Background></Background>
      <PersonInfo>
        <PersonImage src={idUser.avatarUrl}></PersonImage>
        <PersonName>{idUser.name}</PersonName>
      </PersonInfo>
      <FriendsWrapper>
        <p>{idUser.name}'s Friends</p>
        <SeperateLine></SeperateLine>
        <FriendsMap>
        {friends.map((friend,index) => {
         return <Friend key={index} friend={friend} />;
        })}
        </FriendsMap>
      </FriendsWrapper>
    </Wrapper>
  );
}

const FriendsMap = styled.div`
display: flex;
`;

const SeperateLine = styled.hr`
  width: 70vw;
  border-top: 1px solid #292929;
`;

const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-top: -80px;
`;

const PersonName = styled.p`
  margin-left: 20px;
  margin-top: 20px;
  font-size: 25px;
`;

const PersonImage = styled.img`
  height: 250px;
  border: 3px solid #292929;
  border-radius: 10%;
  transform: translateY(-50%);
`;

const PersonInfo = styled.div`
  display: flex;
  width: 70vw;
`;

const Wrapper = styled.div`
  color: #292929;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 350px;
  background: url(/images/facespace_bg.jpg) center center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default Profile;
