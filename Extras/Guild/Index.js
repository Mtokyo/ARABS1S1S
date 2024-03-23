let client = require('../..')
const { Modal } = require("discord.js")
const   { MessageActionRow , MessageButton , MessageEmbed  } = require(`discord.js`)
const Data = require(`pro.db`)
const { prefix, owners } = require(`${process.cwd()}/config`);
client.config = require(`${process.cwd()}/config`);
const config = require(`${process.cwd()}/config`);
const { MessageAttachment } = require("discord.js");
const Discord = require(`discord.js`)
const db = require(`pro.db`)
const fs = require(`fs`)

// https://discord.gg/brrq
// ----------------------------------------------------------------------
// https://discord.gg/brrq

const B = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId(`DD`)
    .setStyle(`DANGER`)
    .setEmoji(`🗑`),
  new MessageButton()
    .setCustomId(`D`)
    .setStyle(`SECONDARY`)
    .setEmoji(`➕`),
    
)
client.on(`interactionCreate`, async function (Message) {
  if (Message.isSelectMenu()) {
    if (Message.customId === `M0`) {
      const Image = db.get(`Image = [${Message.guild.id}]`)
      const Channel = db.get(`Channel = [${Message.guild.id}]`)
      const Role = db.get(`Role = [${Message.guild.id}]`)
      const Cat = db.get(`Cat = [${Message.guild.id}]`)
      const Parent = Message.guild.channels.cache.find(C => C.id === Cat);
      if (Message.values[0] === `M1`) {
        if (db.get(`member${Message.user.id}`) === true) return Message.reply({ content: `**عذرًا لا يمكنك فتح تذكرة لوجود تذكرة خاصة بك .**`, ephemeral: true })
        await Message.guild.channels.create(`تبليغ على اداري${Message.user.username}`, {
          type: 'text',
          parent: Parent.id,
          permissionOverwrites: [
            {
              id: Message.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: `${Role}`,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: Message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
            },
          ],
        }).then(async Cahnnels => {
          db.set(`channel${Cahnnels.id}`, Message.user.id)
          db.set(`member${Message.user.id}`, true)
          await Message.reply({ content: `**تم إنشاء التذكرة ${Cahnnels}**`, ephemeral: true })
          Cahnnels.send({ files: [Image], components: [B], content: `${Message.user} | <@&${Role}>` })
        })
      } else if (Message.values[0] === `M2`) {
        if (db.get(`member${Message.user.id}`) === true) return Message.reply({ content: `**عذرًا لا يمكنك فتح تذكرة لوجود تذكرة خاصة بك .**`, ephemeral: true })
        db.set(`member${Message.user.id}`, true)
        await Message.guild.channels.create(`report a player${Message.user.username}`, {
          type: 'text',
          parent: Parent.id,
          permissionOverwrites: [
            {
              id: Message.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: `${Role}`,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: Message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
            },
          ],
        }).then(async Cahnnels => {
          db.set(`channel${Cahnnels.id}`, Message.user.id)
          db.set(`member${Message.user.id}`, true)
          await Message.reply({ content: `**تم إنشاء التذكرة ${Cahnnels}**`, ephemeral: true })
          Cahnnels.send({ files: [Image], components: [B], content: `${Message.user} | <@&${Role}>` })
        })
      } else if (Message.values[0] === `M3`) {
        if (db.get(`member${Message.user.id}`) === true) return Message.reply({ content: `**عذرًا لا يمكنك فتح تذكرة لوجود تذكرة خاصة بك .**`, ephemeral: true })
        await Message.guild.channels.create(`unban${Message.user.username}`, {
          type: 'text',
          parent: Parent.id,
          permissionOverwrites: [
            {
              id: Message.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: `${Role}`,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: Message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
            },
          ],
        }).then(async Cahnnels => {
          db.set(`channel${Cahnnels.id}`, Message.user.id)
          db.set(`member${Message.user.id}`, true)
          await Message.reply({ content: `**تم إنشاء التذكرة ${Cahnnels}**`, ephemeral: true })
          Cahnnels.send({ files: [Image], components: [B], content: `${Message.user} | <@&${Role}>` })
        })
      } else if (Message.values[0] === `M4`) {
        if (db.get(`member${Message.user.id}`) === true) return Message.reply({ content: `**عذرًا لا يمكنك فتح تذكرة لوجود تذكرة خاصة بك .**`, ephemeral: true })
        db.set(`member${Message.user.id}`, true)
        await Message.guild.channels.create(`discord${Message.user.username}`, {
          type: 'text',
          parent: Parent.id,
          permissionOverwrites: [
            {
              id: Message.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: `${Role}`,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: Message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
            },
          ],
        }).then(async Cahnnels => {
          db.set(`channel${Cahnnels.id}`, Message.user.id)
          db.set(`member${Message.user.id}`, true)
          await Message.reply({ content: `**تم إنشاء التذكرة ${Cahnnels}**`, ephemeral: true })
          Cahnnels.send({ files: [Image], components: [B], content: `${Message.user} | <@&${Role}>` })
        })
      } else if (Message.values[0] === `M5`) {
        if (db.get(`member${Message.user.id}`) === true) return Message.reply({ content: `**عذرًا لا يمكنك فتح تذكرة لوجود تذكرة خاصة بك .**`, ephemeral: true })
        await Message.guild.channels.create(`ticket ${Message.user.username}`, {
          type: 'text',
          parent: Parent.id,
          permissionOverwrites: [
            {
              id: Message.user.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: `${Role}`,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
            },
            {
              id: Message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
            },
          ],
        }).then(async Cahnnels => {
          db.set(`channel${Cahnnels.id}`, Message.user.id)
          db.set(`member${Message.user.id}`, true)
          await Message.reply({ content: `**تم إنشاء التذكرة ${Cahnnels}**`, ephemeral: true })
          Cahnnels.send({ files: [Image], components: [B], content: `${Message.user} | <@&${Role}>` })
          
        })
      }
    }
  }
})
const { createTranscript } = require("discord-html-transcripts");

