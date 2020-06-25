module.exports = {
    name: 'unmute',
    description: 'Remove the tape from a mouth.',
    aliases: ['unshush', 'unshutup', 'unhush'],
    execute: async (message, args, client, db) => {  
      let muteRole = message.guild.roles.cache.get('698332954505511062') || message.guild.roles.cache.get('714662654504861726') || message.guild.roles.cache.find(role => role.name === 'Muted');
      if (!muteRole) muteRole = await message.guild.roles.create({ name: "Muted", permissions: 0 }); 
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You don\'t have permission to unmute anyone, mate.');
      if (!message.mentions.members.first()) return message.reply('You gotta mention somebody!');
      const member = message.mentions.members.first();
        db.set(`muted_${member.user.id}_${message.guild.id}`, false);
      member.roles.remove(muteRole);
      message.reply('I unmuted that nibba');
      }
  }