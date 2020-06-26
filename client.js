String.prototype.isASCII = () => /^[\x00-\x7F]*$/.test(this);
require('dotenv').config();
const fs = require('fs'),
 Discord = require('discord.js');
// Modules
const client = new Discord.Client({ ws: { intents: 32767 } });
const enmap = require("enmap");
client.db = new enmap({name: "db"});
const random = require('random'),
 Enmap = enmap,
 db = client.db,
 axios = require('axios'),
 reactions = require('./events/reactions.js'),
 cleverbot = require("cleverbot-free"),
 prefix = process.env.PREFIX,
 token = process.env.TOKEN;

// Creates the bot  

client.commands = new Discord.Collection();
client.points = new Enmap({name: "points"});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
// Load the commands


const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 30, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 45, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 300, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: false, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
client.on('message', message => { if (message.channel.name.toLowerCase().includes('spam')) return; try {antiSpam.message(message)} catch (error) {}}); 

const cooldowns = new Discord.Collection();
const dscs = '709295829885649018';
const invites = db.get('invites') || {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);
  // "ready" isn't really ready. We need to wait a spell.

client.once('ready', () => {
	console.log('Ready!');
client.user.setActivity('over the greatest people | -help', { type: 'WATCHING' });
  // Initialize the invite cache

  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
      db.set('invites', invites);
    });
  });
});

// Track invites

//Starboard
reactions.starboardAdd(client);
reactions.starboardRemove(client);


// Events which you dont wanna touch
client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (oldMember.displayName !== newMember.displayName) {
if (!newMember.displayName.isASCII()) newMember.setNickname('pingable name');
else if (newMember.nickname && !newMember.nickname.isASCII()) newMember.setNickname('pingable name');
  }
  //if (newMember.user.id === '415238591455690753'/* || newMember.user.id === '529192006531022856'*/) {
 //   if (newMember.nickname !== 'Dickhead cocksucker')
  //   return newMember.setNickname('Dickhead cocksucker');
  /*} else if (newMember.user.id === '674690021965692939') {
    if (newMember.nickname !== 'Gay nigger') {
      newMember.setNickname('Gay nigger');
    }; */
//  };
  const member = newMember;
  if (newMember.user.id === '675485335597350914') return member.setNickname('cancelled sbt');
  else if (member.user.id === '717621240197808131') return newMember.setNickname('YES MY PP BIG TO KID!!!');
});

client.on('guildCreate', guild => {
  console.log(guild);
  console.log(guild.roles.cache.array().forEach(r => console.log(r.name)));
  if (guild.id !== '641827833156599818' && dscs) {
    guild.channels.cache.array().forEach(c => c.send('This isnt a server im allowed  to be in. Goodbye!')) 
    guild.leave;
  }
});

require('./events/emojiCreate');
require('./events/emojiUpdate');

client.on('guildMemberAdd', member => {
  if (!member.displayName.isASCII()) member.setNickname('pingable name');
  const welcome = member.guild.channels.cache.get('645446735887597588') || member.guild.channels.cache.get('714664747504762912');
  if (member.guild.id === dscs) member.roles.add('714265338769834063');
  else member.roles.add('709984117714059315');
     const allMembers = member.guild.memberCount;
  const botCount = member.guild.members.cache.filter(m => m.user.bot == true).size;
  const memberCount = member.guild.members.cache.filter(m => m.user.bot == false).size;
  const allMembersC = member.guild.channels.cache.get('714662303869436006') || member.guild.channels.cache.get('710306367004475442');
  const botCountC = member.guild.channels.cache.get('714662549295202336') || member.guild.channels.cache.get('710306373371691108');
  const memberCountC = member.guild.channels.cache.get('714662444810633216') || member.guild.channels.cache.get('711304407475683438');
  memberCountC.edit({ name: `User Count: ${memberCount}`});
  botCountC.edit({ name: `Bot Count: ${botCount}`});
  allMembersC.edit({ name: `All Members: ${allMembers}`});
  if (db.get(`muted_${member.user.id}`)) member.roles.add(member.guild.roles.cache.get('698332954505511062'));
  welcome.send(new Discord.MessageEmbed().setTitle(`${member.user.tag}  has joined!`).setImage(member.user.displayAvatarURL()).addField(`Member Count`, `${memberCount}th member!`));
  welcome.send(`${member.user}`);
    const newMember = member;
     member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.cache.get(invite.inviter.id);
    // Get the log channel (change to your liking)
    const logChannel = welcome;
    // A real basic message with the information we need. 
    logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });
    db.set('invites', invites);
  
});

