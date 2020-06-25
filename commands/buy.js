module.exports = {
    name: 'buy',
    description: 'Buy an item from the store!',
    aliases: ['buyitem', 'buy-item', 'purchase', 'procure'],
    execute(message, args, client, db) {
      const items = require('../items.js');
      const toBuy = args.join(' ').toLowerCase();
      if (!args[0]) return message.reply('tf you tryin to buy?');
      const amount = parseInt(args[1]) || 1;
      
      if (!items[`${toBuy}`]) return message.reply('uhhh... mate, that ain\'t for sale!');
      const oldBal = db.get(`money_${message.author.id}`);
      db.set(`money_${message.author.id}`, oldBal - require('../items.js')[toBuy].price);
      const di = db.get(`inventory_${message.author.id}`);
      if (!message.author.inventory) message.author.inventory = {};
      if (!di) db.set(`inventory_${message.author.id}`, message.author.inventory);
      message.author.inventory[items[toBuy].name.toLowerCase()] = items[toBuy];
      db.set(`inventory_${message.author.id}`, message.author.inventory);
      message.reply('You just bought ' + items[toBuy].name + ' for $' + items[toBuy].price + '. How do you FEEL about yourself for SPENDING money?');
  }
}