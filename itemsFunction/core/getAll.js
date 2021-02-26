const clientFunc = require("./client");

async function getAll() {
  const client = clientFunc();
  await client.connect();
  const res = await client.query("SELECT * from items");
  await client.end();
  return res.rows;
}

module.exports =  getAll;
