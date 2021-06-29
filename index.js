const discord = require("discord.js")
const frases = require("./config/frases")
const request = require('request');
const bot = new discord.Client();
const config = require("./config/config.json")
// const prefix = require("discord-prefix");

let defaultPrefix = "!"

bot.login(config.token)

bot.once("ready", () => {
    console.log("Kjjjjjj")
    console.log(`Actualmente, estoy en ${bot.guilds.cache.size} servidores`)

    bot.user.setActivity("usa !ayuda")
})

setInterval( function() {
    bot.user.setActivity("usa !ayuda")
}, 3600000)

bot.on("message", message => {
    if (!message.guild) return;

    let serverPrefix = defaultPrefix
    
    // let serverPrefix = prefix.getPrefix(message.guild.id);
    
    if (!message.content.startsWith(serverPrefix) || message.author.bot) return;

    // if (!serverPrefix) serverPrefix = defaultPrefix;
    
    /*
    if (message.content.toLowerCase().startsWith(`${serverPrefix}prefijo `)){
        
        if(message.member.hasPermission("ADMINISTRATOR")){
            let newPrefix = message.content.slice(`${serverPrefix}prefijo `.length)
        
            prefix.setPrefix(newPrefix, message.guild.id);

            message.channel.send({embed: {
                color: 9331043,
                description: `El nuevo prefijo es: **${newPrefix}**`
                }
            })

            console.log(`Alguien cambió el prefijo del bot a ${newPrefix}`)
        }

        else {
            message.channel.send({embed: {
                color: 9331043,
                description: `¡Para cambiar el prefijo tenés que ser administrador!`
                }
            })
        }
        
    }

    if (message.content.toLowerCase() === `${serverPrefix}prefijo`){
        message.channel.send({embed: {
            color: 9331043,
            description: `El prefijo actual es: **${serverPrefix}**`
            }
        })
    }
    */
    if (message.content.toLowerCase() === `${serverPrefix}invitar`){
        message.channel.send({embed: {
            color: 9331043,
            title: "¡Invita al bot a otros servidores!",
            description: `**Link:** [**invitación**](https://discord.com/api/oauth2/authorize?client_id=708755176785444905&permissions=52224&scope=bot)`
            }
        })

        console.log(`Alguien pidió el link de invitación`)
    }

    if (message.content.toLowerCase() === `${serverPrefix}frase`){
        console.log("Tortuga marítima, envié una frase.")
        let fraseRandom = selectorDeFrasesRandom(frases)

        message.channel.send({embed: {
            color: 9331043,
            title: fraseRandom.frase,
            footer: {
                text:`${fraseRandom.episodio}`
                }
            }
        })     
    }

    if (message.content.toLowerCase() === `${serverPrefix}ayuda`){
        console.log("Alguien utilizó el comando !ayuda")

        message.channel.send({embed: {
            color: 9331043,
            title: "¿Fuego tiene?",
            description: "Soy un bot-simulador, no siento el frío, no siento el calor. El peligro en mi vida es moneda corriente. (Deshabilité el comando de prefijo por temas de compatibilidad)",
            fields: [{
                    name:"!frase",
                    value: "Pone una frase aleatoria de la serie, nunca viene mal recordar alguna escena."
                },{
                    name:"!invitar",
                    value:"Envia un link de invitación del bot."
                },{
                    name: "Lamponne, el pedido es sencillo.",
                    value:"Si querés, invitame un cafecito: [cafecito.app/federicoig](https://cafecito.app/federicoig)"
                }
            ],
            footer: {
                text: `Hecho por federico#1863. Estoy en ${bot.guilds.cache.size} servidores.`
                }
            }
        })
    }
})

function selectorDeFrasesRandom(array){
    let fraseRandom = array[Math.floor(Math.random() * array.length)]; 
    return fraseRandom
}



