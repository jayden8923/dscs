module.exports = {
    name: 'purge',
    description: 'clear chat',
  aliases: ['clear', 'bulkdelete'],
    execute: async(message, args, client) => {  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('nah, no permission');
      if (typeof parseInt(args[0]) !== typeof 1) return message.channel.send('invalid number!');
     const toDelete = await message.channel.messages.fetch({ limit: parseInt(args[0]) });
      try {
        toDelete.forEach(messag => messag.delete());
        
      } catch (err) {
        console.error(err);
        return;
        message.channel.send('error! jayden will fix that');
              };
      message.reply('done!').then(messag => messag.delete({ timeout: 500 }));
  }
}