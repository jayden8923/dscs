module.exports =  ( client, db ) => {
  client.on('emojiUpdate', async (fake, emoji) => {
    if (db.get('emojibank').hasOwnProperty(emoji.name)) return emoji.delete('Emoji overwrites emoji bank emoji, needs to change name').then( async() => { const EmojiAuthor = await emoji.fetchAuthor(); EmojiAuthor.send('Emoji deleted since it overwrites an already existing emoji in the emoji bank!')});
  });
};