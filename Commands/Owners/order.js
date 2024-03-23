const d8b = require("pro.db");
const {owners } = require(`${process.cwd()}/config`);
module.exports = {
  name: "setcommandchannel",
  description: "To set channel room",
  usage: "!set-channel <channel>",
  run: async (client, message, args) => {






    
 //   if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`**😕 - You don't have permission**`);
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(message.content.split(" ")[1])

    if (!channel) {
      return message.reply("**يرجى ارفاق منشن الشات او الايدي .**");
    }

    d8b.set(`setChannel_${message.guild.id}`, channel.id);
    message.react(`✅`);
  }
};

