const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'exec',
    description: 'description',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
const { execSync } = require('child_process');
const output = execSync(args.join(' '), { encoding: 'utf-8' });  
console.log('Output was:\n', output);
      if (message.author.id !== jID) return;
      else {
        const evaled = 'I swallow all the cum!!';
      message.channel.send(new d.MessageEmbed().setTitle('EXEC').addField('Input', args.join(' ')).addField('Output:', `\`\`\`x1\n${output}\`\`\``));
      }
  }
}