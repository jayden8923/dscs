const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'attach',
    description: 'ook ook nigber',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      const isUrl = require('is-url');
      if (!isUrl(args.join(' '))) return message.reply('invalid URL!');
      message.delete();
      const Attachment = new d.MessageAttachment(`${args.join(' ')}`);
      
      message.channel.send(Attachment);
  }
}