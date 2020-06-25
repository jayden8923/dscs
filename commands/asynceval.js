const d =require('discord.js');
module.exports = {
    name: 'asynceval',
    description: 'JAYDEN CAN USE THIS ONLY!',
     execute: async (message, args, client, db, gm) => { 
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
      const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
      try {
      const code = args.join(" ");
      let evaled = eval (eval(`( async () => {
  ${code}
})()`));
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(new d.MessageEmbed().setTitle('EVAL').setDescription('Output: ' + `\`\`\`x1\n${evaled}\`\`\``));
    } catch (err) {
      console.error(err);
message.channel.send(new d.MessageEmbed().setTitle('ERROR').setDescription(`\`\`\`x1\n${err}\`\`\``));
    }
  }
}