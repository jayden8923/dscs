const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'addemoji',
    description: 'add an emoji',
    aliases: ['emojiadd'],
    execute: async (message, args, client, db, gm) => {  
         if (!message.member.hasPermission('MANAGE_EMOJIS') && message.author.id !== jID) return message.reply('no! 1');
      else {
        if (!args.length) return message.reply('no! 2');
        const isURL = require('is-url');
        if (!isURL(args[0])) return message.reply('no! 3');
        try {
         const emoji = await message.guild.emojis.create(`${args[0]}`, `${args[1]}`);
          message.channel.send(`new emoji! ${emoji.name}`); 
        } catch(error) {
          console.error(error);
          return message.reply('no!');
        }
      }
  }
}