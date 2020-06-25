const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'flip',
    description: 'flip text upside down and backwards',
    aliases: ['invert'],
    execute(message, args, client, db, gm) {  
      if (!args.length) return;
     const flip = require('flip-text');
      function reverseString(str) {
  return str.split("").reverse().join("");
}
      
      const outcome = flip(args.join(' '));
      message.channel.send('Flipped text: ' + outcome)
  }
}