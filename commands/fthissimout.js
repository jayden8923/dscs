const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'fuckthisshitimout',
    description: 'I dont really care, ima get the fuck up outta here',
    aliases: ['fthissimout'],
    execute: async (message, args, client, db, gm) => {  
      message.channel.send(new d.MessageAttachment('https://cdn.glitch.com/e131d9b6-f84d-4cf4-ae52-fbe07fc27140%2FFuck%20This%20Shit%20I\'m%20Out.mp4?v=1590998654461'));
  }
}