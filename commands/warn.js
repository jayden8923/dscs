const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'warn',
    description: 'Warn someone in the server.',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      const GUFM = (mention) => {
	const matches = mention.match(/^<@!?(\d+)>$/);
	if (!matches) return;
	const id = matches[1];

	return client.users.cache.get(id);
}
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you don\'t have permisson to do that!');
      
	if (args[0]) {
		const user = GUFM(args[0]);
		if (!user) {
      return message.reply('who are you warning?');
		}
    if (message.member.roles.highest.position < message.guild.member(user).roles.highest.position || message.member.roles.highest.position === message.guild.member(user).roles.highest.position) return message.reply('you cannot warn this member!');
   const Reason = [...args];
     let reason = Reason.slice(1).join(' ');
    if (!reason) reason = "No reason specified";
    const warns = db.get('warns_' + message.guild.id) || [];
    const warnNumberz = db.get('warnNumbers') || 1;
    warns.push({ warnedID: user.id, reason: reason, number: warnNumberz });
    db.set('warns_' + message.guild.id, warns);
    const warnNumbers = db.get('warnNumbers') + 1 || 1;
    db.set('warnNumbers', warnNumbers);
    return message.reply('I have warned ' + user.tag + ' for ' + reason + '!');
  }
      }
  }