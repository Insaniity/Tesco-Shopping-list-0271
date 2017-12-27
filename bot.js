const Discord = require('discord.js');
const client = new Discord.Client();

bot.on("ready", () => {
      bot.user.setStatus("online"); //dnd , online , ldle
      bot.user.setGame("Hey! || !verify");
      console.log("Running as user "+bot.user.username+"#"+bot.user.discriminator+".");
 //         bot.user.setAvatar('./icon.png')
   //           .then(user => console.log(`New avatar set!`))
     //         .catch(console.error);
  //        bot.user.setUsername("Illu's Chat")
    //          .then(user => console.log(`New username set!`))
      //        .catch(console.error);
});

bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  const MemberRole = guild.roles.find(r => r.name === "Members");
  member.addRole(MemberRole);
});

bot.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") {
      return;
    }
});

bot.login(process.env.client_TOKEN);
