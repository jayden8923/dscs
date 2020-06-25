const d = require(`discord.js`);
const whip = new d.MessageAttachment(`https://media.giphy.com/media/jPHS5ciig3PZDRI19G/giphy.gif`);
module.exports = {
    name: `whip`,
    description: `whip a slave`,
    aliases: [],
    execute(message, args, client, db, gm) {  
const m = message.mentions.members.first();
      if (!m) return message.reply(`u cant whip air`);
      db.get('slaves').forEach(slave => {
        if (!slave.owner === message.author.id || slave.slave !== m.user.id && slave.slave === message.author.id) return message.reply(`Not a slave or you dont own this slave!`);
      });
message.channel.send(whip);
      message.channel.send(`${m.user}`);
  }
}