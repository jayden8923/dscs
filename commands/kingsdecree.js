const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'kingsdecree',
    description: 'description',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      message.reply('Anyone who is female or has a female profile pic is required to send naked pictures of themselves to all staff of the server. Otherwise you will be banished to the shadow realm.');
  }
}