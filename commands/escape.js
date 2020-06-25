const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'escape',
    description: 'slavesaass',
    aliases: [],
    execute(message, args, client, db, gm) {  
     if (db.get('slaves').includes(message.author.id)) {
      message.reply('you got caught and got whipped!');
       return
       
     } else return;
  }
}