const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'removeslaveowner',
    description: 'Remove a slave owner.js',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
              function r(arr, value) { return arr.filter(function(ele){ return ele != value; });}
      
     if (!args.length) return message.reply('no you cant do that11!1!1!1!1!1!');
     else if (message.author.id !== jID) return message.channel.send('BRO YOU GAY!!!!!!!!!!!!!!!!!');
      const niggerz = db.get('slaveowners') || [];
      if (!niggerz.includes(message.mentions.users.first().id)) return message.reply('rape me daddy!');
  
      db.set('slaveowners', r(niggerz, message.mentions.users.first().id));
      message.reply('Done!!!!!');
  }
}