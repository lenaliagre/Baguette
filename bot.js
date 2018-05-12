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
  
<<<<<<< HEAD
	if (command === 'ping') {
		msg.channel.send('Pong!');
	}
	else if (command === 'sweet') {
		msg.channel.send("", {file:"https://img2.bibamagazine.fr/var/bibamagazine/storage/images/1/3/2/2/1322547/un-musee-bonbon-voir-jour-new-york_width1024.jpg"});
	}
	else if (command === 'lenny') {
		msg.channel.send(random.select(randomlenny));
	}
	else {
		return;
	}
=======
  if (command === 'ping') {
    msg.channel.send('Pong!');
  }
  else if (command === 'sweet') {
	  msg.channel.send("", {file:"https://img2.bibamagazine.fr/var/bibamagazine/storage/images/1/3/2/2/1322547/un-musee-bonbon-voir-jour-new-york_width1024.jpg"});
  }
  else if (command === 'lenny') {
		msg.command.send(random.select(randomlenny));
  }
  else {
    return;
  }
>>>>>>> c59e310f34c9ddf7d05e9d3ae29b8eee4d3dd6fb
});

client.login(process.env.token);  
