const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'children',
    description: 'see slave children!!!!!!!!',
    aliases: ['whaturielisinterestedin', 'kids'],
    execute(message, args, client, db, gm) {  
      const children = db.get('children');
      if(!children) return;
      const Embed = new d.MessageEmbed().setTitle('Slave Children');
      for (let [key, value] of Object.entries(children)) {
  console.log(`${key}: ${value}`);
        if (value < 2) Embed.addField(`${client.users.cache.get(key).tag}`, 'has a kid!', true);
        else Embed.addField(`${client.users.cache.get(key).tag}`, `has ${value} kids!`, true);
        
}
message.channel.send(Embed);
  }
}