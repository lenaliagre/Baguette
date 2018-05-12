const fs = require('fs');

module.exports = {
	select: function(filename) {
		var file = fs.readFileSync(filename + '.txt', 'utf8');
		var data = file.replace(/\r/g, '');
		var list = data.split('\n');
		var rand = Math.floor(Math.random()*list.length);
		return list[rand];
	}
};