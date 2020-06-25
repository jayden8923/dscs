module.exports = {
    name: 'ping',
    description: 'ping',
    execute(message, args, client) {  
      if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id != '465564943065022475') return message.reply('you aren\'t admin!');
      if (args[0] !== 'yes') return message.channel.send('This is a mass ping command, u sure bout dat? (Run -ping yes if you\'re sure.)'); else
      if (args[0] === 'yes') return message.guild.members.cache.forEach(m => message.channel.send(`${m}`).then(ms => ms.delete()));
  }
}