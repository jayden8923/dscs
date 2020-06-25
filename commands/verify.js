const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'verify',
    description: 'description',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      // code
      message.member.roles.add('709984117714059315');
  }
}