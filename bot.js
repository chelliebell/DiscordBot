const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.MLaiB6WlUjv7TwNVmlq-e9vGrC1A_jz6);//BMLaiB6WlUjv7TwNVmlq-e9vGrC1A_jz6 is the Client Secret
