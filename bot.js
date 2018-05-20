const Discord = require('discord.js');
const config = require("./config.json");
const random = require("./random.js");
const Music = require('discord.js-musicbot-addon');

require('events').EventEmitter.defaultMaxListeners = Infinity;

const client = new Discord.Client();

const music = new Music(client, {
	youtubeKey: process.env.ytapikey, //Youtube Dev API3 Key
	prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'default', defVolume: 100, anyoneCanSkip: true, messageHelp: true,
	botOwner: '352384456977285130', helpCmd: 'assist', playCmd: 'play',	skipCmd: 'skip', queueCmd: 'queue',
	pauseCmd: 'pause', resumeCmd: 'resume', volumeCmd: 'vol', leaveCmd: 'leave', clearCmd: 'clear', setCmd: 'set',
	loopCmd: 'loop', searchCmd: 'search', ownerCmd: 'owner', enableQueueStat: true});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({game:{type: "WATCHING", name:"llamas eat kebabs"}});
});

client.on('message', msg => {
	const pref = msg.content.slice(0, 1);
	const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (pref === config.prefix) {
  
		if (command === 'ping') {
			msg.channel.send('Pongity Pong!');
		}
		
		else if (command === 'lenny') {
			msg.channel.send(random.select('lenny'));
		}
		
		else if (command === 'help') {
  			var help = new Discord.RichEmbed()
				.setTitle('Here is some info *sends help* ^u^ -')
				.addField('__Owner__ ~','Lena#1548')
				.addField('__Prefix__ ~','~')
				.addField('__Commands__ ~', 'Ping, Help, Stab, Eat, Punda, Drink, Duckymomo, Facedesk, Facepalm, Cri, Shrug, Tableflip, Slap, Llama, Hug, Gif, Coffee, Tea, Cuddle, Colesprouse, Cri, Punchmartin, 8ball')
				.setColor(16775069)
			msg.channel.sendEmbed(help);
		}
		
		else if (command === 'stab') {
			msg.channel.send("", {file:"https://i0.wp.com/blackandyellowotakugamers.com/wp-content/uploads/2017/06/ayase-stab.gif"});
		}
		
		else if (command === 'eat') {
			msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
		}
		
		else if (command === 'punda') {
			msg.channel.send('Best teacher ever! - https://i.pinimg.com/originals/b8/44/51/b844518e4262f54396470be38f183aae.gif');
		}
		
		else if (command === 'drink') {
			 msg.channel.send("", {file:"https://nerdramblesblog.files.wordpress.com/2017/01/tumblr_inline_nrul77ouju1szu3bc_500.gif"});
		}
		
		else if (command === 'duckymomo') {
			msg.channel.send("", {file:"https://i.pinimg.com/originals/aa/c9/d2/aac9d28cdac664c4916256010bd19127.gif"});	
		}
		
		else if (command === 'facedesk') {
			msg.channel.send("", {file:"https://media1.tenor.com/images/9d30a11e7978ea3b404d5e48c5966c6b/tenor.gif"});
		}
		
		else if (command === 'facepalm') {
			msg.channel.send("",{file: random.select('facepalm')});
		}
		
		else if (command === 'cri') {
			msg.channel.send("",{file: random.select('cri')});
		}
		
		else if (command === 'shrug') {
			msg.channel.send('¯\\_(ツ)_/¯');
		}
		
		else if (command === 'tableflip') {
			msg.channel.send("", {file:"https://i.imgur.com/4lCNxmh.gif"});
		}
		
		else if (command === 'slap') {
			msg.channel.send("", {file:"https://i.imgur.com/4MQkDKm.gif"});
		}
		
		else if (command === 'llama') {
			msg.channel.send("",{file: random.select('llama')});
		}
		
		else if (command === 'hug') {
			msg.channel.send("",{file: random.select('hug')});
		}
		
		else if (command === 'gif') {
			msg.channel.send("",{file: random.select('gif')});
		}
		
		else if (command === 'coffee') {
			msg.channel.send("", {file:"https://i.gifer.com/73Il.gif"});
		}
		
		else if (command === 'tea') {
			msg.channel.send("", {file:"https://78.media.tumblr.com/36f70582cb88d7f7fdc092574eabb76c/tumblr_oju3esp58b1uc9x1zo1_500.gif"});
		}
		
		else if (command === 'cuddle') {
			msg.channel.send("", {file:"https://m.popkey.co/32edb3/zE7XE.gif"});
		}
		
		else if (command === 'colesprouse') {
			msg.channel.send("",{file: random.select('colesprouse')});
		}
		
		else if (command === 'cri') {
			msg.command.send("",{file: random.select('cri')});
		}
		
		else if (command === 'punchmartin') {
			msg.channel.send('@Dnami#5981, you have been punched by msg.author.toString() + "", {file:"http://i0.kym-cdn.com/photos/images/original/000/641/427/824.gif"});
		}
		
		else if (command === '8ball') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("You need to ask a question!");
				return;
			} else {
				msg.channel.send(random.select('8ball'));
			}
		}
		else {
			return;
		}
	} else {
		return;
	}
});

client.login(process.env.token);
