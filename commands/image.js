module.exports = {
    name: 'image',
    description: 'Search an image on the web.',
    aliases: ['searchbyimage','imagesearch', 'search-by-image', 'image-search'],
    execute(message, args, client, db, gm) {  
      const url = 'https://www.google.com/searchbyimage?site=search&sa=X&image_url=';
      var toSearch = url + args.join(' ');
      const apiKey = '2e30b6c076ebc765e4f6f1f248e6f5c04b7fe0d';
if (!args.length) toSearch = url + message.attachments.first().attachment;
      const isUrl = require('is-url');
      if (!isUrl(args.join(' ')) && !message.attachments.first()) return message.reply('invalid URL!');
      
      message.reply(toSearch);
    }
}