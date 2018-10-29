const Discord = require('discord.js');
const config = require("./config.json");
const random = require("./random.js");
const Music = require('discord.js-musicbot-addon');

require('events').EventEmitter.defaultMaxListeners = Infinity;

const client = new Discord.Client();

Music.start(client, {
	youtubeKey: process.env.ytapikey,
	prefix: config.prefix, maxQueueSize: 100, thumbnailType: 'high', defVolume: 100, anyoneCanSkip: true,
	botOwner: '352384456977285130', enableQueueStat: true});
	
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({game:{type: "WATCHING", name:"Lena sleep o-o"}});
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
			.setTitle('Here is some info! ^u^ -')
			.addField('Owner ~','Lena#1548')
			.addField('Prefix ~','~')
			.addField('Commands List ~', '~Commands')
			.addField('Invite This Bot ~', '~Invite')
			.setColor(0x94f174)
			msg.channel.sendEmbed(help);
		}
		
		else if (command === 'commands') {
			var help = new Discord.RichEmbed()
			.setTitle('Here is the command list for this bot! ^u^ -')
			.addField('Actions ~', 'Wave, Stab, Eat, Drink, Hug, Facepalm, Facedesk, Cri, Tableflip, Slap, Cuddle, Smack')
			.addField('Info ~', 'Help, Commands, Invite')
			.addField('Music ~', 'Play, Skip, Pause, Resume, Loop, Queue')
			.addField('Gifs ~', 'Colesprouse, Tomholland, Duckymomo, Llama, Gif')
			.addField('Other ~', 'Bedtime, Yoke, Lenny, Ping, Shrug, Coffee, Tea, 8ball, Pomegranates')
			.setColor(0x94f174)
			msg.channel.sendEmbed(help);
		}
			
		else if (command === 'wave') {
			msg.channel.send("",{file: random.select('wave')});
		
		}
		
		else if (command === 'stab') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to tag a user!");
				return;
			} else {
				msg.channel.send("",{file: random.select('stab')});
			}
		}
		
		else if (command === 'invite') {
			msg.channel.send('https://discordapp.com/oauth2/authorize?client_id=444107463709556746&scope=bot');
		}
		
		else if (command === 'eat') {
			msg.channel.send("",{file: random.select('eat')});
		}
		
		else if (command === 'bedtime') {
			msg.channel.send("",{file: random.select('bedtime')});
			
		}
		
		else if (command === 'bedtime') {
			var help = new Discord.RichEmbed()
			.setTitle('Bedtime Story!')
			.addField('The Three Little Pigs ~', Once upon a time, there were 3 little pigs, they were living with their mothers but the time came and they were all old enought to leave their houses. The first pig had left and decided to build a house made of straw. The second pig decided to build a house made of sticks, his house was slightly stronger than the previous house. The third had built a house made of bricks, the brick house is the strongest of them all. As nighttime came, a big bad wolf came to pay a little visit to the first pig, an unforgiving visit. The Wolf yelled at the young pig: "Let me in!", and the pig's response was "Not by the hair of my chinny chin chin". So the wolf huffed, and puffed and blew the house away. The first pig quickly ran the the second pig's house and the wolf followed, he said: "Let me in!", and they both answered: "Not by the hair of my chinny chin chin"Once upon a atime, there were 3 little pigs, they were living with their mothers but the time came and they were all old enought to leave their houses. The first pig had left and decided to build a house made of straw. The second pig decided to build a house made of sticks, his house was slightly stronger than the previous house. The third had built a house made of bricks, the brick house is the strongest of them all. As nighttime came, a big bad wolf came to pay a little visit to the first pig, an unforgiving visit. The Wolf yelled at the young pig: "Let me in!", and the pig's response was "Not by the hair of my chinny chin chin". So the wolf huffed, and puffed and blew the house away. The first pig quickly ran the the second pig's house and the wolf followed, he said: "Let me in!", and they both answered: "Not by the hair of my chinny chin chin"Once upon a atime, there were 3 little pigs, they were living with their mothers but the time came and they were all old enought to leave their houses. The first pig had left and decided to build a house made of straw. The second pig decided to build a house made of sticks, his house was slightly stronger than the previous house. The third had built a house made of bricks, the brick house is the strongest of them all. As nighttime came, a big bad wolf came to pay a little visit to the first pig, an unforgiving visit. The Wolf yelled at the young pig: "Let me in!", and the pig's response was "Not by the hair of my chinny chin chin". So the wolf huffed, and puffed, and blew the house away. The first pig quickly ran the the second pig's house and the wolf followed, he yelled: "Let me in!", and they both answered: "Not by the hair of my chinny chin chin", so the wolf huffed, and puffed, and blew the house away. Both the pigs ran for their lives, they ran as quickly as they ever could towards the third pig's house. The wolf came to the thrid brother's house and yelled: "Let me in!", and they all answered: "Not by the hair of my chinny chin chin!" so the wolf huffed, and he puffed, but he couldn't blow the house away. The wolf got furious, hedecided to get a ladder and climb up the house, he then stood on the brick roof, the wolf slid down the chimney and the chimney fire was on, the wolf quickly ran out of the house crying and yelling in pain, he knew never to disturb those pigs again, the end.')
			.setColor(0x94f174)
			msg.channel.sendEmbed(help);
			
		}
		
		else if (command === 'yoke') {
			msg.channel.send("", {file:"https://vignette.wikia.nocookie.net/hellokitty/images/7/77/Sanrio_Characters_Gudetama_Image004.png"});
		}
		
		else if (command === 'pomegranates') {
			msg.channel.send('https://www.youtube.com/watch?v=OlI8r3nNUVw');
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
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to tag a user!");
				return;
			} else {
				msg.channel.send("",{file: random.select('slap')});
			}
		}
		
		else if (command === 'llama') {
			msg.channel.send("",{file: random.select('llama')});
		}
		
		else if (command === 'hug') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to tag a user!");
				return;
			} else {
				msg.channel.send("",{file: random.select('hug')});
			}
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
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to tag a user!");
				return;
			} else {
				msg.channel.send("", {file:"https://m.popkey.co/32edb3/zE7XE.gif"});
			}
		}
		
		else if (command === 'colesprouse') {
			msg.channel.send("",{file: random.select('colesprouse')});
		}
		
		else if (command === 'tomholland') {
			msg.channel.send("",{file: random.select('tomholland')});
		}
		
		else if (command === 'cri') {
			msg.command.send("",{file: random.select('cri')});
		}
			
		else if (command === 'smack') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to tag a user!");
				return;
			} else {
				msg.channel.send("", {file:"https://i.gifer.com/B2Sp.gif"});
			}
		}
		
		else if (command === '8ball') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to ask a question!");
				return;
			} else {
				msg.channel.send(random.select('8ball'));
			}
		}
		
		else {
			return;
		}
	} 
	else {
		return;
	}
});

client.login(process.env.token);
