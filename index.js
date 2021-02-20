const discord = require("discord.js")
const phrases = require("./config/phrases")

const bot = new discord.Client();
// PARA USAR: Creá el archivo config.json dentro de la carpeta config
const config = require("./config/config.json")
/* 
    Dentro de config.json, hace un objeto que tenga el token del bot.

    {
        "token":"TOKEN-DE-TU-BOT"
    }

*/
bot.login(config.token)

bot.once("ready", () => {
    bot.user.setActivity("!ayuda")
    console.log("Kjjjjjjjjjjjjjjj")
})

bot.on("message", message => {
    //console.log(message.content)
    if (message.content.toLowerCase() === `!ls`){
        console.log("Tortuga marítima, envié una frase.")
        message.channel.send({embed: {
            color: 9331043,
            description: randomPhraseSelector(phrases)
        }})        
    }
    else if (message.content.toLowerCase() === `!ayuda`){
        message.channel.send({embed: {
            color: 9331043,
            title: "Fuego tiene?",
            description: "Soy un bot-simulador, no siento el frío, no siento el calor. El peligro en mi vida es moneda corriente",
            fields: [{
                name: "!ls",
                value: "Ponete una frase random con este comando, nunca viene mal recordar alguna escena."
                }
            ],
            footer: {
                text: "Me hizo Federico :)"
                }
            }
        })
    }
})

function randomPhraseSelector(array){
    randomPhrase = array[Math.floor(Math.random() * array.length)];
    return randomPhrase
}

