module.exports = {
  name: "release",
  description: "Release a slave",
  aliases: ['letgo'],
  execute(message, args, client, db, gm) {
          if (message.mentions.members.first() && db.get('slaveowners').includes(message.author.id)) {
        const member = message.mentions.members.first();
            const m = member;
        let toadd = db.get('slaves');
      db.get('slaves').forEach(slave => {
        if (!slave.owner === message.author.id || slave.slave !== m.user.id && slave.slave === message.author.id) return message.reply(`Not a slave or you dont own this slave!`);
      });
        toadd = db.get('slaves');
            function r(arr, value) { return arr.filter(function(ele){ return ele != value; });}
     toadd.forEach(s => {
       if (s.slave === m.user.id) {
        db.set('slaves', r(toadd, s))
        message.reply('That person is no longer a slave!');
         return;
       }
})
      } else return message.reply('either you are not a slave owner, or didnt mention someone who was a slave.')
  }
};
