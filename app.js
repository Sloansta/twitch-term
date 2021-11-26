const tmi = require('tmi.js');
const client = new tmi.Client({
    connection: {
        reconnect: true
    },

    channels: [
        process.argv[2]
    ]
});

client.connect();

client.on('message', async (channel, context, message) => {
    console.log('channel: ' + channel + ' ' + context.username + ': ' + message);
});