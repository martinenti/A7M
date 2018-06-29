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




client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
                .setDescription('**قم بإدراج رابط او اسم الأغنيه**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("#a637f9")
                        .setFooter('|| ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('__**تم التشغيل ✅**__', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`بواسطه`, message.author.username)
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
                    message.channel.send(`
                            **${videoInfo.title}** تم تشغيل `)
                    // client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'vol')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // console.log(args)
        if (args > 100) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        if (args < 1) return message.channel.send('1 - 100 || **__لا أكثر ولا أقل__**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**__ ${dispatcher.volume*50}% مستوى الصوت __**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'ok')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
            message.channel.send('`✔`').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.channel.send('`✔`');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'تعال')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        message.member.voiceChannel.join().then(message.channel.send(':ok:'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        if (isPlaying == false) return message.channel.send(':anger: || **__تم التوقيف__**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('تمت إضافةالاغنيه بقائمة الإنتظار', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('طلب بواسطة: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});

function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
    });
}


function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on('message', message => {
     if (message.content === prefix +"help") {
    const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField(`Zyad,aLmutairi commands:

+about - shows info about the bot
+ping - checks the bot's latency

  Music:

+play - shows the song that is currently playing
+play <title|URL|subcommand> - plays the provided song
+queue [pagenum] - shows the current queue
+تعال <title|URL|subcommand> - plays the provided song
+skip - votes to skip the current song

  DJ:
+ok <title|URL|subcommand> - plays the provided song
+skip - skips the current song
+pause - pauses the current song
+skipt <position> - skips to the specified song
+stop - stops the current song and clears the queue
+vol [0-150] - sets or shows volume

For additional help,  `)

      message.channel.send({embed});
     }
    });
























client.login(process.env.BOT_TOKEN);
