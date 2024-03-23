const Discord = require('discord.js');
const { owners } = require(`${process.cwd()}/config`);
const db = require('pro.db');

module.exports = {
  name: 'setstatus',
  run: async (client, message, interaction) => {

    const Data = db.get(`Allow - Command setstatus = [ ${message.guild.id} ]`);
    const allowedRole = message.guild.roles.cache.get(Data);
    const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
    const isOwner = owners.includes(message.author.id);
  
    if (!isAuthorAllowed && message.author.id !== Data && !isOwner) {
      return message.react('❌');
    }

    const args = message.content.split(' ').slice(1).join(' ');
    if (!args) return message.reply('**يرجى كتابة الحالة الجديدة.**');
  
    const menu = new Discord.MessageSelectMenu()
      .setCustomId('status')
      .setPlaceholder('قم باختيار الحالة المناسبة .')
      .addOptions([
        {
          label: 'Playing',
          value: 'PLAYING',
          emoji: '🎮',
        },
        {
          label: 'Listening',
          value: 'LISTENING',
          emoji: '🎧',
        },
        {
          label: 'Streaming',
          value: 'STREAMING',
          emoji: '📺',
        },
        {
          label: 'Watching',
          value: 'WATCHING',
          emoji: '👀',
        },
      ]);
  
    const row = new Discord.MessageActionRow().addComponents(menu);
  
    message.reply({
      components: [row],
    });
  
    const filter = (interaction) => interaction.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 90000 });
  
    collector.on('collect', async (interaction) => {
      if (interaction.customId === 'status') {
        const selectedValue = interaction.values[0];
        let statusType;
        let statusEmoji;
        let statusColor;
  
        switch (selectedValue) {
          case 'PLAYING':
            statusType = 'PLAYING';
            statusEmoji = '🎮';
            statusColor = 'GREEN';
            break;
          case 'LISTENING':
            statusType = 'LISTENING';
            statusEmoji = '🎧';
            statusColor = 'BLUE';
            break;
          case 'STREAMING':
            statusType = 'STREAMING';
            statusEmoji = '📺';
            break;
          case 'WATCHING':
            statusType = 'WATCHING';
            statusEmoji = '👀';
            statusColor = 'YELLOW';
            break;
          default:
            break;
        }
  
       await message.react("✅");
        interaction.message.delete();
  
        let presenceOptions = { status: 'online', activities: [{ name: args, type: statusType }] };
  
        if (statusType === 'PLAYING') {
          presenceOptions.status = 'online';
        } else if (statusType === 'LISTENING') {
          presenceOptions.status = 'dnd';
        } else if (statusType === 'STREAMING') {
          presenceOptions.status = 'online';
          presenceOptions.activities[0].url = 'https://www.twitch.tv/7lm';
        } else {
          presenceOptions.status = 'idle';
        }
  
        await db.set(`status_${message.guild.id}`, { name: args, type: statusType });
        await client.user.setPresence(presenceOptions);
      }
    });
  },
};
