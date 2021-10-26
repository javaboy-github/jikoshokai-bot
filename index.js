const Discord = require('discord.js');
const admin = require("firebase-admin");

var serviceAccount = require("./private_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseurl
});

const database = admin.database();
const ref = database.ref('napoan-server');

// discord
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const token = process.env.token;
const info = {};

client.once('ready', () => {
	console.log('Running discord bot');
});

client.on('messageCreate', message => {
	if (message.content.startsWith("/setinfo")) {
		database.ref(message.author.username).set(message.content.substr(9));
		message.channel.send("Setted");
	}
	if (message.content.startsWith("/getinfo")) {
		database.ref(message.content.substr(9)).once("value", (value) => {
			message.channel.send(value.val() || "No data");
		});
	}
});

client.login(token);
