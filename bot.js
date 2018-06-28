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


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


const db = require('quick.db')
const prefix = '+';
client.on('message', async message => {
   if(message.content.startsWith(prefix + "credits")) {
 let args = message.content.split(' ').slice(1);

var user = message.mentions.users.first() || message.author;
        
        var balance = await db.fetch(`userBalance_${user.id}`)
        
        if (balance === null) balance = 50;
        
        var embed = new Discord.RichEmbed()
        .setTitle('Coin Balance')
        .setDescription(`${user.username}, **your balance:\n:dollar: $${balance}**`)
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

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`Next Daily`)
        .setColor('#ffffff')
        .setDescription(`You sucessfully collected this, you must wait to collect next dily. Time Left: **${timeObj}**!`)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Todays Daily')
          .setDescription(`Sucessfully collected :dollar:$${amount}`)
          .setColor('#ffffff')
          .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}
}
});

client.login(process.env.BOT_TOKEN);
