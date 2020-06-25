const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'customemojis',
    description: 'List all of the bot\'s custom emojis!',
    aliases: ['customemojilist', 'elist'],
    execute: async (message, args, client, db, gm) => {  
      const customEmojis = db.get('emojibank');
      const embed = new d.MessageEmbed()
      Object.keys(customEmojis).forEach(emoji => embed.addField(`by ${customEmojis[emoji].creator}`, emoji, true));
      
      message.channel.send(embed);
  }
}