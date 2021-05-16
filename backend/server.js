"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  deleteUser,
  getUsers,
  getUserById,
  handleFriends,
  updateUser,
} = require("./handlers");

// placing the users in memory | a poor man's database ;)
// any changes to the this data will persist only until the server restarts.
const users = require("./data/users.json");

// this function add the users array to the res object so that subsequent
// functions can access it via res.locals.users.
// We need to do this because the handlers are in a different file
// and don't have access to the users variable that was declared in server.js.
const passUsersAlong = (req, res, next) => {
  res.locals.users = users; // adds users to the res
  next(); // this passes the req, and res to the next handler in chain
};

const app = express();
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/users", passUsersAlong, getUsers);
app.put("/api/users", passUsersAlong, updateUser);
app.get("/api/users/:id", passUsersAlong, getUserById);
app.delete("/api/users/:id", passUsersAlong, deleteUser);
app.patch("/api/friends", passUsersAlong, handleFriends);

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
