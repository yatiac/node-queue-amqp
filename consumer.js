const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error, connection) => {
  if (error) {
    throw error;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = "node_queue";
    channel.assertQueue(queue, {
      durable: true,
    });
    channel.prefetch(1);

    console.log("Waiting for messages in %s", queue);
    channel.consume(queue, function (msg) {
      console.log("Received '%s'", msg.content.toString());
      setTimeout(function () {
        channel.ack(msg);
      }, 1000);
    });
  });
});
