const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'nickname',
    description: 'Change your nickname! horny',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
    if(!args.join(' ').isASCII()) return message.reply('ASCII nickname only.');
    else {
      message.member.setNickname(args.join(' '));         
      return;
    }
  }
}