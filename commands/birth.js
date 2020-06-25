const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'birth',
    description: 'FOR PREGNANT SLAVES ONLY!!!!',
    aliases: ['give-birth', 'givebirth', 'b'],
    execute(message, args, client, db, gm) {  
      const pregnant = db.get('pregnant');
      if (!pregnant.hasOwnProperty(message.author.id)) return message.channel.send('u aint not aint preganant');
      const nickname = db.get(`nicknamerape_${message.author.id}`) || message.author.username;
            function r(arr, value) { return arr.filter(function(ele){ return ele != value; });}
      message.member.setNickname(nickname);
      db.set('pregnant', pregnant[message.author.id] - 1);
      const children = db.get('children') || {};
      const soon = children[message.author.id] || 0;
      children[message.author.id] = soon + 1;
      db.set('children', children);
      message.reply('You gave birth to a FUCKING PIECE OF SHIT who will grow up to be a SLAVE! =\)');
      
  }
}