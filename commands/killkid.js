
const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'killkid',
    description: 'Put down your slave children.',
    aliases: [],
    execute(message, args, client, db, gm) {  
      if (!db.get('children').hasOwnProperty(message.author.id)) return message.reply('HM? YOU DON\'T HAVE ANY USELESS SLAVE CHILDREN!');
      const children = db.get('children');
      var nigger = children[message.author.id];
       nigger = children[message.author.id] - 1 || 0;
      if (children[message.author.id] < 1) delete children[message.author.id];
      db.set('children', children);
      message.channel.send('You put down one of your WORTHLESS children! NOW GO PICK COTTON!!!!!!!');
      console.log(children);
  }
}