module.exports = {
    name: 'refresh',
    description: 'refresh ',
    execute(message, args, client) {
      const child_process = require('child_process');
      if (message.author.id == '465564943065022475') return message.reply('I am restarting...').then(child_process.exec('refresh')); 
      else {
        message.channel.send('You do not have permission to run this command!');
      }
  }
}