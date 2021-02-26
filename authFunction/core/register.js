const clientFunc = require("./client");

module.exports = async function (obj) {
  const client = clientFunc();
  await client.connect();
  let res;
  if (obj.email) {
    const { username, password, email } = obj;
    //TODO: Check if user already exists.
    res = await client.query(
      "INSERT INTO users(username,password,email) VALUES($1,$2,$3)",
      [username, password, email]
    );
    client.end();
  } else if(obj.password){
    const { username, password, phone } = obj;
    //TODO: Check if user already exists.
    res = await client.query(
      "INSERT INTO users(username,password,phone) VALUES($1,$2,$3)",
      [username, password, phone]
    );
    client.end();

  }
  if (res.rowCount !== 0) {
    return {
      status: 200,
      body: { username, email },
    };
  } else {
    return {
      status: 401,
      message: "DB Query Failed.",
    };
  }
};
