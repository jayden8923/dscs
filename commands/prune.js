const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'prune',
    description: 'See who\'d be kicked based on who wasn\'t active the past week.',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      const pruned = await message.guild.members.prune({ dry: true });
      
      message.channel.send(`We would kick ${pruned} people!`)
  }
}