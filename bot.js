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




// امر الفل level
const fs = require('fs');
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
     message.reply(`**لقد وصلت الى المستوى ${curLevel}**`).then(m => m.delete(100000));
  }

  if (message.content.startsWith(prefix + "level")) {
    
      message.reply(` ** انت في المستوى ${userData.level}  مع ${userData.points} نقاط . ** `).then(m => m.delete(100000));

  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});


const db = require('quick.db')
const prefix = '+';
client.on('message', async message => {
   if(message.content.startsWith(prefix + "credits")) {
 let args = message.content.split(' ').slice(1);

var user = message.mentions.users.first() || message.author;

        var balance = await db.fetch(userBalance_${user.id})

        if (balance === null) balance = 50;

        var embed = new Discord.RichEmbed()
        .setTitle('Coin Balance')
        .setDescription(${user.username}, **your balance:\n:dollar: $${balance}**)
        .setColor('#ffffff')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)

}
});

const ms = require('ms')
client.on('message', async message => {
   if(message.content.startsWith(prefix + "daily")) {
    let cooldown = 8.64e+7,
    amount = 250

    let lastDaily = await db.fetch(lastDaily_${message.author.id})
    try {
    db.fetch(userBalance_${message.member.id}).then(bucks => {
    if(bucks == null){
        db.set(userBalance_${message.member.id}, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(Next Daily)
        .setColor('#ffffff')
        .setDescription(You sucessfully collected this, you must wait to collect next dily. Time Left: **${timeObj}**!)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(lastDaily_${message.author.id}, Date.now());
        db.add(userBalance_${message.member.id}, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Todays Daily')
          .setDescription(Sucessfully collected :dollar:$${amount})
          .setColor('#ffffff')
          .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}
}
});



























client.login(process.env.BOT_TOKEN);
