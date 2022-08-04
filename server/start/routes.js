const error = require("../middleware/error");
const express = require("express");
const postUser = require("../routes/postUser");
const loginUser = require("../routes/loginUser");
const posts = require("../routes/post");
const getMe = require("../routes/getMe");
const profile = require("../routes/profile");
module.exports = (app) => {
  app.use(express.json());
  app.use("/api/post", postUser);
  app.use("/api/login", loginUser);
  app.use("/api/get/post", posts);
  app.use("/api/profile/me", getMe);
  app.use("/api/profile", profile);
  app.use(error);
};