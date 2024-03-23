const { MessageActionRow, MessageButton, Client } = require("discord.js");

module.exports = {
  name: "autoreply",
  aliases: ["إضافة"],
  description: "A simple ping command.",
  category: "Informations",
  example: ["1"],
  run: async (Client, Message) => {
    if (!Message.member.permissions.has("ADMINISTRATOR")) return;

    const Bu = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("Auto_Reply").setStyle("SECONDARY").setLabel("أضغط لإضفه ردًا.")
    );
    await Message.reply({ components: [Bu] });
  },
};