client.on('guildMemberRemove', member => {
  const welcome = member.guild.channels.cache.get('645446735887597588') || member.guild.channels.cache.get('714664747504762912');
  if (member.guild.id == '641827833156599818') {
     const allMembers = member.guild.memberCount;
  const botCount = member.guild.members.cache.filter(m => m.user.bot == true).size;
  const memberCount = member.guild.members.cache.filter(m => m.user.bot == false).size;
  const allMembersC = member.guild.channels.cache.get('714662303869436006') || member.guild.channels.cache.get('710306367004475442');
  const botCountC = member.guild.channels.cache.get('714662549295202336') || member.guild.channels.cache.get('710306373371691108');
  const memberCountC = member.guild.channels.cache.get('714662444810633216') || member.guild.channels.cache.get('711304407475683438');
  memberCountC.edit({ name: `User Count: ${memberCount}`});
  botCountC.edit({ name: `Bot Count: ${botCount}`});
  allMembersC.edit({ name: `All Members: ${allMembers}`});
  if (db.get(`muted_${member.user.id}`)) member.roles.add(member.guild.roles.cache.get('698332954505511062'));
  welcome.send(new Discord.MessageEmbed().setTitle(`${member.user.tag}  has left so fuck them!`).setImage(member.user.displayAvatarURL()));
  welcome.send(`${member.user}`);

  }
    db.set('invites', invites);
  });
client.on('message', message => {  
  const context = [];
	const args = message.content.slice(prefix.length).split(/ +/);
  if (message.channel.id == '709961226234364044' && !message.author.bot) {
      if (message.content.startsWith(prefix)) return;
    var messageContent = message.content.replace(/\s+/g, '');
cleverbot(args.join(' '), context).then(response => {
  console.log(response);
  context.push(args.join(' ')); message.channel.startTyping();
  client.channels.cache.get('709961226234364044').send(message.author.username + ', ' + response).then(() => setTimeout(() => message.channel.stopTyping(), 200));
 });
  }
});

client.on("message", message => {
  // As usual, ignore all bots.
  if (message.author.bot) return;
  
  // If this is not in a DM, execute the points code.
  if (message.guild) {
    // We'll use the key often enough that simplifying it is worth the trouble.
    const key = `${message.guild.id}-${message.author.id}`;

    // Triggers on new users we haven't seen before.
    client.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    
    client.points.inc(key, "points");
    
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**!`);
      client.points.set(key, curLevel, "level");
    }
  }
  // Rest of message handler
});

client.on('message', message => {  
  if (message.author.bot) return;
  let isMatchingBrackets = str => {
if (str.startsWith('(')) 
return true;
    else return false;
}
  if (isMatchingBrackets(message.content)) return;
  else if (message.content === '(RESET)') { db.set(`dscsC_${message.author.id}`, {});message.channel.send(message.author.username + ', I reset!').catch(err => console.error(err));};const context2 =db.get(`dscsC_${message.author.id}`);if (!context2) db.set(`dscsC_${message.author.id}`, []);const args = message.content.slice(prefix.length).split(/ +/);if (message.channel.id == '709993671344521226' && !message.author.bot) {const c = message.content.toLowerCase();if (c === 'what is your code?' || c === 'whats ur code') return message.channel.send(`const context2 = [];const args = message.content.slice(prefix.length).split(/ +/);var messageContent = message.content.replace(/\s+/g, '');cleverbot(args.join(' '), context2).then(response => {console.log(response);context2.push(args.join(' '));message.channel.startTyping();client.channels.cache.get('709993671344521226').send(message.author.username + ', ' + response).then(() => setTimeout(() => message.channel.stopTyping(), 200));});}`);var messageContent = message.content.replace(/\s+/g, '');db.set(`dscsC_${message.author.id}`, context2);cleverbot(args.join(' '), context2).then( response => {console.log(response);context2.push(args.join(' ')); message.channel.startTyping();db.set(`dscsC_${message.author.id}`, context2);client.channels.cache.get('709993671344521226').send(message.author.username + ', ' + response).then(nigger => nigger.channel.stopTyping());
 });
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.includes('sbt')) message.channel.send('#sbtisoverparty');
  if (message.content.includes(`${client.user}`) && !message.author.bot) return message.reply('don\'t fucking ping me bitch.');
  if (message.channel.id === '709993671344521226') return;
              if (message.channel.id === '710738397085565018' && !message.content.toLowerCase().includes('airline food') ) message.delete();                   
	const args = message.content.slice(prefix.length).split(/ +/);
if (message.content === 'uriel') return message.reply('His name is Urinal, and he has brain damage. He also is in a special education class and likes to hide how gay he is.');
  if (!message.content.startsWith(prefix)) return;
	const commandName = args.shift().toLowerCase();
// if (message.author.id == '675485335597350914') return; // SBT
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
  if (message.channel.id == '703329978422394890' && message.author.id !== '465564943065022475' && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.has('645445022686380033') && commandName !== 'e' && commandName !== 'jeb_' && commandName !== 'jeb' && commandName !== 'bot') return message.reply('Don\'t use Commie Bot here, Urinal will start crying.');

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
  
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
  if (message.guild) {
if (!message.member.hasPermission('ADMINISTRATOR') && message.author.id !== '465564943065022475' && message.guild)
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  };
	try {
		command.execute(message, args, client, db);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);