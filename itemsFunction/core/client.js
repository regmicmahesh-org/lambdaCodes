const { Client } = require("pg");

module.exports = function () {
  const client = new Client({
    host: "#",
    user: "postgres",
    password: "#",
  });
  return client;
};
