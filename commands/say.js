module.exports = {
    name: 'say',
    description: 'YO YO YO, MAKE ME SAY SOME SHIT!',
    aliases: ['repeat'],
    execute(message, args, client, db) {  
      message.delete();
      if (message.content.includes('@everyone')) return;
      message.channel.send(`${message.author}: ` + args.join(' '));
    }
}