client.on('interactionCreate', async interaction => {
  if (interaction.isButton()) {
    if (interaction.customId === "DD") {
      const Role = db.get(`Role = [${interaction.guild.id}]`);
      if (!interaction.member.roles.cache.has(`${Role}`)) {
        return await interaction.reply({ content: `** لا تستطيع تنفيذ هذا الإجراء  ..** 🚫`, ephemeral: true });
      }
      
      const Channel = client.channels.cache.find(C => C.id == `${db.get(`Channel = [${interaction.guild.id}]`)}`);
      if (!Channel) return;
      
      const transcript = await createTranscript(interaction.channel, {
        returnType: 'buffer',
        returnType: false,
        minify: true,
        saveImages: true,
        useCDN: true,
        poweredBy: false,
        fileName: `${interaction.channel.name}.html`,
      });
      
      const Color = db.get(`Guild_Color = ${interaction.guild.id}`) || interaction.guild.me.displayHexColor || `#000000`;
      if (!Color) return;
      
      const embed = new MessageEmbed()
        .setColor(`${Color || interaction.guild.me.displayHexColor || `#000000`}`)
        .setAuthor(`${interaction.user.tag}`, interaction.user.avatarURL({ dynamic: true, size: 1024, format: 'png' }))
        .setDescription(`**إغلاق تذكرة**\n**
        تذكرة : <@${db.get(`channel${interaction.channel.id}`)}>
        بواسطة : ${interaction.user}
        اسم التذكرة : ${interaction.channel.name}
        id : ${db.get(`channel${interaction.channel.id}`)}**`)
        .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
        .setTimestamp();
      
      await interaction.reply({ content: `**${interaction.channel} : سيتم حذف التذكرة خلال ثواني**` });
      await Channel.send({ embeds: [embed] });
      await Channel.send({ files: [transcript] });


      if (db.get(`channel${interaction.channel.id}`)) {
        let Member = client.users.cache.find((x) => x.id == db.get(`channel${interaction.channel.id}`))
        db.delete(`member${Member.id}`)
        db.delete(`channel${interaction.channel.id}`)
      }
      
      await interaction.channel.delete()
    } else if (interaction.customId === "D") {
      const { Client, Collection, MessageAttachment, WebhookClient, Intents, MessageButton, MessageEmbed, MessageSelectMenu, MessageActionRow, MessageModal, Role, Modal, TextInputComponent } = require("discord.js");
      const Services = new Modal().setCustomId(`add`).setTitle(`اضافه شخص`);
      const Service_1 = new TextInputComponent().setCustomId('Ad').setLabel(`ايدي`).setStyle(`SHORT`).setPlaceholder(' ').setRequired(true)
      const Service1 = new MessageActionRow().addComponents(Service_1);
      Services.addComponents(Service1);
      interaction.showModal(Services);
    }
  } else if (interaction.isModalSubmit()) {
    if (interaction.customId === "add") {
      const Service1 = interaction.fields.getTextInputValue('Ad');
      const Member = await interaction.guild.members.cache.get(Service1)
      const channel = interaction.channel
   
        await channel.permissionOverwrites.edit(Member, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
        await interaction.reply({ content: `**تم إضافة الشخص لتذكرة : ${Member}**`, ephemeral: true }).catch(() => { })
      
    }
  }
})








client.on("interactionCreate", interaction => {
  const Color = db.get(`Guild_Color = ${interaction.guild?.id}`)  || `#000000`
   if (!Color) return;
if (!interaction.isSelectMenu()) return;
if (interaction.values == "10help_option") {
  let replyembed = new Discord.MessageEmbed()
.setColor(`${Color || `#000000`}`)
.setTitle('آلاوامر التذكره ')

.setDescription(`
**#** : \`${prefix}admin\` : **فتح تذكرة****
**#** : \`${prefix}add\` : **اضافة عضو الى التذكرة**
**#** : \`${prefix}come\` : **لاستدعاء شخص للتذكرة**
**#** : \`${prefix}ticlog\` : **تعين شات لوج التذكرة**
**#** : \`${prefix}setticket\` : **عداد رسالة التذكرة**
**#** : \`${prefix}setcategory\` : **تحديد ايدي كاتجوري التذكرة**
**#** : \`${prefix}imaget\` : **تحديد صورة رسالة التذكرة**
**#** : \`${prefix}settrole\` : **اضافة رولات التذكرة**`)
  interaction.update({ embeds: [replyembed] });
}


if (interaction.values == "7help_option") {
  let replyembed = new Discord.MessageEmbed()
.setColor(`${Color || `#000000`}`)
.setTimestamp()
.setFooter({ text: `بررق`, iconURL: client.user.displayAvatarURL() })
.setTitle('آوامر مالك البوت')
.setDescription(`
**#** : \`${prefix}guild [start / id]\` :** اضافه والغاء اي دي السيرفر**
**#** : \`${prefix}setname\` : **تغير اسم البوت**
**#** : \`${prefix}setavatar\` : **تغير صورة البوت**
**#** : \`${prefix}come\` : **استدعاء عضو الى الروم**
**#** : \`${prefix}setprefix\` :** تغيير بادئه البوت**
**#** : \`${prefix}restart\` : **اعادة ضبط البوت**
**#** : \`${prefix}owners\` : **عرض قائمة الاونرات**
**#** : \`${prefix}setowner\` : **اضافة او ازالة اونر من البوت**
**#** : \`${prefix}ping\` : **سرعه الاستجابه**
**#** : \`${prefix}setstatus\` : **تغير حالة البوت**
**#** : \`${prefix}bot-setvoice\` :** تعين فويس للبوت**`)

  interaction.update({ embeds: [replyembed] })
}

if (interaction.values == "8help_option") {
  interaction.message.delete()
    }
 
});

// https://discord.gg/brrq
// ----------------------------------------------------------------------
// https://discord.gg/brrq

let { joinVoiceChannel } = require("@discordjs/voice");
        client.on("ready", async () => {
            let Voice = await Data.get(`Voice_${client.user.id}`)
            const channel = client.channels.cache.get(Voice);
            if (!channel || channel.type !== "GUILD_VOICE") { return }
            const GUILD = channel.guild;
            const connection = joinVoiceChannel({
              channelId: Voice,
              guildId: GUILD.id,
              adapterCreator: GUILD.voiceAdapterCreator,
              selfDeaf: true
            });
            connection;
          })

/// 


///come
client.on("messageCreate", async th => {
  if(th.content.startsWith(prefix+ "come")){
  if(!th.member.permissions.has("MANAGE_MESSAGES")) return;
    let id = th.content.split(' ')
        
  let user = th.mentions.members.first() || th.guild.members.cache.get(id[1])
    if(!user)return th.reply(`**يرجى ارفاق منشن العضو او الايدي.**`)
    if(user.user.bot)return th.reply(`**> 😒 لا يمكنك ارسال رساله الى بوت**`)
  
    let invi = new MessageButton()
    .setLabel(` 📩تم استدعائك هنا `)
    .setStyle(`LINK`)
  .setURL(`https://discord.com/channels/${th.guild.id}/${th.channel.id}`) 
  let inv = new MessageActionRow()
    .setComponents(invi)
  
    
    user.send({content: `<@${user.id}> **تم استدعائك**`,embeds: [
      new Discord.MessageEmbed()
      
      .setDescription(`> **السلام عليكم صديقي نعتذر على الازعاج :** 
    > **<@${th.author.id}> يرجى منك الرد على التذكره او اغلقها وشكرا لك **`)
      .setColor(`BLUE`)
      .setTimestamp()
    ],components: [inv]}).then(async msg => {
        await th.reply({content: `** ✅تم استدعاء ${user.user.tag}**`});
      }).catch(async (err) => await th.channel.send({content: `** ❌لا يمكنني استدعاء هذا الشخص , من الممكن يكون مغلق استدعاء الرسائل **`}));
  
    
    
  }
  })
   
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const prefix = "#"; // يجب أن تقوم بتعيين البريفكس بناءً على احتياجات مشروعك

  if (message.content.startsWith(prefix + "come")) {
    let user = message.mentions.users.first();

    try {
      let row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("الذهاب الى الرساله")
          .setStyle("LINK")
          .setURL(
            `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`
          )
      );
      client.users
        .fetch(user.id)
        .then(async (fetchedUser) => {
          await fetchedUser.send({
            content: `**لقد تم ندائك للتوجه الى: <#${message.channel.id}>\nFrom: ${message.author}\n- ${user}**`,
            components: [row],
          });
        })
        .then(async (msg) => {
          msg.send({ content: `${linelink}` });
        });
      message.reply({ content: `** ✅تم استدعاء ${user.user.tag}**` });
    } catch (err) {
      console.log(err);
      message.reply({ content: `❌لا يمكنني استدعاء هذا الشخص , من الممكن يكون مغلق استدعاء الرسائل ` });
    }
  }
});