const jID = require('../ownerid.js');
module.exports = {
    name: 'emit',
    description: 'Jayden do things',
    aliases: [],
    execute(message, args, client, db, gm) {  
      if (message.author.id !== jID) return;
      var man = args[1];
      var woman = args[0];
      if (!woman) woman = 'guildMemberAdd';
      if (!man) man = message.member;
      eval(client.emit(woman, man));
  }
}