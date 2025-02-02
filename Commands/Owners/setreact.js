const { Client, Message } = require("discord.js");
const dqb = require("pro.db");

module.exports = {
    name: "setreact",
    aliases: ["setreact"],
    description: "A simple react command.",
    
    run: async (client, message) => {
        const Pro = require(`pro.db`);
        const db = Pro.get(`Allow - Command setreact = [ ${message.guild.id} ]`);
        const allowedRole = message.guild.roles.cache.get(db);
        const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);

        if (!isAuthorAllowed && message.author.id !== db  && !message.member.permissions.has('ADMINISTRATOR')) {
            return message.react(`❌`);
        }

        try {
            const args = message.content.split(" ");

            const ChannelId = args[1];
            const Emoji1 = args[2];
            const Emoji2 = args[3];
            const Emoji3 = args[3];
            const Emoji4 = args[4];
            const Emoji5 = args[5];
            const Emoji6 = args[6];


            if (!ChannelId) return message.reply({ content: "**يرجى ارفاق ايدي الشات ومن ثم الاموجيات .**" });

            const channel = message.guild.channels.cache.find((c) => c.id === ChannelId.replace(/<#|>/g, "") || c.name === ChannelId);
            if (!channel) return message.reply({ content: "**يرجى ارفاق ايدي الشات ومن ثم الاموجيات .**" });

            dqb.set(`RoomInfo_${channel.id}`, {
                Channel_Id: channel.id,
                Emoji1_Id: Emoji1,
                Emoji2_Id: Emoji2,
                Emoji3_Id: Emoji3,
                Emoji4_Id: Emoji4,
                Emoji5_Id: Emoji5,
                Emoji6_Id: Emoji6
            });

            message.react('✅');
        } catch (e) {
            console.log(e);
        }
    }
};
