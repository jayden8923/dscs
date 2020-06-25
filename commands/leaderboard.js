module.exports = {
    name: 'leaderboard',
    description: 'Money leaderboard',
    aliases: [],
    async execute(message, args, client, db, gm) {  
      const e = require('discord.js').MessageEmbed;
      const m = message;
      var moneyersDB = db.all();
      var moneyers = moneyersDB.filter(guy => guy.ID.includes('money_'));
      var max = 25;
      const embed = new e().setTitle('Leaderboard');
          const embed2 = new e();
      const embed3 = new e();
      const embed4 = new e();
      const embed5 = new e();
      moneyers.forEach(mneryr => {
        if (!mneryr) return;
            var id = mneryr.ID.match(/\d+/g);
        const moneyerM = message.guild.members.cache.get(`${id}`);
        if (!moneyerM)return;
        if (embed4.fields.length == max) {
          
 embed5.addField(mneryr.data, moneyerM.user.username);
        } else
        if (embed3.fields.length == 25) {
 embed4.addField(mneryr.data, moneyerM.user.username);
        } else
        if (embed2.fields.length == 25) { 
        embed3.addField(mneryr.data, moneyerM.user.username);
        } else if (embed.fields.length == max) {
        embed2.addField(mneryr.data, moneyerM.user.username);
        } else {
        const moneyerM = message.guild.members.cache.get(`${id}`);
        console.log(mneryr)
        if (!moneyerM) return;
        embed.addField(mneryr.data, moneyerM.user.username);
        }
      });
      await m.author.send(embed);
      await m.author.send(embed2);
      await m.author.send(embed3);
      await m.author.send(embed4);
      await m.author.send(embed5);
  }
}