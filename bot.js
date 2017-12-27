const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
      client.user.setStatus("online"); //dnd , online , ldle
      client.user.setGame("XDDDDDDDDDDDDDD");
      console.log("Running as user "+client.user.username+"#"+client.user.discriminator+".");
 //         client.user.setAvatar('./icon.png')
   //           .then(user => console.log(`New avatar set!`))
     //         .catch(console.error);
  //        client.user.setUsername("Illu's Chat")
    //          .then(user => console.log(`New username set!`))
      //        .catch(console.error);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  const MemberRole = guild.roles.find(r => r.name === "Members");
  member.addRole(MemberRole);
});

client.on("message", message => {
    if(message.author.client) return;
    if(message.channel.type === "dm") {
      return;
    }
});

client.login(process.env.client_TOKEN);
