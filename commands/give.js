module.exports = {
    name: 'give',
    description: 'Lend a pal some money.',
    aliases: ['pay', 'loan'],
    execute(message, args, client, db) {  
      if (!parseInt(args[1])) return message.reply('how much money do you want to give?');
      const gm = message.mentions.members.first();
      if (!gm) return message.reply('who you want to give money to?');
      db.set(`money_${gm.user.id}`, db.get(`money_${gm.user.id}`) + parseInt(args[1]));
      const a = message.author;
      db.set(`money_${a.id}`, db.get(`money_${a.id}`) - parseInt(args[1]));
      return message.reply('money given.');
  }
}