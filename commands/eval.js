const d =require('discord.js');
module.exports = {
    name: 'eval',
    description: 'JAYDEN CAN USE THIS ONLY!',
     execute: async (message, args, client, db, gm) => {      const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
       if (message.author.id !== require('../ownerid.js')) {
         const vm = require('vm');
         
const context = {};
vm.createContext(context);
         try {
           const evaled = vm.runInContext(args.join(' '), context);
message.channel.send(new d.MessageEmbed().setTitle('EVAL').setDescription('Output: ' + `\`\`\`x1\n${evaled}\`\`\``));
         } catch(error) {
           console.error(error);
message.channel.send(new d.MessageEmbed().setTitle('ERROR').setDescription(`\`\`\`x1\n${error}\`\`\``));
         }
         return;
       }
       var childPorn = 'nah';
       const mc = message.channel;
       const m = message;
       const partner = string => {
         let channel = client.channels.cache.get('645446744414617600');
         channel.send(string);
       };
       var i;
       i = 0;
      if (message.author.id !== '465564943065022475') return message.reply('DON\'T!');
 
      try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(new d.MessageEmbed().setTitle('EVAL').setDescription('Output: ' + `\`\`\`x1\n${evaled}\`\`\``));
    } catch (err) {
      console.error(err);
message.channel.send(new d.MessageEmbed().setTitle('ERROR').setDescription(`\`\`\`x1\n${err}\`\`\``));
    }
  }
}