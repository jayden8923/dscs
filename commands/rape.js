const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'rayp',
    description: 'description',
    aliases: [],
    execute(message, args, client, db, gm) {  
      if (args[0] === 'joingangrape') {
        try {
        let gangraperz = db.get('gangrape_dscs') || {};
        if (gangraperz.hasOwnProperty(message.author.id)) return message.reply('you\'re already participating!');
gangraperz[message.author.id] = true;
        db.set('gangrape_dscs', gangraperz); 
        message.reply('you joined the gang rape. (pleas help - jayden)');
      } catch (err) {
        console.error(err);
        message.reply('error');
      }
      }
        else if (args[0] === 'startgangrape') {
        let gangraperzzz = db.get('gangrape_dscs');
      	let taggedUser = message.mentions.users.first();	
        if (!taggedUser) return message.reply('mention somebody!!');
        if (Object.keys(gangraperzzz).length < 2) return message.reply('not enough people!');
              for (let [key, value] of Object.entries(gangraperzzz)) {
  console.log(`${key}: ${value}`);
                let rapist = client.users.cache.get(key);
        message.channel.send(`${rapist} raped ${taggedUser}!`);
}
            message.channel.send({ files: [{
          attachment: 'https://cdn.glitch.com/833468b4-c0fc-44ae-9f2e-1c1e4effbbd9%2FNuttedOn.png',
          name: 'NuttedOn.png'
        }]});
            let membernn = message.guild.member(taggedUser);
    const nigger = membernn.nickname || taggedUser.username;
    if (membernn.nickname) db.set(`nicknamerape_${message.author.id}`, membernn.nickname);
    if (!db.get('pregnant')[taggedUser.id]) membernn.setNickname('Pregnant ' + nigger);
    const pregnant = db.get('pregnant') || {};
    pregnant[taggedUser.id] = pregnant[taggedUser.id] + 1 || 1;
    db.set('pregnant', pregnant);
        db.set('gangrape_dscs', {});
		return;
      } else {
      	let taggedUser = message.mentions.users.first();	
      if (!message.mentions.users.size) {
		message.reply("HM?");
		return;
	}
        const rapists = ['415238591455690753', jID, '612429580241862672', '426184187515502604', '269628671499698176', '192315873967472641'];
        if (!rapists.includes(message.author.id) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('you aren\'t experienced enough!')

	if (message.mentions.users.first()) {
      db.get('slaves').forEach(slave => {
        if (!slave.owner === message.author.id || slave.slave !== message.mentions.users.first().id && slave.slave === message.author.id) return message.reply(`Not a slave or you dont own this slave!`);
      });
		message.channel.send(`*Gets out from behind the counter and holds ${taggedUser}'s head against the table*`);
		message.channel.send(`Heard you are faggot as fuck ${taggedUser} so i guess this wont be rape!`);
    message.channel.send({ files: [{
          attachment: 'https://cdn.glitch.com/833468b4-c0fc-44ae-9f2e-1c1e4effbbd9%2FNuttedOn.png',
          name: 'NuttedOn.png'
        }]});
        const pregnant = db.get('pregnant') || {};
    pregnant[taggedUser.id] = pregnant[taggedUser.id] + 1 || 1;
    db.set('pregnant', pregnant);
    if (!message.guild.member(taggedUser).nickname) return;
    if (message.guild.member(taggedUser).nickname.includes('Pregnant')) return;
    let membernn = message.guild.member(taggedUser);
    const nigger = membernn.nickname || taggedUser.username;
    if (membernn.nickname) db.set(`nicknamerape_${message.author.id}`, membernn.nickname);
    if (!db.get('pregnant')[taggedUser.id]) membernn.setNickname('Pregnant ' + nigger);

		return;
	}
      }
  }
}