const clientFunc = require("./client");

async function getOne(id) {
  const client = clientFunc();
  await client.connect();
  const res = await client.query("SELECT * from items WHERE id=$1", [id]);
  await client.end();
  return res.rows;
}

module.exports =  getOne;
