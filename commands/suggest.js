module.exports = {
    name: 'suggest',
    description: 'Suggest something to jayden',
    aliases: ['request'],
    execute(message, args, client, db) {  
    const jID = require('../ownerid.js');
      message.reply('jayden just got dmed that kk bye.');
      client.users.cache.get(jID).send('suggestion from ' + message.author.username + ':' + args.join(' '));
  }
}