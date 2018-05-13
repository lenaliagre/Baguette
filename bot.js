const Discord = require('discord.js');
const config = require("./config.json");
const random = require("./random.js");

require('events').EventEmitter.defaultMaxListeners = Infinity;

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(config.defaultActivity);
});

client.on('message', msg => {
	const pref = msg.content.slice(0, 1);
	const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
	if (command === 'ping') {
		msg.channel.send('Pong!');
	}
	else if (command === 'sweet') {
		msg.channel.send("", {file:"https://img2.bibamagazine.fr/var/bibamagazine/storage/images/1/3/2/2/1322547/un-musee-bonbon-voir-jour-new-york_width1024.jpg"});
	}
	else if (command === 'lenny') {
		msg.channel.send(random.select('lenny'));
	}
	else if (command === 'duckymomo') {
		msg.channel.send("", {file:"https://i.pinimg.com/originals/aa/c9/d2/aac9d28cdac664c4916256010bd19127.gif"});	
	}
	else if (command === '8ball') {
		if (typeof args[0] === 'undefined') {
			msg.channel.send("You need to ask a question!");
			return;
    	} else {
        	msg.channel.send(random.select('8ball');
    	}
	}
	else {
		return;
	}
});

client.login(process.env.token);
