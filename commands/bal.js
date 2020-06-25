module.exports = {
    name: 'bal',
    description: 'How much money you have.',
    aliases: ['balance', 'money'],
    execute(message, args, client, db) {  
      if (!message.mentions.users.first()) {
 const bal = db.get(`money_${message.author.id}`); 
        console.log(bal);
if (!bal) db.set(`money_${message.author.id}`, 500);
      const embed = {
    "embed": {
        "title": "Amount of Money",
        "color": 16711680,
        "footer": {
            "text": `${message.member.displayName}'s balance`,
            "icon_url": `${message.author.displayAvatarURL()}`
        },
        
    }
      };
        if (bal > 0) embed.embed.description = `${message.member.displayName}, you have ${bal} dollars.`;
        else embed.embed.description = `${message.member.displayName}, you have ${bal} dollars.
Wait... YOU'RE IN DEBT!`;
      
 return message.channel.send(embed);
      } else {
     
      const mBal = db.get(`money_${message.mentions.users.first().id}`);
      
const mEmbed = {
    "embed": {
        "title": "Amount of Money",
        "color": 16711680,
        "footer": {
            "text": `${message.mentions.members.first().displayName}'s balance`,
            "icon_url": `${message.mentions.users.first().displayAvatarURL()}`
        },
        "description": `${message.mentions.members.first().displayName} has ${mBal} dollars.`
    }
}; console.log(mBal);
        return message.channel.send(mEmbed);
  }}
}