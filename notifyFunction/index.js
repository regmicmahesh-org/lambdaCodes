const AWS = require("aws-sdk");

const sns = new AWS.SNS();

exports.handler = async (event) => {
  const ARN = "arn:aws:sns:us-east-1:048506110702:SMSChannel";
  const message = event.Records[0].body;

  const params = {
    Message: message,
    Subject: "From Lambda",
    TopicArn: ARN,
  };

  try {
    const resp = await sns.publish(params).promise();
    return {
      status: "Successful",
      message: resp,
    };
  } catch (err) {
    return {
      status: "Failed",
      message: err,
    };
  }
};
