const Discord = require("discord.js");
const config = require('./config.json');
const response = require('./responses');

const bot = new Discord.Client();


const PREFIX = '!';
const waitTime = 1000 * 60 * 60;
let lastMessaged;

bot.once('ready', () => {
    console.log("Shinji Bot is Online")
});

bot.on('message', msg => {
    if (msg.author.id != '691032621253263490') return;

    if (commands(msg)) return;
    if (!lastMessaged || lastMessaged + waitTime < Date.now()) {
        msg.channel.send('Welcome back master, please touch me more UwU')
        lastMessaged = Date.now();

        return;
    }
    lastMessaged = Date.now();



    msg.channel.send(response[Math.floor(Math.random() * response.length)]);


});

function commands(msg) {
    const args = msg.content.split(/[ ]+/);
    const cmd = args[0].toLowerCase().substr(PREFIX.length);

    switch (cmd) {
        case 'img':
        case 'image':
            msg.channel.send('', {
                files: ['./Shinjipic.jpg']
            })
            break;
        case 'help' :
            msg.channel.send('Here is -----> help')
            break;
    
    
        }
}



bot.login(config.token);