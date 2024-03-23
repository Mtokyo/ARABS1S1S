const { Client, Collection, MessageAttachment, WebhookClient, Intents, MessageButton, MessageSelectMenu, MessageActionRow, MessageModal, Role, Modal, TextInputComponent, MessageEmbed } = require("discord.js");
const { owners } = require(`${process.cwd()}/config`);
const db = require(`pro.db`)

module.exports = {
    name: "setticket",
    description: "A simple ping command.",
    run: async (client, message) => {

      const Color = db.get(`Guild_Color = ${message.guild.id}`) || message.guild.me.displayHexColor || `#000000`;
      if (!Color) return;
      
        const Image = db.get(`Image = [${message.guild.id}]`)
        const Channel = db.get(`Channel = [${message.guild.id}]`)
        const Role = db.get(`Role = [${message.guild.id}]`)
        const Cat = db.get(`Cat = [${message.guild.id}]`)
        if (!Cat || !Role || !Channel || !Image) return message.reply({ content: `**يرجي تنصيب باقي اوامر التذكره ..**` })
        if (message.author.bot) return;
        if (!owners.includes(message.author.id)) return message.react('❌');
        if (!message.guild) return;
        
        const Emb = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId(`M0`)
            .setOptions([
              { label: `Staff report`, value: `M1`, description: `تبليغ على اداري` , emoji : `🖋` },
              { label: `Report a player`, value: `M2`, description: `تبليغ على لاعب` , emoji : `📨` },
              { label: `Unban Request`, value: `M3`, description: `طلب فك الباند` , emoji : `🔓` },
              { label: `Discord Report`, value: `M4`, description: `تكت ديسكورد` , emoji : `🔊` },
            ])
            .setPlaceholder("الـرجاء الضغط هنا و إختيار التذكره المُناسبة.")
        )

        const args = message.content.split(' ').slice(1);

        // تحقق من وجود نص بعد الأمر
        if (args.length > 0) {
            const userMessage = args.join(" "); // اجمع النص بعد الأمر

            const embed = new MessageEmbed()
                .setDescription(userMessage) // استخدم النص كوصف في الرسالة المضمنة
                .setColor(`${Color || message.guild.me.displayHexColor || `#000000`}`)

            message.channel.send({ files: [Image], embeds: [embed] }).then(async () => {
                await message.channel.send({ components: [Emb] })
            })
        } else {
            // إذا لم يكن هناك نص بعد الأمر، أرسل الصورة فقط
            message.channel.send({ files: [Image], components: [Emb]});
        }
    }
}