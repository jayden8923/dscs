const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'pornsearch',
    description: 'title',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      if (!message.channel.nsfw) return message.channel.send('No, I don\'t think i will.');
              const PornHub = require('pornhub.js');
const pornhub = new PornHub();
const res = await pornhub.search('Video', args.join(' '));
      
        if (!res[Object.keys(res)[0]]) return message.reply('no results found, pervert!');
      console.log(res);
        const embed = new d.MessageEmbed().setTitle('Results:');
      res.data.forEach(video => {
        embed.addField('Result', `[${video.title}](${video.url})`);
      });
      const send = message.channel.send;
      message.channel.send(embed);
  }
}