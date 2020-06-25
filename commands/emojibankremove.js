const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'emojibankremove',
    description: 'Remove an emoji frmo the emoji bank',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      if  (!args[0]) return message.reply('wut?');
      if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== jID && db.get('emojibank')[args[0]].creator !== message.author.tag) return message.reply('This is not your emoji!');
      const emojibank = db.get('emojibank');
      try {
      delete emojibank[args[0]];
        db.set('emojibank', emojibank);
    message.reply('successfully deleted your emoji!')
      } catch (error) {
        console.error(error);
        message.reply('error!');
      };
  }
}