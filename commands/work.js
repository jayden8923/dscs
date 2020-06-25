module.exports = {
    name: 'work',
    description: 'Do some manual labor for money.',
    aliases: ['labor'],
    execute(message, args, client, db) {        
      const amountSet = new Set(), n = 250;
for (let i = 0; i < n; i++) {
  amountSet.add(i);
}      const gri = set => {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}  
      var amount = gri(amountSet);
      if (args[0] == 'slave' && db.get('slaves').includes(message.author.id)) { message.reply('you picked some cotton!')} else {
      const workMsgs = ['You work in the streets doing prostitution, you gain money but got aids.', 'You clean the marshals ass with your penis.', 'You do a PornHub livestream with a vibrator but people donated so much you vibrated to almost death.', 'You try to rob a black person but his whole gang pulls up and beats the FUCK outta you but you suck them off for money.'];
      const workmsg = workMsgs[Math.floor(Math.random()*workMsgs.length)];

      const lossSet = new Set(), nn = 250;
      for (let i = 0; i < nn; i++) {
  amountSet.add(i);
}

      const gril = set => {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)] - items[Math.floor(Math.random() * items.length)] -1;
}
      var amount = gri(amountSet);
      const embed = {
    "embed": {
        "title": "Work",
        "description": workmsg,
        "footer": {
            "text": `${message.author.username} gained ${amount}`,
            "icon_url": `${message.author.displayAvatarURL()}`
        }
    }
}
      const oldBal = parseInt(db.get(`money_${message.author.id}`));
      db.set(`money_${message.author.id}`, oldBal + amount)
      message.channel.send(embed); }
  }
}