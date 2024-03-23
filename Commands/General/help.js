const Discord = require("discord.js")
const db = require(`pro.db`)
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const {prefix } = require(`${process.cwd()}/config`);
const { MessageSelectMenu } = require("discord.js");
module.exports = {
    name: 'help', // هنا اسم الامر
    run : (client, message, args) => {
                          const Color = db.get(`Guild_Color = ${message.guild.id}`) || message.guild.me.displayHexColor || `#000000`
            if (!Color) return;
     
            const button = new MessageButton()
            .setLabel('الدعم الفني')
            .setStyle('LINK')
            .setURL('https://discord.gg/brrq');

            const guild = message.guild;
            let replyembed = new Discord.MessageEmbed()
              .setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)
              .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
              .setFooter(client.user.username, client.user.displayAvatarURL())
              .setDescription(`**اوامر البوت :
            يمكنك الان عرض قائمة الاوامر المناسبه لك
            بادئة البوت : ${prefix}
            الاوامر : 21**`)
           //   .setTimestamp();
    const r1ow = new MessageActionRow().addComponents(button);
    const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('help')
          .setPlaceholder("آختار ألقائمة المُناسبة لك")
          .addOptions([
         
            {
              label: 'اوامر التذكرة',
              value: '10help_option',
              emoji  :'🎟',
            },
            {
              label: 'اوامر مالك البوت',
              value: '7help_option',
              emoji  :'⚙',
            },
            {
              label: 'حذف قائمة المساعدة',
              value: '8help_option',
              emoji  :'❌',

            },
            
          ]),

      );


    message.reply({
      embeds: [replyembed], components: [row, r1ow]
    }).catch(console.error).then(message => setTimeout(() => {

      const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageSelectMenu()
            .setCustomId('help')
            .setPlaceholder("آختار ألقائمة المُناسبة لك")
            .setDisabled(true)
            .addOptions([
            {
              label: 'اوامر التذكرة',
              value: '10help_option',
            },
            {
              label: 'اوامر مالك البوت',
              value: '7help_option',
            },
            {
              label: 'حذف قائمة المساعدة',
              value: '8help_option',

            },

            ]),
        );
      message.edit({ embeds: [replyembed], components: [row, r1ow]})

    }, 2000000)).catch(console.error);




    }
}
