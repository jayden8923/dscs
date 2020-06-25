module.exports = {
    name: 'binary',
    description: 'binary',
    aliases: ['10', '01'],
    execute(message, args, client, db) {  
      const axios = require('axios');
      var apiurl;
      apiurl = 'https://some-random-api.ml/binary?text=' + args.join().replace(/ /g,"+");
      axios.get(apiurl).then(resp => {
const d = require('discord.js');
  message.channel.send(resp.data.binary);
    console.log(resp.data);
});
  }
}