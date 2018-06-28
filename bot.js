const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

lient.on('message', message => {
if (message.content === '*help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
     
   .addField("**:globe_with_meridians:─══════ {✯Choose✯} ══════─
‎**","** **")
   .addField("** *puplic :one: **","**to see puplic commands**")   
   .addField("** *staff :two: **","**to see staff commands**")
   .addField("** *fun :three: **","**to see fun commands**")                
     
     
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 



client.on('message', message => {
if (message.content === '*puplic') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)

     .addField("**:globe_with_meridians:The commands**","** **")
     .addField("** *roles :dress: **","**to see roles of the server**")
     .addField("** *server :camping:**","**server informations?**")
     .addField("** *ping :stopwatch:**","**to see your ping?**")
     .addField("** *id :id:**","**to see your info**")
     .addField("** *say :speaking_head:**","**to make bot say something?**")
     .addField("** *level :level_slider:**","**to see your level?**")
     .addField("** *coloradd :confetti_ball:**","**to make 140 color in your server?**")
     .addField("** *color+??? ????? :confetti_ball:**","**to change your name color**")
     .addField("** *points :1234:**","**to see your points?**")
     .addField("** *av :milky_way:**","**to see your photo?**")
     .addField("** *news :newspaper:**","**to see bot news?**")
     .addField("** *bot :robot: **","**to see the bot info**")
     .addField("** *link :link:**","**to get the server invite link?**")
     .addField("** *invite :calling: **","**to invite the bot to your server**")

    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 


client.on('message', message => {
if (message.content === '*staff') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    

     .addField("**:globe_with_meridians:The staff commands ?**")
     .addField("** *mute :mute:**","**to mute the rule breakers?**")
     .addField("** *warn :exclamation:**","**to to warn the rule breaker?**")
     .addField("** *ban :no_entry:**","**to banned rule breakers**")
     .addField("** *kick :outbox_tray:**","**to kick rule breakers?**")
     .addField("** *clear :recycle:**","**to clear the chat?**")
     .addField("** *mutechannel :zipper_mouth:**","**to mute the chat**")
     .addField("** *unmutechannel :smiley:**","**to unmute the chat**")
     .addField("** *unmute :loud_sound:**","**to unmute the guy that got mute?**")
     .addField("** *addtext :capital_abcd: **","**to make a text channel?**")
     .addField("** *addvoice :microphone2: **","**to make a voice channel?**")     

    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 


client.on('message', message => {
if (message.content === '*fun') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    

     .addField("**:globe_with_meridians: Fun Commands ?**")
     .addField("** *minecraft :black_square_button:**","**to play minecraft questions ?**")
     .addField("** *ask :grey_question:**","**to play ask me ?**")
         
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});



client.login(process.env.BOT_TOKEN);
