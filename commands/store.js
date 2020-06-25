module.exports = {
    name: 'store',
    description: 'Items you can buy.',
    aliases: ['shop', 'market', 'marketplace'],
    execute(message, args, client, db) {  
      if (message.channel.id !== '710604500074758204' && !message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '465564943065022475' && message.channel.id !== '683523070031298583') return message.reply('<#710604500074758204>');
      const storeItems = require('../items.js');
      module.exports.items = storeItems;
      const d = require('discord.js');
      const embed = new d.MessageEmbed()
      .setTitle('Store').setDescription('═════════════════════════════════════');
      Object.values(storeItems).forEach(item => {
        embed.addField(item.name, item.description + ' Price: $' + item.price);
      });
      message.channel.send(embed);
  }
}