module.exports = {
    name: 'add-money',
    description: 'Directly input money into someone\'s bank.',
    aliases: ['addmoney', 'set-money'],
    execute(message, args, client, db) {  
      if (message.author.id != '465564943065022475') return message.reply('you ');
      if (!message.mentions.users.first()) return message.reply('nibba you gotta mention a nibba.');
      if (!args[1]) return message.reply('how much money i add?'); 
const mny = `money_${message.mentions.users.first().id}`
      db.set(`money_${message.mentions.users.first().id}`, parseInt(db.get(mny)) + parseInt(args[1]));
      message.reply('I gave that nibba some money');
  }
}