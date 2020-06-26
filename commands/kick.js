module.exports = {
  name: 'kick',
description: 'kick a nibba', 
execute(message, args, client, db) {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('nah, no permission');
  const user = message.mentions.users.first();
  
   if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick({
            reason: args.join(' '),
          }).catch(err => {
            // An error happened
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });

            message.reply(`Successfully kicked ${user.tag}`);
  
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to kick!");
    }
  }
}