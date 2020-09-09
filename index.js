const discord = require("discord.js");
const botConfige = require("./botConfige.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`)

    bot.user.setActivity("La maffia :clown:", {type: "PLAYING"});

});


bot.on("message", async message => {

    // als de bot een bericht stuurt dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfige.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if( command === `${prefix}info`){

        return message.channel.send("InfoTest<w<xcw<");


    }
});


bot.login(process.env.token);