
const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'emojibankadd',
    description: 'add an emoji',
    aliases: ['addemojibank'],
  usage: '<Attach an image (recommended) or link to an image (must be png)>',
    execute: async (message, args, client, db, gm) => {  
      if (args[1] === 'list') return message.reply('change the name of your emoji!');
      if (db.get('emojibank') && db.get('emojibank').hasOwnProperty(args[1])) return message.reply('that emoji already exists!');
      const attachIsImage = (msgAttach) => {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}
      const imgige = require('is-image-url');
 if (!imgige(args[0]) && !message.attachments.every(attachIsImage)) return message.reply('invalid link/not a picture! (attachments need to be .png)');
      if (message.attachments.first()) args[1] = args[0];
      if (!args[1]) return message.reply('Invalid emoji name!');
      else if (client.emojis.cache.find(emoji => emoji.name.toLowerCase() === args[1].toLowerCase())) return message.reply('emoji exists already! (use a different name)');
      
      const emojiBank = db.get('emojibank') || {};
      let newEmoji = message.attachments.first();
      if (!newEmoji) newEmoji = args[0];
      else newEmoji = message.attachments.first().url;
    
    try {
      emojiBank[args[1]] = { creator: `${message.author.tag}`, url: `${newEmoji}` };
      db.set('emojibank', emojiBank);
      message.reply('added your emoji to the emoji bank successfully!');
    } catch(err) {
      console.error(err);
      message.reply('I failed to add the emoji!');
    }
  }
}