const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'comment',
    description: 'description',
    aliases: [],
    execute(message, args, client, db, gm) {  
      var attachment = message.attachments.first() || message.author.displayAvatarURL();
      const comment = new d.MessageAttachment();
      console.log(gm(attachment).comment(args.join(' ')));
     // message.channel.send();
  }
}