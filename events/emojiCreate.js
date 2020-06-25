module.exports =  ( client, db ) => {
  client.on('emojiCreate', async emoji => {
    if (db.get('emojibank').hasOwnProperty(emoji.name)) return emoji.delete('Emoji overwrites emoji bank emoji, needs to change name').then( async() => { const EmojiAuthor = await emoji.fetchAuthor(); EmojiAuthor.send('Emoji deleted since it overwrites an already existing emoji in the emoji bank!')});
  });
};