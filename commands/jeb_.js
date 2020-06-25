const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'jeb_',
    description: 'water sheep? ',
    aliases: ['rainbowsheep'],
    execute(message, args, client, db, gm) {  
      const jeb_ = new d.MessageAttachment('https://cdn.glitch.com/e131d9b6-f84d-4cf4-ae52-fbe07fc27140%2F1891_rainbowsheep.gif?v=1590021857278');
      message.channel.send(jeb_);
  }
}