const phrases = [
    "Te amo, Lamponne",
    "Ahí está, lo dijo",
    "Sos muy linda, ojalá no cambies nunca",
    "Hay un grupo de personas que resuelven todo tipo de problemas",
    "No sea corta mambo, Santos",
    "¿Se puede saber porque demonios no lleva puesta la escarapela?",
    "¿Fuego tiene?",
    "Al termino del episodio oral señores.",
    "Si, a mi se me están arrugando los deditos",
    "Lamponne, el pedido es sencillo, conseguime una Magnum 357 con balas de verdad.",
    "Y perdimos el cine Grand Splendid... una verdadera tragedia.",
    "73 años y todavía se me agarrota la toronja",
    "Confío más en cualquier animal que en vos, Vanegas.",
    "¿Qué tiene de llamativa esta camisa?",
    "Usted es una mujer muy hermosa y yo un joven inexperto",
    "No veo la hora de embadurnarla en aceite, tirarla en la cama y entubarle la garlopa hasta la garganta.",
    "Sonreí Javito que acá te van a dar de comer",
    "Tiene cara de boludo, pero así como lo ven se clava cinco pajas por día",
    "¡Aunque aparentás ser un hosco, en realidad sos un dulce de leche! Te quiere, Gaby.",
    "Lamponne trae esto, Lamponne trae lo otro, ¿y alguien se acuerda de Lamponne? ¿alguien felicita a Lamponne?",
    "Además se supone que las amigas de Kiki son las mejores tiracaucho de la zona, ¿no?",
    "¿Qué pasa mi vida te decepcionamos?",
    "YO AMO LA CULTURA AMERICANA TENGO TODOS LOS MUÑEQUITOS DE LA GUERRA DE LAS GALAXIAS, OBI-WAN KENOBI, EL MAESTRO YODA, LUKE, HAN SOLO, DARTH VADER",
    "¿No hay un piquito para mi?",
    "El derecho, Lamponne.",
    "Aguanten los travestis",
    "Con ustedes, la criatura",
    "¿Qué prefieren? ¿quieren el juego de la vida, o el boggle?",
    "Mis gustos musicales son más que amplios Lamponne, para que sepas, traje música super divertida",
    "Kjjjjjjjjjj",
    "Estuviste un año en la selva, solo, hablándole a una cámara de televisión apagada... kjjjjjjjj",
    "Un año en la selva... kjjjjjjjjj",
    "¿Siempre al corazón Milazzo?",
    "¿Sabes de que antes de que vos aparecieras me quería matar yo?",
    "Esta gente me devuelve el entusiasmo",
    "Mario santos, ¿o debería llamarlo Francisco de Aguirre?",
    "Yo de ajedrez no entiendo un carajo, pero este es bueno, es húngaro o australiano, me lo regalaron en el supermercado",
    "Eeeepa, es un ajedrez... Yo colecciono!",
    "Piet Mondrian, pintura en diamante, en rojo, azul y amarillo, este cuadro carece de espacio tridimensional, pero igualmente resulta muy dinámico.",
    "Yo soy el del cumpleaños",
    "Escuchame cumpleaños, ¿dónde están las sartenes de acero para el pescado?",
    "Metete tu cumpleaños en el orto, pelotudo",
    "Nosotros pensamos que usted traía sus propios elementos...",
    "Te pedí un tigre Lamponne.",
    "No te calente' Kike",
    "¿Pero vos viste que pedazo de cocina, Susana?",
    "¿Pedro Velasco? que nombre más firme.",
    "Este recuerdo hermoso que tengo, es el dulce de mirinjo que fabrican ahí, que los habitantes de allí le llaman ¡EL DUL-CE-CI-TO!",
    "¿A quién votaste Medina? Tic-Tac, me pareció más humano.",
    "¿Te das cuenta que pusiste en peligro el operativo?",
    "No tolero ver a estas criaturas encerradas, nacieron para estar libres",
    "Tortuga marítima",
    "Lamponne, te agachas y te la ponen!",
    "Jenga, le gusta jugar al jenga.",
    "Dice... esperemos a tito",
    "Y yo no quiero meter más leña al fuego, pero a las cuatro me va a llegar un cargamento de zapallo",
    "Dicho de otra manera... ser un pederasta? más comunmente llamado bufarra, bufarreta, bufarrón, sopapa, come niño, pimentero, bayoneta, sacacorcho, cucurucho, banderin O CHUPETE?",
    "Si te dijieron que te fueras te tenes que ir, boludito",
    "VALENTÍA Y FUERZA CONTRA CUALQUIER AMENAZA",
    "¿Qué es lo que pasa acá?",
    "¿El miembro de su marido esta permanentemente en estado de reposo o por momentos adquiere cierta rigidez?",
    "Sabes que este tipo te lo encuentra, Milazzo te mata a Bin Laden",
    "Miralo con intensidad, pero no de manera chabacana, sutilmente",
    "Alguien me pellizcó la cola",
    "Honesty, is such a lonely word",
    "Sueñan los niños en la juguetería, de nuestro amigo el señor Simón",
    "Para mi esto es un baldazo de agua fría",
    "Estoy buscando el muñequito que le crecía pastito en la cabeza, el Loco Lope, no se si lo tiene",
    "Y si nos queremos tanto... ¿¿Por qué tenemos que dejar de trabajar juntos??",
    "Saquen al chino",
    "Los super-hombres somos cinco",
    "Earl Grey, tiene?",
    "Estoy pasando por la sala de profesores, y no vas a poder creer esto, la de historia le está tirando la goma al rector",
    "Tenes un tipo de rostro bastante buscado en este momento, aprovechalo",
    "Uhhhh, pepitas",
    "100 pesos a que lo elige a Lamponne",
    "Estás equivocado, traje tambien el compact del Rey León.",
    "Juegan los niños, en los escaparates, en la juguetería del señor Simón",
    "Aunque hoy los ídolos sean Piñón Fijo o Bellota, yo igual jamás podré olvidar a Narizota",
    "No todo brilla en la juguetería, que irresponsable que es el señor Simón",
    "Que triste que es verlas encerradas, hermosas criaturas aladas",
    "Mi corazón, que no es el del León, pareciera quebrarse, o derrumbarse, cuando la jirafa, que sabe que no safa, suena vanamente, con atravesar el paredón.",
    "Oh cruentas serpientes, ustedes si merecen la prisión, pues me enteré recientemente que a sus presas no matan por hambre, si no por diversión.",
    "Disculpe, ¿fuego tiene?",
    "'Taqueteparió Crucitti",
    "'TA ABIERTOOO",
    "¿Querés la verdad? tu partitura me pareció 'na cagada",
    "Por los siete mares, ¿qué pasa con usted?",
    "Una peluca para Robin",
    "Adiós, vaquero",
    "Simulamos Feller, simulamos...",
    "Decidite de una vez que no te vas a casar con nosotras",
    "Yo creo que lo que paso fue importante, evidentemente a los dos nos agarró una atracción muy fuerte y hemos sido tocados ambos",
    "Tanta gente combatiendo el sistema, y el sistema cada vez más enriquecido, hoy por hoy, si te queres revelar, tenes que usar saco y corbata.",
    "Lo felicito, hay que tener talento para pensar un plan tan falible",
    "Tengo un barquito en Cozumel, cálido, acogedor, y si no lo tomas a mal, quisiera invitarte a pasar unos días allí",
    "Buen día, vaquerazo",
    "Y no me pasó nunca, ¿qué queres que te diga?",
    "La mano, Ravenna",
    "Usted pagaría exactamente el doble de ese presupuesto, por la logística y mano de obra.",
    "Aaaah bueno, es un profesional!",
    "Entonces nada no, fuiste a la escuela, el nada está de más",
    "No siento el frío, no siento el calor. El peligro en mi vida es moneda corriente.",
    "Está bien Vanegas, llevate eso de acá, es horroroso. Existiendo la porcelana las cosas de cerámica me angustian."
]

module.exports = phrases