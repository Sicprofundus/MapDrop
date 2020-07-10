const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.login(config.token);


const locations       = [
	"D1", "E1", "F1",
	"C2", "D2", "E2", "F2", "G2", "H2",
	"C3", "D3", "E3", "F3", "G3", "H3",
	"C4", "D4", "E4", "F4", "G4", "H4",
	"B5", "C5", "D5", "E5", "F5", "G5", "H5", "I5",
	"B6", "C6", "D6", "E6", "F6", "G6", "H6", "I6",
	"B7", "C7", "D7", "E7", "F7", "G7", "H7", "I7",
	"C8", "D8", "E8", "F8", "G8", "H8", "I8" 
	];

const contract = [ "Bounty", "Intel", "Scavenger", "King", "Supply Run" ];


client.once('ready', () => {
	console.log('MapDrop Bot Ready!');
	console.log('use "!MapDrop,", "!Contract", or "!MapDrop Contract"')
});

function randomNumber(min, max) {  
	min = Math.ceil(min); 
	max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  

client.on('message', message => {
	if (message.content === '!mapdrop help') {
		message.channel.send(`\`\`\`css\n You can issue MapDrop requests with: !Mapdrop, !MapDrop Contract, or !Contract.\n\`\`\``);
	}
	
	if (message.content === '!mapdrop') {
		loclen = locations.length - 1;
		let mapdrop = locations[randomNumber(0, loclen)];
		message.channel.send(`\`\`\`css\n Drop Location: ${mapdrop}\n\`\`\``);
	}
	
	if (message.content === '!contract') {
		conlen = contract.length - 1;
		let mission = contract[randomNumber(0, conlen)];
		message.channel.send(`\`\`\`css\n Mission Type: ${mission}\n\`\`\``);
	}
	
	if (message.content === '!mapdrop contract') {
		loclen = locations.length - 1;
		conlen = contract.length - 1;
		let mapdrop = locations[randomNumber(0, loclen)];
		let mission = contract[randomNumber(0, conlen)];
		message.channel.send(`\`\`\`css\n Drop Location: ${mapdrop} - Mission Type: ${mission}\n\`\`\``);
		
	}
});
