const frases = [
    {frase:"Te amo, Lamponne.",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Ahí está, lo dijo",
     episodio:"Pablo Lamponne. T02E11"
    },
    {frase:"Sos muy linda, ojalá no cambies nunca.",
     episodio:"Mario Santos. T01E03"
    },
    {frase:"Yo conozco un grupo de personas que resuelven problemas de todo tipo.",
     episodio:"Bernardo Galván. T01E02"
    },
    {frase:"No sea corta mambo, Santos.",
     episodio:"René Palazzo, carnicero. T01E12"    
    },
    {frase:"¿Fuego tiene?",
     episodio:"Mario Santos. T01E05"
    },
    {frase:"Al término del episodio oral señores.",
     episodio:"Mario Santos. T01E12"
    },
    {frase:"Si, a mi se me están arrugando los deditos.",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Lamponne, el pedido es sencillo, conseguime una Magnum 357 con balas de verdad.",
     episodio:"Mario Santos. T02E09"
    },
    {frase:"Y perdimos el cine Grand Splendid... una verdadera tragedia.",
     episodio:"Mario Santos. T01E08"
    },
    {frase:"73 años y todavía se me agarrota la toronja.",
     episodio:"Antonio Scotty. T01E08"
    },
    {frase:"Confío más en cualquier animal que en vos, Vanegas.",
     episodio:"Mario Santos. T02E04"
    },
    {frase:"¿Qué tiene de llamativa esta camisa?",
     episodio:"Mario Santos. T02E09"
    },
    {frase:"Usted es una mujer muy hermosa y yo un joven inexperto.",
     episodio:"Javito. T01E10"
    },
    {frase:"No veo la hora de embadurnarla en aceite, tirarla en la cama y entubarle la garlopa hasta la garganta.",
     episodio:"Javito. T01E10"
    },
    {frase:"Sonreí Javito que acá te van a dar de comer.",
     episodio:"Oscar, papá impresentable. T01E10"
    },
    {frase:"Tiene cara de boludo, pero así como lo ven se clava cinco pajas por día.",
     episodio:"Oscar, papá impresentable. T01E10"
    },
    {frase:"¡Aunque aparentás ser un hosco, en realidad sos un dulce de leche! Te quiere, Gaby.",
     episodio:"Gabriel Medina. T02E10"
    },
    {frase:"Lamponne traé esto, Lamponne traé lo otro, ¿Y alguien se acuerda de Lamponne? ¿Alguien felicita a Lamponne?",
     episodio:"Pablo Lamponne. T02E06"
    },
    {frase:"Además se supone que las amigas de Kiki son las mejores tiracaucho de la zona, ¿no?",
     episodio:"A las amigas de Kiki. T01E05"
    },
    {frase:"¿Qué pasa mi vida te decepcionamos?",
     episodio:"Emilio Ravenna. T01E05"
    },
    {frase:"YO AMO LA CULTURA AMERICANA TENGO TODOS LOS MUÑEQUITOS DE LA GUERRA DE LAS GALAXIAS, OBI-WAN KENOBI, EL MAESTRO YODA, LUKE, HAN SOLO, DARTH VADER.",
     episodio:"Lucio Bonelli, de la brigada B. T02E07"
    },
    {frase:"¿No hay un piquito para mi?",
     episodio:"Pedro Velasco. T02E03"
    },
    {frase: "El derecho, Lamponne.",
     episodio:"Mario Santos. T02E01"
    },
    {frase: "En la puta vida probo el pan. Era celiaco.",
     episodio:"Emilio Ravenna. T02E11"
    },
    {frase:"Aguanten los travestis.",
     episodio:"Los Llaneros Solitarios. T02E11"
    },
    {frase:"Con ustedes, la criatura.",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"¿Qué prefieren? ¿Quieren el juego de la vida, o el boggle?",
     episodio:"Gabriel Medina. T02E08"
    },
    {frase:"Mis gustos musicales son más que amplios Lamponne, para que sepas, traje música súper divertida.",
     episodio:"Gabriel Medina. T02E08"
    },
    {frase:"Kjjjjjjjjjj.",
     episodio:"Marcos Molero. T02E06"
    },
    {frase:"Estuviste un año en la selva, solo, hablándole a una cámara de televisión apagada... kjjjjjjjj",
     episodio:"Marcos Molero. T02E06"
    },
    {frase:"Un año en la selva... kjjjjjjjjj.",
     episodio:"Marcos Molero. T02E06"
    },
    {frase:"¿Siempre al corazón Milazzo?",
     episodio:"Marcos Molero. T02E11"
    },
    {frase:"¿Sabes de que antes de que vos aparecieras me quería matar yo?",
     episodio:"Marcos Molero. T02E10"
    },
    {frase:"Esta gente me devuelve el entusiasmo.",
     episodio:"Marcos Molero. T02E10"
    },
    {frase:"Mario Santos, ¿O debería llamarlo Francisco de Aguirre?",
     episodio:"Marcos Molero, T02E11"
    },
    {frase:"Yo de ajedrez no entiendo un carajo, pero este es bueno, es húngaro o australiano, me lo regalaron en el supermercado",
     episodio:"Oscar, papá impresentable. T01E10"
    },
    {frase:"Eeeepa, es un ajedrez... ¡Yo colecciono!",
     episodio:"Enrique, suegro de Clara. T01E10"
    },
    {frase:"Piet Mondrian, pintura en diamante, en rojo, azul y amarillo, este cuadro carece de espacio tridimensional, pero igualmente resulta muy dinámico.",
     episodio:"Susana, mamá impresentable. T01E10"
    },
    {frase:"Yo soy el del cumpleaños.",
     episodio:"Enrique, suegro de Clara. T01E10"
    },
    {frase:"Escuchame cumpleaños, ¿Dónde están las sartenes de acero para el pescado?",
     episodio:"Emilio Ravenna. T01E10"
    },
    {frase:"Metete tu cumpleaños en el orto, pelotudo.",
     episodio:"Emilio Ravenna. T01E10"
    },
    {frase:"Nosotros pensamos que usted traía sus propios elementos...",
     episodio:"Enrique, suegro de Clara. T01E10"
    },
    {frase:"Te pedí un tigre Lamponne.",
     episodio:"Mario Santos, T01E10"
    },
    {frase:"No te calenté' Kike.",
     episodio:"Oscar, papá impresentable. T01E10"
    },
    {frase:"¿Pero vos viste que pedazo de cocina, Susana?",
     episodio:"Oscar, papá impresentable. T01E10"
    },
    {frase:"¿Pedro Velasco? que nombre más firme.",
     episodio:"Gabriel Medina. T01E03"
    },
    {frase:"Este recuerdo hermoso que tengo, es el dulce de mirinjo que fabrican ahí, que los habitantes de allí le llaman ¡EL DUL-CE-CI-TO!",
     episodio:"José Feller, T01E03"
    },
    {frase:"¿A quién votaste Medina? Tic-Tac, me pareció más humano.",
     episodio:"Mario Santos a Gabriel Medina. T02E05"
    },
    {frase:"¿Te das cuenta que pusiste en peligro el operativo?",
     episodio:"Mario Santos. T02E05"
    },
    {frase:"No tolero ver a estas criaturas encerradas, nacieron para estar libres.",
     episodio:"Gabriel Medina. T02E10"
    },
    {frase:"Tortuga marítima.",
     episodio:"Emilio Ravenna. T01E07"
    },
    {frase:"¡Lamponne, te agachas y te la ponen!",
     episodio:"Chicos a Lamponne, flashback. T02E05"
    },
    {frase:"Jenga, le gusta jugar al jenga.",
     episodio:"Emilio Ravenna, T02E02"
    },
    {frase:"Dice... esperemos a Tito.",
     episodio:"Fabián Charbone, músico. T02E10"
    },
    {frase:"Y yo no quiero meter más leña al fuego, pero a las cuatro me va a llegar un cargamento de zapallo",
     episodio:"Antonio Scotty. T02E09"
    },
    {frase:"Dicho de otra manera... ¿Ser un pederasta? Más comunmente llamado ¿Bufarra, bufarreta, bufarrón, sopapa, come niño, pimentero, bayoneta, sacacorcho, cucurucho, banderin O CHUPETE?",
     episodio:"Emilio Ravenna. T02E09"
    },
    {frase:"Si te dijieron que te fueras te tenés que ir, boludito.",
     episodio:"Franco Milazzo. T01E09"
    },
    {frase:"¡VALENTÍA Y FUERZA CONTRA CUALQUIER AMENAZA!",
     episodio:"Franco Milazzo. T01E09"
    },
    {frase:"¿Qué es lo que pasa acá?",
     episodio:"Franco Milazzo. T02E11"
    },
    {frase:"¿El miembro de su marido está permanentemente en estado de reposo o por momentos adquiere cierta rigidez?",
     episodio:"Mario Santos. T01E06"
    },
    {frase:"No, a mi no me pasó nunca por suerte...",
     episodio:"Emilio Ravenna. T01E06"
    },
    {frase:"Sabes que este tipo te lo encuentra, Milazzo te mata a Bin Laden.",
     episodio:"Emilio Ravenna. T02E11"
    },
    {frase:"Miralo con intensidad, pero no de manera chabacana, sutilmente.",
     episodio:"Emilio Ravenna. T01E01"
    },
    {frase:"Alguien me pellizcó la cola.",
     episodio:"Pablo Lamponne. T02E11"
    },
    {frase:"Honesty, is such a lonely word.",
     episodio:"Billy Joel, clase de inglés de Ravenna. T01E11"
    },
    {frase:"Sueñan los niños en la juguetería, de nuestro amigo el señor Simón.",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Para mi esto es un baldazo de agua fría.",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Estoy buscando el muñequito que le crecía pastito en la cabeza, el Loco Lope, no sé si lo tiene.",
     episodio:"Cliente. T02E07"
    },
    {frase:"Y si nos queremos tanto... ¿¿Por qué tenemos que dejar de trabajar juntos??",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"¡Saquen al chino!",
     episodio:"Franco Milazzo. T01E09"
    },
    {frase:"Los super-hombres somos cinco.",
     episodio:"Franco Millazo. T01E09"
    },
    {frase:"Earl Grey, ¿Tiene?",
     episodio:"Mario Santos. T01E03"
    },
    {frase:"Earl Grey no tiene, ¿no?",
     episodio:"Mario Santos. T02E04"
    },
    {frase:"Estoy pasando por la sala de profesores, y no vas a poder creer esto, la de historia le está tirando la goma al rector.",
     episodio:"Pablo Lamponne. T01E05"
    },
    {frase:"Tenés un tipo de rostro bastante buscado en este momento, aprovechalo.",
     episodio:"Franco Milazzo. T01E09"
    },
    {frase:"Uhhhh, pepitas.",
     episodio:"Emilio Ravenna. T02E11"
    },
    {frase:"100 pesos a que lo elige a Lamponne.",
     episodio:"Gabriel Medina. T01E05"
    },
    {frase:"Estás equivocado, traje tambien el compact del Rey León.",
     episodio:"Gabriel Medina. T02E08"
    },
    {frase:"Juegan los niños, en los escaparates, en la juguetería del señor Simón",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Aunque hoy los ídolos sean Piñón Fijo o Bellota, yo igual jamás podré olvidar a Narizota",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"No todo brilla en la juguetería, que irresponsable que es el señor Simón",
     episodio:"Gabriel Medina. T02E11"
    },
    {frase:"Que triste que es verlas encerradas, hermosas criaturas aladas",
     episodio:"Gabriel Medina. T02E04"
    },
    {frase:"Mi corazón, que no es el del León, pareciera quebrarse, o derrumbarse, cuando la jirafa, que sabe que no safa, suena vanamente, con atravesar el paredón.",
     episodio:"Gabriel Medina. T02E04"
    },
    {frase:"Oh cruentas serpientes, ustedes si merecen la prisión, pues me enteré recientemente que a sus presas no matan por hambre, si no por diversión.",
     episodio:"Gabriel Medina. T02E04"
    },
    {frase:"Disculpe, ¿Fuego tiene?",
     episodio:"Mario Santos. T01E05"
    },
    {frase:"'Taqueteparió Crucitti.",
     episodio:"Emilio Ravenna. T01E11"
    },
    {frase:"'TA ABIERTOOO.",
     episodio:"Bernardo Galván, T01E01"
    },
    {frase:"¿Querés la verdad? tu partitura me pareció 'na cagada.",
     episodio:"Horvat, director de orquestas. T02E10"
    },
    {frase:"Por los siete mares, ¿Qué pasa con usted?",
     episodio:"Emilio Ravenna, T02E10"
    },
    {frase:"¡Una peluca para Robin!",
     episodio:"Alejandro Göller, bully. T02E05"
    },
    {frase:"Adiós, vaquero.",
     episodio:"Pedro Velasco. T01E03"
    },
    {frase:"¿Cómo has andado, vaquero?.",
     episodio:"Pedro Velasco. T02E03"
    },
    {frase:"Simulamos Feller, simulamos...",
     episodio:"Mario Santos. T01E03"
    },
    {frase:"Decidite de una vez que no te vas a casar con nosotras.",
     episodio:"Emilio Ravenna. T01E05"
    },
    {frase:"Yo creo que lo que pasó fue importante, evidentemente a los dos nos agarró una atracción muy fuerte y hemos sido tocados ambos.",
     episodio:"Pedro Velasco. T01E03"
    },
    {frase:"Tanta gente combatiendo el sistema, y el sistema cada vez más enriquecido, hoy por hoy, si te querés revelar, tenés que usar saco y corbata.",
     episodio:"Mario Santos. T02E09"
    },
    {frase:"Lo felicito, hay que tener talento para pensar un plan tan falible.",
     episodio:"Mario Santos. T01E13"
    },
    {frase:"Tengo un barquito en Cozumel, cálido, acogedor, y si no lo tomas a mal, quisiera invitarte a pasar unos días allí.",
     episodio:"Pedro Velasco. T01E03"
    },
    {frase:"Buen día, vaquerazo.",
     episodio:"Pedro Velasco. T02E03"
    },
    {frase:"Y no me pasó nunca, ¿Qué queres que te diga?",
     episodio:"Emilio Ravenna. T01E06"
    },
    {frase:"La mano, Ravenna.",
     episodio:"Pablo Lamponne. T01E02"
    },
    {frase:"Usted pagaría exactamente el doble, por la logística y mano de obra.",
     episodio:"Mario Santos. T01E08"
    },
    {frase:"Y usted pagaría exactamente el doble de ese presupuesto",
     episodio:"Mario Santos. T01E01"
    },
    {frase:"Aaaah bueno, ¡Es un profesional!",
     episodio:"Emilio Ravenna. T01E09"
    },
    {frase:"Entonces nada no, el nada está de más.",
     episodio:"Carlos Lorenzo, marido de Beatriz. T02E02"
    },
    {frase:"No siento el frío, no siento el calor. El peligro en mi vida es moneda corriente.",
     episodio:"Martín Vanegas. T01E09"
    },
    {frase:"Está bien Vanegas, llevate eso de acá, es horroroso. Existiendo la porcelana las cosas de cerámica me angustian.",
     episodio:"Mario Santos. T02E03"
    },
    {frase:"El hombre abeja, ¿Qué les parece?",
     episodio:"Director del colegio. T02E05"
    },
    {frase:"Y hoy es 25 de Mayo, ¿Se puede saber por qué demonios no lleva puesta la escarapela?",
     episodio:"Mario Santos. T02E05"
    },
    {frase:"Despacito que no es giratoria maestro eh.",
     episodio:"Pablo Lamponne. T01E01"
    },
    {frase:"Aquí nadie lo retiene, la puerta está abierta. En realidad está cerrada, pero si quiere se la abro.",
     episodio:"Mario Santos. T01E01"
    },
    {frase:"Sí, no saben cómo está cantando Betún. Es impresionante.",
     episodio:"Pablo Lamponne. T02E08"
    },
    {frase:"Los planes de los políticos son más delirantes y la gente los vota...",
     episodio:"Mario Santos. T02E04"
    },
    {frase:"Es mejor conocerse antes de acostarse, quererse, tener un código, sino despues del acto sexual viene la nada, un sentimiento terrible...",
     episodio:"Emilio Ravenna. T02E011"
    },
    {frase:"Disculpe, mi nombre es Máximo Cozetti, ¿Podría hablar unas palabritas con usted?",
     episodio:"Emilio Ravenna. T02E01"
    },
    {frase:"Odio trabajar con la presión del tiempo, me deprimen los límites...",
     episodio:"Mario Santos. T02E09"
    },
    {frase:"70 toneladas de agua por segundo, increíble, el doble que las cataratas del Niágara. Da orgullo ser argentino ¿No?",
     episodio:"Mario Santos. T02E02"
    },
    {frase:"Me pasaron un dato, hay un hombre que es bastante parecido, vive en Wilde, es carnicero.",
     episodio:"Pablo Lamponne. T01E012"
    },
    {frase:"Simulá Lamponne, tocalo, que haya conexión. Medina hace poco tuvo que besar a un mexicano.",
     episodio:"Mario Santos. T01E05"
    },
    {frase:"Sin embargo tenes buen físico. En serio, lindas piernas.",
     episodio:"Emilio Ravenna. T01E05"
    },
    {frase:"¿Por qué me trata de usted si hasta recién me trataste de vos...?",
     episodio:"Mario Santos. T01E07"
    },
    {frase:"Venimos a traerle un poco de budín tricolor que prepara la mama de él.",
     episodio:"Gordo punky. T01E06"
    },
    {frase:"No me calmo un carajo, ¿Y sabés qué? ¡Los mexicanos y vos me pueden chupar bien la poronga!",
     episodio:"Emilio Ravenna. T01E03"
    },
    {frase:"Le advierto que somos caros.",
     episodio:"Mario Santos. T01E08"
    },
    {frase:"Claro que la quiero... La quiero como se quiere a un perro.",
     episodio:"José Zarazola, 01x08"
    },
    {frase:"Coronel Máximo Cozzetti, operaciones anti-terroristas, trabajo para la interpol.",
     episodio:"Emilio Ravenna, 01x07"     
}
]

module.exports = frases