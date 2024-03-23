const { owners, config } = require(`${process.cwd()}/config`);
const db = require(`pro.db`)
module.exports = {
    name: 'setname', // هنا اسم الامر
    run : (client, message, args) => {


      const Data = db.get(`Allow - Command setname = [ ${message.guild.id} ]`)
      const allowedRole = message.guild.roles.cache.get(Data);
      const isAuthorAllowed = message.member.roles.cache.has(allowedRole?.id);
      const isOwner = owners.includes(message.author.id);
      
      if (!isAuthorAllowed && message.author.id !== Data && !isOwner) {
          // إجراءات للتصرف عندما لا يتحقق الشرط
          return message.react('❌');
      }

      
  let a5rgs = message.content.split(" ");
// if (!owners.includes(message.author.id)) return;
  let name = a5rgs.slice(1).join(" "); {
  if (!name) return message.reply( `⛔️ **يرجى ارفاق الاسم الجديد .**`);
  client.user.setUsername(`${name}`);
  message.react(`✅`)
  }
    }
}


