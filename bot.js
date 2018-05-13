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
	else if (command === 'lenny') {
		msg.channel.send(random.select('lenny'));
	}
	else if (command === 'stab') {
		msg.channel.send("", {file:"https://i0.wp.com/blackandyellowotakugamers.com/wp-content/uploads/2017/06/ayase-stab.gif"});
	}
	else if (command === 'eat') {
		msg.channel.send("", {file:"https://media.giphy.com/media/8XUZ0XauUBnoY/giphy.gif"});
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
		msg.channel.send(random.select('facepalm'));
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
	else if (command === 'hug') {
		msg.channel.send("", {file:"https://i.pinimg.com/originals/87/b5/50/87b55088247f99d5766ef6179ecdcceb.gif"});
	}
	else if (command === 'gif') {
		msg.channel.send(random.select('gif'));
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
		msg.channel.send(random.select('colesprouse'));
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
});

client.login(process.env.token);
