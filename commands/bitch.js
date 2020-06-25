const apiurl = 'https://some-random-api.ml/img/dog';
module.exports = {
    name: 'bitch',
    description: 'Get a nice lil\' bitch ;)',
    aliases: [],
    execute(message, args, client, db) {  
      const axios = require('axios');

axios.get(apiurl).then(resp => {
const d = require('discord.js');
  message.channel.send(new d.MessageEmbed().setTitle('DO YOU LIKE THIS BITCH?!').setImage(resp.data.link));
    console.log(resp.data);
});
  }
}