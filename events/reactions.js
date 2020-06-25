
module.exports = {
     starboardAdd(client)  {
       const { MessageEmbed } = require('discord.js');
  client.on('messageReactionAdd', async ( reaction, user ) => {
const message = reaction.message;
    if (reaction.emoji.name !== '⭐') return;
    if (message.author.id === user.id) return message.channel.send(`${user}, you cannot star your own messages.`);
    if (message.author.bot) return message.channel.send(`${user}, you cannot star bot messages.`);
    const starboardChannel = '⭐starboard';
    const starChannel = message.guild.channels.cache.find(channel => channel.name === starboardChannel)
    const fetchedMessages = await starChannel.messages.fetch({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new MessageEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])+1} | ${message.id}`)
        .setImage(image);
      const starMsg = await starChannel.fetchMessage(stars.id);
      await starMsg.edit(embed);
    }
    if (!stars) {
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      if (image === '' && message.cleanContent.length < 1) return message.channel.send(`${user}, you cannot star an empty message.`);
      const embed = new MessageEmbed()
        .setColor(15844367)
        .setDescription(message.cleanContent)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp(new Date())
        .setFooter(`⭐ 1 | ${message.id}`)
        .setImage(image);
      await starChannel.send(embed);
    }

  // Here we add the this.extension function to check if there's anything attached to the message.
  function extension(reaction, attachment) {
    const imageLink = attachment.split('.');
    const typeOfImage = imageLink[imageLink.length - 1];
    const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return '';
    return attachment;
  }
  })
    },starboardRemove(client) {
      client.on('messageReactionRemove', async(reaction, user) => {
       const { MessageEmbed } = require('discord.js');
         const message = reaction.message;
    if (message.author.id === user.id) return;
    if (reaction.emoji.name !== '⭐') return;
    const { starboardChannel } = 'starboard'
    const starChannel = message.guild.channels.cache.find(channel => channel.name == starboardChannel)
    if (!starChannel) return message.channel.send(`It appears that you do not have a \`${starboardChannel}\` channel.`); 
    const fetchedMessages = await starChannel.fetchMessages({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(reaction.message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new NessageEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])-1} | ${message.id}`)
        .setImage(image);
      const starMsg = await starChannel.fetchMessage(stars.id);
      await starMsg.edit({ embed });
      if(parseInt(star[1]) - 1 == 0) return starMsg.delete(1000);
    }


  // Now, it may seem weird that we use this in the messageReactionRemove event, but we still need to check if there's an image so that we can set it, if necessary.
  function extension(reaction, attachment) {
    const imageLink = attachment.split('.');
    const typeOfImage = imageLink[imageLink.length - 1];
    const image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return '';
    return attachment;
            }
      })
            
     }
  }