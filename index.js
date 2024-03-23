const { Client, intents, Collection, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton } = require("discord.js");
const client = new Client({ intents: 32767 })
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('Server Started');
});

const fs = require("fs")
const ms = require(`ms`)
const Discord = require("discord.js")
const { prefix, owners } = require(`${process.cwd()}/config`);
const config = require(`${process.cwd()}/config`);
const Data = require("pro.db")
const mongoose = require("mongoose")
const { createCanvas, registerFont } = require("canvas")
const canvas = require('canvas')
const {  MessageSelectMenu } = require('discord.js');
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require(`${process.cwd()}/config`);
require("./handler")(client);
client.prefix = prefix;
client.login(config.token);
mongoose.connect(config.db)
.then(() => { console.log("MongoDB Connected ✅"); })
.catch((err) => { console.error("Failed to connect to MongoDB", err); });
require("events").EventEmitter.defaultMaxListeners = 9999999;
client.on("ready", async () => {
  console.log(`Name : ${client.user.tag}
Ping : ${client.ws.ping}
Prefix : ${client.prefix}
ID : ${client.user.id}
Server : ${client.guilds.cache.size}
Members : ${client.users.cache.size}
Channels : ${client.channels.cache.size}`)
});