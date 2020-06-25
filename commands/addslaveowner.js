const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'addslaveowner',
    description: 'Add a slave owner.js',
    aliases: ['slavemasters', 'slaveowners'],
    execute: async (message, args, client, db, gm) => {  
      const embed = new d.MessageEmbed().setTitle('Slave Masters');
      if (db.get('slaveowners')) db.get('slaveowners').forEach(slaveowner => {
        embed.addField('Slave Owner', client.users.cache.get(slaveowner).tag);
      });
      
      if (!args.length) return message.reply(embed)
      if (message.author.id !== jID) return message.channel.send('BRO YOU GAY!!!!!!!!!!!!!!!!!');
      const niggerz = db.get('slaveowners') || [];
      if (db.get('slaveowners')) {
      if (db.get('slaveowners').includes(message.mentions.users.first().id)) return message.reply('rape me daddy!');
      }
      niggerz.push(message.mentions.users.first().id);
      db.set('slaveowners', niggerz);
      message.reply('Done!!!!!');
  }
}