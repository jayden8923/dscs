module.exports = {
  name: 'ban',
description: 'ban a nibba', 
  aliases: ['execute'],
execute(message, args, client, db) {
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('nah, no permission');
  var user = message.mentions.members.first();
   if (user) {
        user.ban({
            reason: args.join(''),
          }).catch(err => {
            // An error happened
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
            return
          });
            message.reply(`Successfully banned ${user.tag}`);
          
 
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
}