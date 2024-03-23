const { owners } = require(`${process.cwd()}/config`);
const Discord = require('discord.js');
const db = require(`pro.db`)

module.exports = {
    name: 'setavatar',
    run: async (client, message, args) => {


        const Data = db.get(`Allow - Command setavatar = [ ${message.guild.id} ]`)
const allowedRole = message.guild.roles.cache.get(Data);
const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
const isOwner = owners.includes(message.author.id);

if (!isAuthorAllowed && message.author.id !== Data && !isOwner) {
    // إجراءات للتصرف عندما لا يتحقق الشرط
    return message.react('❌');
}
        let avatarURL = '';

        if (message.attachments.size > 0) {
            avatarURL = message.attachments.first().url;
        } else if (args.length > 0) {
            avatarURL = args[0];
        } else {
            return message.reply('**يرجى ارفاق الصورة أو رابط الصورة.**');
        }

        try {
            await client.user.setAvatar(avatarURL);
            message.react('✅');
        } catch (error) {
            console.error(error);
            message.react('❌');
        }
    }
}
