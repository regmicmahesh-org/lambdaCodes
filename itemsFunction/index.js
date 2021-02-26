const getAll = require("./core/getAll");
const getOne = require("./core/getOne");
exports.handler = async (event) => {
  const { type, id } = JSON.parse(event.body);
    
  if (type === "all") {
    return await getAll();
  }
  if(type == "byId"){
      return await getOne(id);
  }
  //TODO: Implement Single Function
};
