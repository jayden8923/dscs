const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'bot',
    description: 'Haha bot',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      message.delete();      		
      const webhooks = await message.channel.fetchWebhooks();
		var webhook = webhooks.first() || await message.channel.createWebhook('BOT!!!!', {
	avatar: 'https://i.imgur.com/wSTFkRM.png',
});
      if (args[0] === 'embed') {
              var username = message.member.nickname || message.author.username;
        const embed =  new d.MessageEmbed();
        const Content =  [...args];
        Content.shift();
        const content = Content.join(' ');
        embed.setDescription(content);
        embed.setAuthor(username, message.author.displayAvatarURL());
      webhook.send({
			username: username,
			avatarURL: message.author.displayAvatarURL(),
        embeds: [embed]
      });
      } else {

      var username = message.member.nickname || message.author.username;
      webhook.send(args.join(' '), {
			username: username,
			avatarURL: message.author.displayAvatarURL(),
		});
      }
  }
}