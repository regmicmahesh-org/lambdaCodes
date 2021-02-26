var AWS = require("aws-sdk");
var sqs = new AWS.SQS();
exports.handler = async (event) => {
  const email = event.queryStringParameters.email;

  var params = {
    MessageBody: `Your order is succesful. -${email}`,
    QueueUrl:
      "#",
  };

  await sqs.sendMessage(params).promise();

  return {
    status: 200,
    message: "Sent Message!",
  };
};
