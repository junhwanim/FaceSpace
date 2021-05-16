import React from "react";
import Section from "./Section";

function Homepage({
  allUsers,
  userFriends,
  setUserFriends,
  currentUser,
  setCurrentUser,
}) {
  return (
    <div>
      <Section
        allUsers={allUsers}
        userFriends={userFriends}
        setUserFriends={setUserFriends}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}

export default Homepage;
