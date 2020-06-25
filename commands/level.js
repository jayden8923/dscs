const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'level',
    description: 'Im not even doing this description shit no more',
    aliases: [],
    execute(message, args, client, db, gm) {  
    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")}XP, and are level ${client.points.get(key, "level")}!`);
  }
}