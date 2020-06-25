module.exports = {
    name: 'mute',
    description: 'Tape a mouth SHUT.',
    aliases: ['shush', 'shutup', 'hush', 'gulag'],
    execute: async (message, args, client, db) => {  
      let muteRole = message.guild.roles.cache.get('698332954505511062') || message.guild.roles.cache.get('714662654504861726') || message.guild.roles.cache.find(role => role.name === 'Muted');
      if (!muteRole) muteRole = await message.guild.roles.create({ name: "Muted", permissions: 0 }); 
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You don\'t have permission to mute anyone, mate.');
      if (!message.mentions.members.first()) return message.reply('You gotta mention somebody!');
      const member = message.mentions.members.first(); 
      const user = member;
      
        db.set(`muted_${member.user.id}_${message.guild.id}`, true);
      member.roles.add(muteRole);
      message.reply('I muted that nibba');     
    }
}