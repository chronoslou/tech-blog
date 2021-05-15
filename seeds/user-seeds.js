const { User } = require("../models");

const userData = [
  {
    username: "Louis",
    password: "password1",
  },
  {
    username: "Louie",
    password: "password2",
  },
  {
    username: "Lou",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
