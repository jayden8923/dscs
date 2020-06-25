const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'search',
    description: 'Search for something online!! NIBERB!!',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      const filter = m => m.author === message.author;
      message.reply('what would you like to search for nibber?');
const collector = message.channel.createMessageCollector(filter, { time: 15000, max: 1 });

collector.on('collect', m => {
	db.set('search_' + m.author.id, { toSearch: m.content });
  message.reply('which search result do you want? (1-5)');
    const collector2 = message.channel.createMessageCollector(filter, { time: 15000, max: 1 });

collector2.on('collect', em => {
  if (em.content != 1 && em.content != 2 && em.content != 3 && em.content != 4 && em.content != 5) return message.reply('i said 1-5!');
  const nigger = db.get(`search_${m.author.id}`);
  const googleIt = require('google-it');
 
googleIt({ query: db.get(`search_${message.author.id}`).toSearch })
  .then(results => {
   console.log(results);
  const result = results[parseInt(em.content) - 1];
  message.channel.send(new d.MessageEmbed().setTitle(result.title).setURL(result.link).setDescription(result.snippet));
  })
  .catch(e => {
  console.error(e);
  message.channel.send('error! error! error!');
  return;
  });
	db.set('search_' + m.author.id, nigger);
    
});
});
  }
}