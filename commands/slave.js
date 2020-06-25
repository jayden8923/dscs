module.exports = {
    name: 'slave',
    description: 'Look at the list of slaves',
    aliases: ['slaves', 'enslave'],
    execute(message, args, client, db, gm) {  

      if (message.mentions.members.first() && db.get('slaveowners').includes(message.author.id)) {
        const member = message.mentions.members.first();
        if (db.get('slaveowners').includes(member.user.id) && member) return message.reply('fuck you! what do you think you\'re trying to doin?');
        if (!db.get('slaves')) db.set('slaves', []);
        if (db.get('slaves').includes(member.user.id)) return message.reply('Already a slave!')
        let toadd = db.get('slaves');
        if (!toadd) db.set('slaves', []);
        toadd = db.get('slaves');
        for (let slave of toadd) {
          if (slave.slave === member.user.id) { message.reply('that slave is owned by ' + client.users.cache.get(slave.owner).toString() + '!');
                                               return;
                                              }
        };
        toadd.push({ owner: message.author.id,  slave: member.user.id });
        db.set('slaves', toadd);
        message.reply('That person is now a slave!');
        return;
      } else {
      const d = require('discord.js');
      const slavesE = new d.MessageEmbed().setTitle('Slaves');
 db.get('slaves').forEach(id => {
        let m = message.guild.members.cache.get(id.slave);
        let m2m = message.guild.members.cache.get(id.owner);
        if (!m) return;
        slavesE.addField(`Slave Owner: ${m2m.user.tag}, `, `Slave: ${m.user.tag}`, true);
      });
      message.channel.send(slavesE);
      }
  }
}