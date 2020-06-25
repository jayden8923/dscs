module.exports = {
  name: 'idban',
description: 'ban a nibba not in server with id', 
  aliases: ['idexecute'],
execute(message, args, client) {
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('nah, no permission');
  var user = client.users.fetch(args.join(' '));
   if (user) {
        message.guild.members
          .ban(args.join(' '),{
            reason: args.join(' '),
          }).catch(err => {
            // An error happened
            message.reply('I was unable to ban the member.');
            // Log the error
            console.error(err);
          });
            message.reply(`Successfully banned ${user.tag}`);
          
 
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't tell the id of the user to ban!");
    }
  }
}