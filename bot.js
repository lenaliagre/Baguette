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
	client.user.setPresence({game:{type: "WATCHING", name:"Lena get high on Starbucks"}});
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
			.addField('Info ~', 'Commands, Help, Invite')
			.addField('Actions ~', 'Cri, Cuddle, Drink, Eat, Facedesk, Facepalm, Highfive, Hug, Slap, Smack, Stab, Tableflip, Wave')
			.addField('Music ~', 'Loop, Pause, Play, Queue, Resume, Skip')
			.addField('Gifs ~', 'Colesprouse, Duckymomo, Gif, Llama, Tomholland')
			.addField('Other ~', '8ball, Coffee, Lenny, Ping, Pomegranates, Shrug, Tea, Yoke')
			.setColor(0x94f174)
			msg.channel.sendEmbed(help);
			
		}
			
		else if (command === 'wave') {
				if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You weirdo, don't wave to yourself! Tag someone!");
				return;
			} else {
				msg.channel.send("",{file: random.select('wave')});
			
			}
		}
		
		else if (command === 'facephone') {
			msg.channel.send("",{file: random.select('facephone')});
			
		}
		
		else if (command === 'stab') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - No, just no! You shouldn't be stabbing yourself! Tag someone!");
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
		
		else if (command === 'yoke') {
			msg.channel.send("", {file:"https://vignette.wikia.nocookie.net/hellokitty/images/7/77/Sanrio_Characters_Gudetama_Image004.png"});
		
		}
		
		else if (command === 'pomegranates') {
			msg.channel.send('https://www.youtube.com/watch?v=OlI8r3nNUVw');
		
		}
		
		else if (command === 'drink') {
			msg.channel.send("",{file: random.select('drink')});
		
		}
		
		else if (command === 'duckymomo') {
			msg.channel.send("", {file:"https://i.pinimg.com/originals/aa/c9/d2/aac9d28cdac664c4916256010bd19127.gif"});
		
		}
		
		else if (command === 'facedesk') {
			msg.channel.send("",{file: random.select('facedesk')});
		
		}
		
		else if (command === 'facepalm') {
			msg.channel.send("",{file: random.select('facepalm')});
		
		}
		
		else if (command === 'highfive') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You loner, you can't highfive yourself, go get friends! Tag someone!");
				return;
			} else {
				msg.channel.send("",{file: random.select('highfive')});
			
			}
		}
		
		else if (command === 'cri') {
			msg.channel.send("",{file: random.select('cri')});
		
		}
		
		else if (command === 'shrug') {
			msg.channel.send('¯\\_(ツ)_/¯');
		
		}
		
		else if (command === 'tableflip') {
			msg.channel.send("",{file: random.select('tableflip')});
		
		}
		
		else if (command === 'slap') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - Oh dear, you shouldn't slap yourself! Tag someone!");
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
				msg.channel.send("**Incorrect Usage** - You can't hug yourself, weirdo! Tag someone!");
				return;
			} else {
				msg.channel.send("",{file: random.select('hug')});
			
			}
		}
		
		else if (command === 'gif') {
			msg.channel.send("",{file: random.select('gif')});
		
		}
		
		else if (command === 'coffee') {
			msg.channel.send("",{file: random.select('coffee')});
		
		}
		
		else if (command === 'tea') {
			msg.channel.send("",{file: random.select('tea')});
		
		}
		
		else if (command === 'cuddle') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You can't cuddle with yourself, that's just weird! Tag someone");
				return;
			} else {
				msg.channel.send("",{file: random.select('cuddle')});
			
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
				msg.channel.send("**Incorrect Usage** - Ouch! You shouldm't smack yourself! Tag someone");
				return;
			} else {
				msg.channel.send("",{file: random.select('smack')});
			
			}
		}
		
		else if (command === '8ball') {
			if (typeof args[0] === 'undefined') {
				msg.channel.send("**Incorrect Usage** - You need to ask a question, ya silly goose!");
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
