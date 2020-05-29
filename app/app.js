const discord = require("discord.js")
const phrases = require("./config/phrases")

const bot = new discord.Client();
const config = require("./config/config.json")

bot.login(config.token)

bot.once("ready", () => {
    console.log("todo ok")
})

bot.on("message", message => {
    //console.log(message.content)
    bot.user.setActivity("Escribe !ayuda")
    if (message.content.toLowerCase() === `${config.prefix}frase`){
        console.log("Mensaje enviado")
        message.channel.send(randomPhraseSelector(phrases))     
    }
    else if (message.content.toLowerCase() === `${config.prefix}ayuda`){
        message.channel.send("`!frase: envía una frase aleatoria\n !meme: envía un meme aleatorio`")
    }
    else if (message.content.toLowerCase() === `${config.prefix}meme`){
        console.log("Meme enviado")
        message.channel.send({files: [`./memes/${getRandomNumber()}.jpg`]})
    }
})


function getRandomNumber(){
    let number;
    number = Math.floor(1 + Math.random() * 22)
    return number
}

function randomPhraseSelector(array){
    randomPhrase = array[Math.floor(Math.random() * array.length)];
    return randomPhrase
}



