#!/usr/bin/env node

const amqp = require("amqplib/callback_api");

function enviar(msg) {
  amqp.connect(process.env.AMQP_URL, function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = process.env.QUEUE;

      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(msg));

      console.log(" [x] Sent %s", msg);
    });
  });
}

module.exports = {
  enviar,
};
