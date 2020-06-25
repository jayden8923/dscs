module.exports = {
    name: 'help',
    description: 'The help command',
    execute(message, args, client) {
const commands = client.commands;
      const data = [];
      if (args[0]) {const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('That\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** -${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true })} else {
      const cArray = client.commands.array();
      data.push(commands.map(command => command.name));
      console.log(data + ' data')
      //Create the embeds
      const Discord = require('discord.js');
      const RichEmbed = Discord.MessageEmbed
      const ownerEmbed = new RichEmbed()
      .setTitle('⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀HELP⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀')
      .setDescription('═════════════════════════════════════')
      
      const userEmbed = new RichEmbed()
      .setTitle('⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀HELP⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀')
      .setDescription('═════════════════════════════════════')
      
      data.forEach(cmdd => {
cmdd.forEach(cmd => {
  if (cmd === 'verify') return;
      var dsc = commands.get(cmd).description;
        console.log(cmd + ' cmd');

          
        console.log(cmd);
              ownerEmbed.addField(cmd, dsc, true)
        userEmbed.addField(cmd, dsc, true)
      });
      
 userEmbed.addField('Music', 'Looking for music? Run m-help!'); message.channel.send(userEmbed);
        }); }
}
};

//══════════════HELP═══════════════
//⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀HELP⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀⑀


