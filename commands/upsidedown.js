const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'reverse',
    description: 'reverse text',
    aliases: [],
    execute(message, args, client, db, gm) {  
      if (!args.length) return;
     const flip = require('flip-text');
      function reverseString(str) {
  return str.split("").reverse().join("");
}
      
      const outcome = reverseString(args.join(' '));
      message.channel.send('Flipped text: ' + outcome)
  }
}