const express = require("express");
const router = express.Router();
const { user, park, attraction } = require("../db/models");
const bcrypt = require("bcrypt");

const app = express();

const { csrfProtection, asyncHandler } = require("./utils");

app.use(csrfProtection);

app.get(
  "/user/register",
  asyncHandler(async (req, res, next) => {
    const users = await db.User.build({
      emailAddress,
      fistName,
      lastName,
    });
    res.render("user-register", { users, csrfToken: req.csrfToken(), title: "Register" });
  })
);

app.post(
  "/user/register",
  asyncHandler(async (req, res, next) => {})
);
