const clientFunc = require("./client");

const login = async (username, password) => {
  const client = clientFunc();
  await client.connect();
  const res = await client.query(
    "SELECT * FROM users WHERE username=$1 AND password=$2",
    [username, password]
  );
  client.end();
  if (res.rowCount !== 0) {
    return {
      status: 200,
      body: res.rows,
    };
  } else {
    return {
      status: 400,
      message: "Unauthorized",
    };
  }
};

module.exports = login;
