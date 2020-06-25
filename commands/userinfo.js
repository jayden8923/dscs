const jID = require('../ownerid.js');
const d = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'userinfo',
    description: 'Get info on a user!',
    aliases: [],
    execute(message, args, client, db, gm) {  
        let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
  if (!muser) muser = message.member;
  if (!user) user = message.author;
  const embed = new d.MessageEmbed();
  embed
    .addField("Username", `${user.username}#${user.discriminator}`, true)
    .addField("ID", `${user.id}`, true)
    .setColor(3447003)
    .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
    .setTimestamp()
    .setURL(`${user.displayAvatarURL({ dynamic: true })}`)
    .addField("Currently", `${muser.presence.status.toUpperCase()}`, true)
    //.addField('Game', `${muser.presence.game === null ? "No Game" : muser.presence.game.name}`, true)
    .addField(
      "Joined Discord",
      `${moment(user.createdAt)
        .toString()
        .substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`,
      true
    )
    .addField(
      "Joined Server",
      `${moment(muser.joinedAt)
        .toString()
        .substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`,
      true
    )
    .addField("Roles", `${muser.roles.cache.array()}`, true)
    .addField("Is a bot?", `${user.bot.toString().toUpperCase()}`, true)
    .setFooter(`DSCS`);
  message.channel.send({ embed });

  }
}