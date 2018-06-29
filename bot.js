const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

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


client.on('message', message => {
if (message.content === '+help') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
     
   .addField("**:globe_with_meridians:─══════ {✯اختار✯} ══════─**","** **")
   .addField("** +عام :one: **","**عشان تعرض الاكواد العامة**")   
   .addField("** +ادمن :two: **","**عشان تعرض اكواد الادمن**")
   .addField("** +العاب :three: **","**عشان تعرض اكواد الالعاب**")                
   .addField("**:globe_with_meridians:─══════ {✯Heroes Bot✯} ══════─**","** **") 
     
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === '+عام') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
     .addField("**:globe_with_meridians:─══════ {✯الاكواد العامه✯} ══════─**","** **")
     .addField("** +roles:dress: **","**لعرض جميع رتب السيرفر**")
     .addField("** +server :camping:**","**لعرض معلومات عن السيرفر**")
     .addField("** +ping :stopwatch:**","**لعرض سرعه اتصال البوت بالسيرفر**")
     .addField("** +id :id:**","**لعرض معلومات عن حسابك**")
     .addField("** +say :speaking_head:**","**عشان تخي البوت يتكلم نفس كلامك**")
     .addField("** *level :level_slider:**","**عشان تشوف لفلك**")
     .addField("** +createcolors :confetti_ball:**","**عشان تصنع 137 لون للسيرفر**")
     .addField("**  (لون +(من 1 الي137 :confetti_ball:**","**tعشان تغير لونك**")
     .addField("** +avatar :milky_way:**","**عشان يعرض صورتك**")
     .addField("** +bot :robot: **","**عشان تشوف معلومات عن البوت**")
     .addField("** لينك :link:**","**عشان يعطيك لينك السيرفر**")
     .addField("** +invite :calling: **","**عشان تضيف البوت لسيرفركr**")
     .addField("**:globe_with_meridians:─══════ {✯Heroes Bot✯} ══════─**","** **")
    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 
client.on('message', message => {
if (message.content === '+ادمن') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
     .addField("**:globe_with_meridians:─══════ {✯اكواد الادمن✯} ══════─**","** **")
     .addField("** +ban :no_entry:**","**حظرعضو**")
     .addField("** +kick :outbox_tray:**","**طرد عضو**")
     .addField("** +clear :recycle:**","**مسح الشات**")
     .addField("** +mutechannel :zipper_mouth:**","**قفل الشات**")
     .addField("** +unmutechannel :zipper_mouth:**","**فتح الشات**")
     .addField("** +mute :smiley:**","**عشان تخلي شخص ما يقدر يتكلم**")
     .addField("** +unmute :loud_sound:**","**عشان تشيل الميوت عن شخص**")
     .addField("** +addtext :capital_abcd: **","**لعمل روم كتابي**")
     .addField("** +addvoice :microphone2: **","**لعمل روم صوتي**")     
     .addField("**:globe_with_meridians:─══════ {✯Heroes Bot✯} ══════─**","** **")
    
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
});
 
client.on('message', message => {
if (message.content === '+العاب') {
        let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL) 
        
     .addField("**:globe_with_meridians:─══════ {✯اكواد الالعاب✯} ══════─**","** **")
     .addField("** *ask :grey_question:**","**to play ask me ?**")
         .addField("** *ask :grey_question:**","**to play ask me ?**")
         .addField("** *ask :grey_question:**","**to play ask me ?**")
         .addField("** *ask :grey_question:**","**to play ask me ?**")
         .addField("** *ask :grey_question:**","**to play ask me ?**")
     .addField("**:globe_with_meridians:─══════ {✯Heroes Bot✯} ══════─**","** **")
        
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
  
 }); 


ient.on('message', message => {
   if (message.content.startsWith("+id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('التاق:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("الايدي:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("تم الانشاء في:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    

if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Servers🌐 ${client.guilds.size}
Users👥 ${client.users.size}
Channels📚 ${client.channels.size} `)
        message.channel.sendEmbed(embed);
    }
 







































client.login(process.env.BOT_TOKEN);
