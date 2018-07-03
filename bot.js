const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/S-F")
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
     .addField("** +level :level_slider:**","**عشان تشوف لفلك**")
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
         .addField("** +لو خيروك :grey_question:**","**عشان تلعب لو خيروك**")
         .addField("** +فكك :grey_question:**","**عشان تلعب فكك**")
         .addField("** +حب :grey_question:**","**للعب لعبه الحب**")
         .addField("** +مريم :grey_question:**","**للعب لعبه مريم**")
         .addField("** +عقاب :grey_question:**","**للعب لعبه العقاب**")
	 .addField("** +قرعه :grey_question:**","**لعمل قرعه **")
	.addField("** +صراحه :grey_question:**","**عشان تلعب صراحه  **")
	.addField("** +كت تويت :grey_question:**","**عشان تلعب كت تويت   **")
	.addField("** +حكم :grey_question:**","**عشان تلعب حكم   **")
     .addField("**:globe_with_meridians:─══════ {✯Heroes Bot✯} ══════─**","** **")
        
.setColor('RANDOM')
 message.author.sendEmbed(embed);
   }
  
 }); 







const fs = require("fs");
const Canvas = require("canvas"); //npm i canvas
const jimp = require("jimp"); //npm i jimp
const moment = require("moment") //npm i moment
// const Canvas = require("canvas-prebuilt"); // اذا كنت وندوز
// npm i canvas-prebuilt
 
//سوي ملف اسمه profile.json وحط فيه {}
//حمل الصورة من البوست حقي او من الرابط https://prnt.sc/k0vytj
 
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
 
 
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });
 
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using HypeLC"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./hlcpro.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 27px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 26px  Arial";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,117)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 116, 82, 72, 72);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});














client.login(process.env.BOT_TOKEN);
