  module.exports = {
    name: 'use',
    description: 'use stuff idiot',
    aliases: ['consume'],
    execute(message, args, client, db) {  
      const di = db.get(`inventory_${message.author.id}`);
           if (!di) return message.reply('Buy something.');
      var bg = di[args.join(' ').toLowerCase()];
      if (!bg) return message.reply('You don\'t have that item.');
      message.reply(bg.used);
      if (bg.single) delete di[args.join(' ').toLowerCase()];
      message.author.inventory = di;
      db.set(`inventory_${message.author.id}`, message.author.inventory);
  }
}