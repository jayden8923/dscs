module.exports = {
    name: 'emoji',
    description: 'Send an animated emoji without nitro or an emoji from the emoji bank (Use -e if youre in epic chat channel and -e list for custom emojis, -e add <link> <emoji name> to add custom emoji and -e remove <emoji name> to remove one)',
    aliases: ['emote', 'e'],
  usage: "<emoji name>",
    execute(message, args, client, db, gm) { 
      const d = require('discord.js');
      const specialArgs = [...args];
      specialArgs.shift();
      if (args[0] === 'list') return client.commands.get('customemojis').execute(message, args, client, db, gm);
      else if (args[0] === 'add') return client.commands.get('emojibankadd').execute(message, specialArgs, client, db, gm);
      else if (args[0] === 'remove') return client.commands.get('emojibankremove').execute(message, specialArgs, client, db, gm);
      if (!client.emojis.cache.find(emoji => emoji.name.toLowerCase() === args.join(' ').toLowerCase()) && !db.get('emojibank').hasOwnProperty(args[0])) return message.reply('Invalid emoji!');
      let emoji = client.emojis.cache.find(emoji => emoji.name.toLowerCase() === args.join(' ').replace(':', '').toLowerCase());
      if (!emoji) {
         emoji = db.get('emojibank')[args[0]].url;
        if (!emoji) return message.reply('Invalid emoji!');
        message.channel.send(new d.MessageAttachment(`${emoji}`))
        return;
      }
      message.channel.send(`${emoji}`);
      
  }
}