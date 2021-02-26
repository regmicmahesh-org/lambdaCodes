const login = require("./core/login");
const register = require("./core/register");

exports.handler = async (event) => {
  const { type, username, password, email, phone } = JSON.parse(event.body);
  if (type === "login") {
      return (await login(username,password));
  }else if(type === "register"){
      return (await register({username, password, email, phone}));
  }else{
      throw new Error("Request is not recognized by the server.")
  }
};
