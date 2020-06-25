module.exports = {
    name: 'pussy',
    description: 'Get some pussy ;)',
    aliases: ['cat', 'gimmesomepussy'],
    execute(message, args, client, db) {  
      const request = require('request');
      const D = require('discord.js');
      const Cat = "https://aws.random.cat/meow.php";
       request({
            url: Cat,
            json: true
        }, function (error, response, body) {
            console.log(body);
         const cat = new D.MessageAttachment(body.file);
         message.channel.send(new D.MessageEmbed().setTitle('YA\' LIKE THAT PUSSY?!').setImage(body.file));
        });
  }
}