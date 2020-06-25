module.exports = {
    name: 'snipe',
    description: 'snipr',
    aliases: [],
    async execute(message, args, client, db, gm) {  
      const fs = require('fs');
     var snipes = db.get('snipes'); // file containing snipes
let chn = `${message.channel.id}`;
var snipechannel = snipes[chn]; // to call an specific deleted message I guess

if (!snipechannel) return message.channel.send("What? There are no deleted messages.");
  const embed = {
    "color": 'RANDOM',
    "footer": {
      "text": `Sniped by: ${message.author.tag}`,
      "icon_url": message.guild.members.cache.find(s => s.user.tag === snipechannel['tag']).user.displayAvatarURL()
    },
           "author": {
            "icon_url": `${message.author.displayAvatarURL()}`
        },
    "fields": [{
      "name": `${snipechannel['tag']} said...`,
      "value": `${snipechannel['message']}`
    }]
  };
  await message.channel.send({
    embed
  });
  snipechannel[0] = "No snipes";

  var fileName = '../snipe.json';
  var file = require(fileName);

db.set('snipes', snipes);
}
  }
