const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'addmodrole',
    description: 'description',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      if (message.author.id !== jID) return message.reply('you have no permission to do that!');
      let role = message.mentions.roles.first();
      if (role) role = role.id;
      else if (!role) role = args[0];
      else if (!role) return message.reply('???????');
      if (db.get('modroles').includes(role)) return message.reply('what?!?! that role is already a modrole!');
      const modroles = db.get('modroles') || [];
      modroles.push(role);
      db.set('modroles', modroles);
      message.reply('done! added that role to the modroles!');
      return;
  }
}