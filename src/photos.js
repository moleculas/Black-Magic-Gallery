const retornaFrase = ()=>{
  const frases=[
    "¡Had! La manifestación de Nuit",
    "Amor es la ley, amor bajo querer",
    "No hay ley más allá de Haz lo que tu quieras",
    "La develación de la compañía del cielo",
    "Todo hombre y toda mujer es una estrella",
    "Todo número es infinito, no hay diferencia",
    "¡Ayúdame, oh guerrero señor de Tebas, en mi develación ante los Niños de los Hombres!",
    "¡Sé tu Hadit, mi centro secreto, mi corazón y mi lengua!",
    "¡He aquí! Es revelado por Aiwass el ministro de Hoor-paar-kraat",
    "El Khabs está en el Khu, no el Khu en el Khabs",
    "¡Adorad entonces el Khabs, y ved mi luz arrojada sobre vosotros!",
    "Que mis servidores sean pocos y secretos: regirán sobre las mayorías y los reconocidos",
    "Estos son tontos que los hombres adoran; ambos sus Dioses y sus hombres son tontos",
    "¡Apareced, oh niños, bajo las estrellas y tomad vuestro colmo de amor!",
    "Estoy arriba de vosotros y en vosotros. Mi éxtasis está en el vuestro. Mi goce es ver vuestro goce",
    "Ahora sabrán que el escogido sacerdote y apóstol del espacio infinito es el príncipe-sacerdote la Bestia",
    "Y en su mujer llamada la Mujer Escarlata está dado todo el poder",
    "Ellos recogerán mis niños en su redil: traerán la gloria de las estrellas a los corazones de los hombres",
    "Pues él es siempre un sol y ella una luna. Pero para él es la alada llama secreta y para ella la luz estelar agachada",
    "Sin embargo ustedes no son así escogidos",
    "¡Arde sobre sus cejas, oh serpiente esplendorosa!",
    "¡Oh mujer de azures párpados, dóblate sobre ellos!",
    "La clave de los rituales está en la palabra secreta que a él le he dado",
    "Con el Dios y Adorador soy nada: no me ven, como los que están sobre la tierra",
    "Yo soy Cielo y no hay más Dios que yo y mi señor Hadit",
    "Ahora, por tanto, me conocen ustedes por mi nombre Nuit y él por un nombre secreto que le daré cuando por fin me conozca",
    "Puesto que soy Espacio Infinito y de ello las Estrellas Infinitas, hagan ustedes mismamente",
    "¡No líen nada! Que no se haga diferencia en medio de vosotros entre una cosa cualquiera y cualquier otra cosa; por eso viene el daño",
    "Mas quienquiera se aproveche de esto, ¡que sea el jefe de todo!",
    "Soy Nuit y mi palabra es seis y cincuenta",
    "Dividid, adicionad, multiplicad y entended",
    "Entonces dice el profeta y esclavo de la bella: ¿Quién soy y cuál será el signo? Y así ella le contestó, doblándose, una lamiente llama de azul, toda tocante, toda penetrante",
    "Sus hermosas manos sobre la tierra negra y su cuerpo cimbreño arqueado para el amor y sus suaves pies sin dañar las pequeñas flores",
    "¡Tú sabes! Y el signo será mi éxtasis, la conciencia de la continuidad de la existencia, la omnipresencia de mi cuerpo",
    "Entonces el sacerdote contestó y dijo a la Reina del Espacio, besando sus hermosas cejas y el rocío de su luz bañando su cuerpo todo en un dulce perfume de sudor",
    "¡Oh Nuit, la continua del Cielo, que sea siempre así; que los hombres no hablen de Ti como Una sino como Ninguna; y que no hablen de ti siquiera, ya que eres continua!",
    "Ninguna, respiró la luz, desfallecida y hádica, de las estrellas y dos",
    "Pues estoy dividida por amor al amor, por el albur de la unión",
    "Ésta es la creación del mundo, así el dolor de la división es cual nada y el goce de la disolución todo",
    "¡No hagas caso siquiera de estos hombres tontos y sus desdichas! Ellos sienten poco; lo que es, es balanceado por goces débiles; no obstante ustedes son mis escogidos",
    "¡Obedezcan a mi profeta!, ¡lleven a cabo las ordalías de mi conocimiento!, ¡búsquenme sólo a mí! Entonces los goces de mi amor les redimirán de todo dolor",
    "Esto es así: lo juro por la bóveda de mi cuerpo; por mi sagrado corazón y lengua; por todo lo que puedo dar, por todo lo que deseo de ustedes",
    "Entonces el sacerdote cayó en un hondo trance o desvanecimiento y dijo a la Reina del Cielo: ¡Escríbenos las ordalías; escríbenos los rituales; escríbenos la ley!",
    "Sin embargo ella dijo: las ordalías no las escribo: Los rituales serán mitad conocidos y mitad encubiertos: la Ley es para todos",
    "Esto que tu escribes es el tripartito libro de Ley",
    "Mi escriba Ankh-af-na-khonsu, el sacerdote de los príncipes, no cambiará siquiera una letra de este libro",
    "Aunque por temor a la aberración, comentará sobre ello por la sabiduría de Ra-Hoor-Khu-it",
    "También los mantras y los hechizos; el obeah y el wanga; la obra del basto y la obra de la espada; los aprenderá y enseñará",
    "Ha de enseñar; pudiendo hacer severas las ordalías",
    "La palabra de la Ley es qelhma",
    "Quien nos llama Thelemitas no obrará mal, si se adentra en la palabra. Pues allí dentro hay Tres Grados, el Eremita y el Amante y el hombre de Tierra. Haz lo que tú quieras será todo de la Ley",
    "La palabra de pecado es restricción. ¡Oh hombre!, ¡no rehúses tu esposa, si ella quiere! ¡Oh amante, si tú quieres, parte!",
    "No hay lazo que pueda unir los divididos más que el amor: todo lo demás es una maldición. ¡Malditos! ¡Maldito sea a los eones! Infierno",
    "Que se mantenga ese estado de muchadumbre atado y aberrante. Así con tu todo; sólo tienes derecho a hacer tu querer",
    "Haz eso y ninguno se opondrá",
    "Pues querer puro, libre de propósito, rescatado de la lujuria de resultado, es perfecto de todos lados",
    "El Perfecto y el Perfecto son un Perfecto y no dos; ¡no, no son ninguno!",
    "Nada es una clave secreta de esta ley. Los Judíos la llaman sesenta y uno; yo la llamo ocho, ochenta, cuatrocientos y dieciocho",
    "Pero ellos tienen la mitad: une por tu arte para que todo desaparezca",
    "Mi profeta es un tonto con su uno, uno, uno; ¿no son ellos el Buey y nada por el Libro?",
    "Se abroga todo ritual, toda ordalía, toda palabra y signo. Ra-Hoor-Khuit ha tomado su asiento en el Oriente en el Equinoccio de los Dioses; y que Asar sea con Isa, quienes también son uno",
    "Pero no están en mí. Que Asar sea el adorante, Isa el sufridor; Hoor en su nombre y esplendor secreto es el Señor iniciante",
    "Queda algo por decir acerca de la tarea Hierofántica. ¡He aquí!, hay tres ordalías en una y puede ser aplicada en tres pasos",
    "Lo grueso debe atravesar el fuego; que lo fino sea puesto a prueba por el intelecto y los excelsos escogidos en lo más alto",
    "Así tienen estrella y estrella, sistema y sistema; ¡que ninguno conozca bien al otro!",
    "Son cuatro las puertas a un único palacio; el suelo de ese palacio es de plata y oro; el lápiz lázuli y el jade están ahí; y todas las raras esencias; el jazmín y la rosa y los emblemas de la muerte",
    "Que franquée de a una o a la vez las cuatro puertas; que se coloque sobre el suelo del palacio. ¿No se hundirá? Amn. ¡Eh!, guerrero, ¿si tu servidor se hunde? Pero hay modos y modos",
    "¡Alardée por lo tanto: vístase todo de fino atuendo; coma ópimos manjares y beba vinos dulces y vinos espumantes!",
    "¡También tome su colmo y querer de amor como quiera, cuando, donde y con quien quiera! Peros siempre por mí",
    "Si esto no se hiciere como es debido; si usted confunde las marcas del espacio, diciendo: Ellas son una; o diciendo, Ellas son muchas",
    "Si el ritual no fuere siempre por mí: ¡entonces aténgase a los juicios horrendos de Ra-Hoor-Khuit!",
    "Esto regenerará el mundo, el pequeño mundo mi hermana, mi corazón y mi lengua, por quién envío este beso",
    "También, oh escriba y profeta, aunque seas de los príncipes, a ti no te templará ni a ti te absolverá. Pero que el éxtasis sea tuyo y el goce de la tierra: ¡siempre A mí! ¡A mí!",
    "No cambies siquiera el estilo de una letra; pues ¡he aquí!, tú, oh profeta, no has de ver todos estos misterios escondidos allí dentro",
    "El niño de tus entrañas, él los verá",
    "No lo esperes del Oriente ni del Occidente; pues de ninguna supuesta casa viene ese niño. ¡Aum! Toda palabra es sagrada y todo profeta verdadero; salvo que sólo entienden un poco",
    "Resuelven la primera mitad de la ecuación, dejan la segunda sin acometer. Pero tú tienes todo en la luz clara y algo, aunque no todo, en la oscuridad",
    "¡Invócame bajo las estrellas! Amor es la ley, amor bajo querer. Que ni los tontos equivoquen el amor; pues hay amor y amor. Hay el palomo y hay la serpiente. ¡Escoja usted bien!",
    "Él, mi profeta ha escogido, conociendo la ley de la fortaleza y el gran misterio de la Casa de Dios. Todas estas añejas letras de mi Libro están como es debido; mas tzaddi no es la Estrella",
    "Esto también es secreto: mi profeta lo revelará a los sabios",
    "Doy goces inimaginables en la tierra: certeza, no fe, mientras en vida, sobre la muerte; paz indecible, descanso, éxtasis; tampoco exijo cosa alguna en sacrificio",
    "Mi incienso es de maderas resinosas y mucílagos; y no hay sangre allí dentro: a causa de mi cabello los árboles de Eternidad",
    "Mi número es once, como todos los números de ellos quienes están en nosotros. La Estrella de Cinco Puntas, con un Círculo en el Medio y el círculo es Rojo",
    "Mi color es negro para los ciegos, sin embargo el azul y oro son vistos por los videntes. También tengo una gloria secreta para aquellos que me aman",
    "Mas amarme vale más que todas las cosas: si bajo las estrellas nocturnas en el desierto presentemente quemas el incienso mío ante mí",
    "Invocándome con un corazón puro y la llama de la Serpiente allí dentro, has de venir un poco a recostarte en mi seno",
    "Por un beso querrás entonces estar queriendo darlo todo; mas quienquiera dé una partícula de polvo perderá todo en esa hora. Recogerán bienes y acopio de mujeres y especias",
    "Llevarán joyas preciosas; excederán a las naciones del mundo en esplendor y orgullo",
    "Pero siempre en el amor a mí y así vendrán a comparecer ante mí en una sola túnica y cubiertos de un tocado fastuoso. ¡Os amo!",
    "¡Os anhelo! Pálida o púrpura, velada o voluptuosa, yo que soy toda placer y púrpura y ebriedad del sentido más entrañable, os deseo",
    "Ponéos las alas y despertad el esplendor enroscado en vosotros: ¡venid a mí!",
    "En todos mis encuentros con vosotros la sacerdotisa dirá —y sus ojos arderán con deseo mientras se tiene corita y regocijante en mi templo secreto—",
    "¡Por mí! ¡Por mí!, reavivando la llama de los corazones de todos en su cántico de amor",
    "¡Cantad la arrebatadora canción de amor a mí! ¡Quemad perfumes por mí! ¡Llevad joyas por mí! ¡Brindad por mí, pues os amo! ¡Os amo!",
    "Soy la hija de azures párpados del Poniente; soy la brillantez desnuda del voluptuoso cielo nocturno",
    "¡Por mí! ¡Por mí!",
    "La Manifestación de Nuit llega a su fin",
    "¡Nu! El escondite de Hadit",
    "¡Vengan!, ustedes todos y aprendan el secreto que aún no ha sido revelado. Yo, Hadit, soy el complemento de Nu, mi prometida",
    "No soy extendido y Khabs es el nombre de mi Casa",
    "En la esfera soy en todas partes el centro, mientras ella, la circunferencia, no se encuentra en parte alguna",
    "Pero ella será reconocida y yo nunca",
    "¡He aquí!, los rituales de antaño son negros. ¡Que los nefastos sean desechados; que los fastos sean purgados por el profeta! Entonces este Conocimiento se encaminará como debe ser",
    "Soy la llama que arde en todo corazón de hombre y en el fondo de toda estrella",
    "Soy Vida y el dador de Vida, sin embargo por esto el conocerme es el conocer la muerte",
    "Soy el Mago y el Exorcista. Soy el eje de la rueda y el cubo en el círculo. «Venid a mí» es una palabra tonta: pues soy yo el que va",
    "Quienes adoraron a Heru-pa-kraath me han adorado, mal, pues soy yo el adorador",
    "Recuerden ustedes todos que la existencia es goce puro; que todos los pesares son sólo sombras; pasan y están concluidos; aunque hay aquello que resta",
    "¡Oh profeta!, estás de malquerer para aprender esta escritura",
    "A ti te veo odiar la mano y la pluma, no obstante yo soy más fuerte",
    "A causa de mí en Ti que no me conocías",
    "¿Pues por qué? Porque tú eras el conocedor y yo",
    "Que ahora haya un velo por este sagrario; que ahora la luz devore a los hombres y los degluta con ceguedad",
    "Pues soy perfecto. NO siendo; y mi número es nueve en los tontos; sin embargo con el justo soy ocho y uno en ocho: Lo cual es vital, pues en realidad soy ninguno",
    "La Emperatriz y el Rey no están en mí; pues hay un secreto ulterior",
    "Soy la Emperatriz y el Hierofante. Así once como mi prometida es once",
    "¡Escúchenme, ustedes pueblo suspirante! Las penas del dolor y del arrepentimiento Se dejan a los muertos y a los moribundos La gente que todavía no me conoce",
    "Están muertos, estos sujetos, no sienten. Nosotros no estamos por los pobres y los tristes: los señores de la tierra son nuestros parientes",
    "¿Puede un Dios vivir en un perro? ¡No!, pero los supremos están en nosotros. Se regocijarán ellos, nuestros escogidos: quienes se apesadumbren no están en nosotros",
    "Belleza y fortaleza, risa cantarina y deliciosa languidez, fuerza y fuego, están en nosotros",
    "Nada tenemos con los descastados y los estragados: que mueran en su miseria. Pues ellos no sienten",
    "La compasión es el vicio de los reyes: aplasta a los infelices y a los débiles",
    "Ésta es la ley del fuerte y el goce del mundo. No pienses, oh rey, en esta mentira: Que Tú Debes Morir: en verdad no has de morir, sino vivir. Que ahora se entienda",
    "Si el cuerpo del Rey se disuelve, quedará para siempre en puro éxtasis. ¡Nuit! ¡Hadit! ¡Ra-Hoor-Khuit! El Sol, Fortaleza y Visión, Luz; estos están en los servidores de la Estrella y la Serpiente",
    "Soy la Serpiente que da Conocimiento y Deleite y gloria brillante y conmueve los corazones de los hombres con ebriedad",
    "¡Para adorarme tomen vino y drogas extrañas desde donde hablaré a mi profeta, y me emborracharé con ellos!",
    "No les dañará en modo alguno. Es una mentira, esta tontería contra el ser. La exposición de la inocencia es una mentira. ¡Sé fuerte, oh hombre!",
    "Disfruta, goza todas las cosas de los sentidos y del arrebato: no temas que ningún Dios te niegue a ti por esto",
    "Estoy solo: no hay Dios donde yo soy",
    "¡He aquí!, son estos graves misterios; pues están también en mis amigos que son eremitas. Ahora bien que no piensen hallarlos en el bosque o en la montaña; sino en lechos de púrpura",
    "Acariciados por magníficas bestias de mujeres con miembros generosos y fuego y luz en sus ojos y masas de cabello flameante en torno",
    "Ahí los hallarán. Los verán soberanos, al frente de ejércitos victoriosos, en todo el goce; y habrá en ellos un goce un millón de veces más grande que esto",
    "¡Cuidáos que ninguno fuerce al otro, Rey contra Rey! Amaos el uno al otro con corazones ardientes; pisotead a los hombres bajos en la feroz lujuria de vuestro orgullo, en el día de vuestra ira",
    "Están contra el pueblo, ¡oh mis escogidos!",
    "Soy la Serpiente secreta enroscada a punto de saltar: en mi enrosque hay goce. Si levanto mi cabeza, yo y mi Nuit somos uno",
    "Si bajo la cabeza mía y hago brotar el veneno, entonces hay arrebato de la tierra y yo y la tierra somos uno",
    "Hay un gran peligro en mí; pues quien no ha entendido estas runas cometerá un gran desacierto. Caerá dentro del foso llamado Porque y ahí perecerá con los perros de la Razón",
    "¡Ahora una maldición sobre Porque y su parentela!",
    "¡Sea Porque maldito para siempre!",
    "Si el Querer se detiene y grita Por Qué, invocando a Porque, entonces el Querer se detiene y no hace",
    "Si el Poder pregunta por qué, entonces el Poder es debilidad",
    "También la razón es un mentira; pues hay un factor infinito y desconocido; y todas sus palabras están retorcidas",
    "¡Basta de Porque! ¡Sea él condenado cual perro!",
    "¡Pero ustedes, oh mi pueblo, sublévense y despierten!",
    "¡Que los rituales se lleven a cabo como debe ser, con goce y belleza!",
    "Hay rituales de los elementos y fiestas de los tiempos",
    "¡Una fiesta para la primera noche del Profeta y su Prometida!",
    "Una fiesta para los tres días de la escritura del Libro de la Ley",
    "¡Una fiesta para Tahuti y el niño del Profeta —secreto—, oh Profeta!",
    "Una fiesta para el Ritual Supremo y una fiesta para el Equinoccio de los Dioses",
    "¡Una fiesta para el fuego y una fiesta para el agua; una fiesta para la vida y una fiesta más grande para la muerte!",
    "¡Una fiesta todos los días en vuestros corazones en el goce de mi arrebato!",
    "¡Una fiesta todas las noches a Nu y el placer del deleite más entrañable!",
    "¡Sí!, ¡festejad!, ¡regocijáos!, no hay miedo de aquí en más. Hay la disolución y el éxtasis eterno en los besos de Nu",
    "Hay muerte para los perros",
    "¿Fracasas? ¿Te pesa? ¿Hay temor en tu corazón?",
    "Donde yo soy éstos no están",
    "¡No te apiades de los caídos! Nunca los conocí. No estoy por ellos. No consuelo: odio al consolado y al consolador",
    "Soy único y conquistador. No estoy en los esclavos que perecen. ¡Sean ellos condenados y muertos! Amén. (Esto está en el 4 : hay un quinto que es invisible y allí dentro soy como un bebé en un huevo)",
    "Azul soy yo y oro a la luz de mi prometida; pero el fulgor rojo está en mis ojos; y mis destellos son púrpura y verde",
    "Púrpura más allá del púrpura; es la luz más alta que la vista",
    "Hay un velo: ese velo es negro. Es el velo de la mujer modesta; es el velo de luto y el paño mortuorio: nada de esto está en mí",
    "Derribad ese mentiroso espectro de las centurias: no veléis vuestros vicios en palabras virtuosas: estos vicios son mi servicio; obrad bien y os recompensaré aquí y de aquí en adelante",
    "No temas, oh profeta, cuando estas palabras sean dichas, no habrá de pesarte. Eres enfáticamente mi escogido, y benditos son los ojos que han de reparar en ti con alegría",
    "No obstante a ti te esconderé en una máscara de dolor: quienes a ti te vean temerán que hayas caído: pero a ti yo te solivianto",
    "En vano vocearán ellos su aberración de que nada significas; tú lo revelarás: tú sacas provecho: son los esclavos de porque: Ellos no están en mí",
    "Las pausas como quieras; ¿las letras?, ¡no las cambies ni en estilo ni en valor!",
    "Has de obtener el orden y el valor del Alfabeto Inglés; has de hallar nuevos símbolos para atribuirle",
    "¡Fuera!, burlones; aún cuando ríen en mi honor no reirán largo tiempo: entonces cuando estén tristes sepan que les he desamparado",
    "El que es recto seguirá siendo recto; el que es inmundo seguirá siendo inmundo",
    "¡Y es más!, ni piensen en cambiar: serán como son, y no de otra manera. Por esto los reyes de la tierra serán Reyes para siempre: los esclavos servirán",
    "Nadie será derribado o soliviantado: todo es siempre como fue",
    "Sin embargo mis servidores están enmascarados: tal vez aquel mendigo es un Rey. Un Rey puede escoger su vestidura como quiera: no hay prueba cierta: pero un mendigo no puede esconder su pobreza",
    "¡Cuidado entonces! ¡Ama a todos, no sea que acaso un Rey esté encubierto! ¿Eso crees? ¡Tonto! Si es un Rey, tu no puedes dañarlo",
    "¡Por lo tanto pega duro y bajo y al infierno con ellos, maestro!",
    "Hay una luz ante los ojos tuyos oh profeta, un luz indeseada, la más deseable",
    "Estoy enaltecido en el corazón tuyo, y los besos de las estrellas llueven con fuerza sobre tu cuerpo",
    "Estás exhausto en la hartura voluptuosa de la inspiración; la expiración es más dulce que la muerte, más rápida y risueña que una caricia del propio gusano del Infierno",
    "¡Oh! Estás sojuzgado: estamos sobre ti; nuestro deleite te cubre a ti todo: ¡salve!, ¡salve!, ¡profeta de Nu!, ¡profeta de Had!, ¡profeta de Ra-Hoor-Khu!",
    "¡Ahora regocíjate!, ¡ahora cede en nuestro esplendor y arrebato! ¡Cede en nuestra paz apasionada y escribe dulces palabras para los Reyes!",
    "Yo soy el Maestro: tú eres el Santo Escogido",
    "¡Escribe y encuentra éxtasis en la escritura! ¡Obra y sé nuestro lecho en el obrar! ¡Estremécete con el goce de vida y muerte! ¡Ah!, tu muerte será hermosa: quien la vea se alegrará",
    "Tu muerte será el sello de la promesa de nuestro longevo amor. ¡Ven! ¡Solivianta el corazón tuyo y regocíjate! Somos uno; somos ninguno",
    "¡Aguanta! ¡Aguanta! ¡Resiste en tu arrebato; no sumas en el desvanecimiento de los besos excelentes!",
    "¡Más fuerte! ¡Sosténte! ¡Levanta la cabeza tuya!, ¡no respires tan hondo —muere—!",
    "¡Ah! ¡Ah! ¿Qué siento? ¿Está exhausta la palabra?",
    "Hay ayuda y esperanza en otros hechizos. La sabiduría dice: ¡sé fuerte! Luego puedes concebir más goce",
    "¡No seas animal; refina tu arrebato! ¡Si bebes, bebe por las ocho y noventa reglas del arte: si amas, excede en delicadeza; y si haces algo gozoso, que en eso haya sutileza!",
    "¡Más excede!, ¡excede!",
    "¡Lucha siempre por más!, y si en verdad eres mío —¡y no lo dudes, y si eres siempre dichoso!— la muerte es la corona de todo",
    "¡Ah! ¡Ah! ¡Muerte! ¡Muerte!, has de anhelar la muerte. La muerte a ti está vedada, oh hombre",
    "El alcance de tu anhelo será la fortaleza de su gloria. Quien vive largo y desea mucho la muerte es siempre el Rey en medio de los Reyes",
    "¡Sí!, escucha los números y las palabras",
    "4638ABK24ALGMOR3YX2489RPSTOVAL. ¿Qué significa esto, oh profeta? No sabes; ni nunca has de saber. A seguir a ti viene uno: él lo expondrá",
    "No obstante, oh escogido, recuerda de ser yo; de seguir el amor de Nu en el cielo encendido de estrellas; de reparar en los hombres, de decirles esta palabra alegre",
    "¡Oh sé orgulloso y poderoso en medio de los hombres!",
    "¡Soliviántate!, ¡pues nadie hay parecido a ti en medio de los hombres o en medio de los Dioses!",
    "Soliviántate, oh mi profeta, tu estatura sobrepasará las estrellas. Adorarán tu nombre, inequívoco, místico, maravilloso, el número del hombre; y el nombre de tu casa es 418",
    "El fin del escondite de Hadit; y la bendición y la adoración al profeta de la hermosa Estrella",
    "¡Abrahadabra!, la recompensa de Ra Hoor Khut",
    "Hay división hacia acá y de regreso; hay una palabra que no se ha dado a conocer",
    "La ortografía ha muerto; todo es nada. ¡Cuidado! ¡Aguanten! Eleven el hechizo de Ra-Hoor-Khuit",
    "Ahora bien que primero se entienda que soy un dios de Guerra y de Venganza. Lidiaré duramente con ellos",
    "¡Escojan una isla!",
    "¡Fortifíquenla!",
    "¡Abónenla con ingenios de guerra!",
    "Les daré un ingenio de guerra",
    "Golpearán con él a la gente y ninguno les hará frente",
    "¡Acechen! ¡Repliéguense! ¡Sobre ellos!, ésta es la ley de la Batalla de la Conquista: tal será mi adoración respecto a mi casa secreta",
    "Toma la estela de la Revelación misma; entronízala en tu templo secreto —y ese templo ya estará dispuesto como debe ser— y será tu Kiblah para siempre",
    "No desvairá, no obstante un color milagroso volverá a ella día tras día. Enciérrala en vidrio trabado como una prueba para el mundo",
    "Esta será tu única prueba. Prohíbo discusión. ¡Conquista! Esto basta. Te facilitaré la obstrucción desde la casa mal ordenada en la Ciudad Victoriosa",
    "Tú mismo la has de traspasar con adoración, oh profeta, aunque no sea de tu gusto",
    "Te atendrás al peligro y a la desventura. Ra-HoorKhu está contigo. Adórame con fuego y sangre; adórame con espadas y con lanzas",
    "Que la mujer se ciña con una espada ante mí: que corra sangre en mi nombre",
    "¡Pisotea a los Paganos: sé sobre ellos, oh guerrero, te daré de comer de su carne!",
    "Sacrifiquen ganado, pequeño y grande; luego un niño",
    "Pero no ahora",
    "Ustedes verán aquella hora, oh bendita Bestia y tú la Concubina Escarlata de su deseo!",
    "Ustedes se entristecerán con esto",
    "No piensen con demasiado afán en alcanzar las promesas; no teman padecer las maldiciones. Ustedes, aun ustedes, no conocen todo este significado",
    "No temáis en absoluto; no temáis ni hombres, ni Destinos, ni dioses, ni cosa alguna",
    "No temáis al dinero, ni a la hilaridad de la tontería de la gente, ni a ningún otro poder en el cielo o sobre la tierra o bajo la tierra",
    "Hadit es vuestra luz; y yo soy la fortaleza, fuerza, vigor de vuestros brazos",
    "¡Que la misericordia quede fuera: condenada a quienes se apiadan! ¡Matad y torturad; no escatiméis, estad por encima de ellos!",
    "Llamarán a esta estela la Abominación de la Desolación; contad bien su nombre y será para vosotros tanto como 718",
    "¿Por qué? A causa de la caída de Porque, que de nuevo no está ahí",
    "Yergue mi imagen en el Oriente: has de comprar para ti una imagen que yo a ti señalaré, especial, no disímil de aquella que conoces. Y será inesperadamente asequible para ti hacer esto",
    "Las otras imágenes se agrupan a mi alrededor para sustentarme: que todas sean adoradas, pues se apiñarán para exaltarme",
    "Soy el objeto visible de adoración; los otros son secretos; son para la Bestia y su Prometida: y para los vencedores de la Ordalía X. ¿Qué es esto? Tú has de saber",
    "Como perfume mezclad harina gruesa y miel y residuos espesos de vino tinto: luego aceite de Abramelin y aceite de oliva y luego ablandad y macerad con ópima sangre fresca",
    "La mejor sangre es de la luna, mensual: luego la sangre fresca de un niño, o goteo de la hostia del cielo: luego de enemigos; luego del sacerdote o de los adoradores: por último de alguna bestia, no importa cuál",
    "Quemad esto: haced de esto pasteles y comed en mí",
    "Esto tiene también otro uso; que sea depositado ante mí y conservado lleno de perfume de vuestra oración: se llenará de escarabajos por así decirlo y de cosas sagradas a mí",
    "A estos matad, nombrando a vuestros enemigos; y ellos caerán ante vosotros",
    "Estos generarán también lujuria y poder de lujuria en vosotros al comerlos",
    "Ustedes serán también fuertes en la guerra",
    "Más aún, que sean conservados largo tiempo, es mejor; pues se hinchan con mi fuerza. Todos ante mí",
    "Mi altar es de latón enrejado: encima soldad a fuego plata u oro",
    "Viene un hombre rico de Occidente que verterá su oro sobre ti",
    "Del oro forjad acero",
    "Aprestaos a huir o a golpear",
    "Sin embargo vuestro lugar santo se mantendrá incólume a través de las centurias: aunque a fuego y espada sea incendiado y destrozado, aún está allí en pie una casa invisible y estará en pie hasta la caída del Gran Equinoccio",
    "Y entonces Hrumachis surgirá y el del doble-basto asumirá mi trono y lugar. ¡Otro profeta surgirá y traerá fiebre fresca de los cielos; otra mujer despertará la lujuria y adoración de la Serpiente",
    "Otra alma de Dios y bestia se confundirá con el sacerdote globado; otro sacrificio manchará la tumba; otro rey reinará y la bendición ya no será vertida Al místico Señor cabeza de Halcón!",
    "La mitad de la palabra de Heru-ra-ha, llamado Hoor-pa-kraat y Ra-HoorKhut",
    "Entonces dijo el profeta al Dios",
    "A ti adoro en la canción: Soy el Señor de Tebas y El inspirado predicador de Mentu; El muerto a sí mismo Ankh-af-na-khonsu Cuyas palabras son verdad, invoco, acojo Ante mí se devela el velado cielo, Tu presencia, ¡oh Ra-Hoor-Khuit!",
    "¡Unidad evidenciada al extremo! Adoro el poderío de Tu aliento, Dios supremo y terrible, Que haces temblar ante Ti Los dioses y la muerte: ¡Yo a ti, te adoro!",
    "¡Muéstrate en el trono de Ra! ¡Paso al Khu! ¡Ilumina los pasos del Ka! ¡Los pasos del Khabs corren Para conmoverme o apaciguarme! ¡Aum!, ¡que esto me colme!",
    "De suerte que tu luz está en mí; y su llama roja es cual espada en mi mano para impulsar tu orden",
    "Hay una puerta secreta que abriré para instaurar tu paso en todos los cuadrantes (éstas son las adoraciones, como lo has escrito), como se ha dicho",
    "La luz es mía, sus rayos Me consumen. He abierto una puerta secreta Hacia la casa de Ra y Tum De Kephra y de Ahathoor. Soy tu Tebano, Oh Mentu, ¡El profeta Ankh-af-na-khonsu!",
    "Por Bes-na-Maut mi pecho yo golpeo; Por el sabio Ta-nech tramo mi hechizo. Muestra tu esplendor estelar, ¡oh Nuit! Acógeme en la Casa tuya, Oh, alada serpiente de luz, ¡Hadit! Mora conmigo, ¡Ra-Hoor-Khuit!",
    "Todo esto y un libro para contar cómo llegaste hasta aquí y una reproducción de esta tinta y de este papel para siempre —pues en él la palabra es secreta y no sólo en el Inglés",
    "Y tu comentario sobre éste el Libro de la Ley será bellamente impreso en tinta roja y negra sobre bello papel hecho a mano",
    "Y a cada hombre y mujer con que te vieres, fuere sólo para comer o beber en su honor, es ésta la Ley que has de dar",
    "Entonces ellos correrán el albur de vivir esta bienaventuranza o no; lo mismo da. ¡Haz esto aprisa!",
    "¿Pero la obra del comentario? Eso es fácil; y Hadit ardiendo en tu corazón hará tu pluma veloz y segura",
    "Establece en tu Kaaba un escritorio; todo debe ser bien hecho y a guisa de negocio",
    "Tú mismo has de revisar las ordalías; salva sólo las ciegas. No rechaces ninguna, sin embargo has de reconocer y destruir las traidoras. Soy Ra-Hoor-Khuit, y tengo poder para proteger a mi servidor",
    "El éxito es tu prueba: no discutas; no conviertas; no hables de más. A ellos que buscan entramparte a ti, derribarte a ti, a ellos ataca sin piedad o cuartel; y destrúyelos por completo",
    "¡Veloz como una serpiente pisoteada vira y golpea! ¡Sé aún más mortífero que él! ¡Arrastra sus almas hacia espantoso tormento: ríe de su temor: escupe sobre ellos!",
    "¡Que la Mujer Escarlata recele! Si la piedad y la compasión y la ternura visitan su corazón",
    "Si ella deja mi obra para juguetear con antiguas dulcedumbres entonces mi venganza se hará conocer",
    "Me mataré yo su niño: alienaré su corazón: la separaré de los hombres: como una ramera disminuida y despreciada se arrastrará por calles mojadas y umbrías y morirá aterida y famélica",
    "Mas que se eleve en orgullo. Que me siga en mis pasos. ¡Que obre la obra de maldad! ¡Que mate su corazón!",
    "¡Que sea llamativa y adúltera; que se cubra de joyas y vestiduras fastuosas y que sea desvergonzada ante todos los hombres!",
    "En el acto la alzaré hacia pináculos de poder: en el acto engendraré de ella un niño más poderoso que todos los reyes de la tierra",
    "La colmaré de goce: con mi fuerza verá y acometerá la adoración de Nu ella alcanzará Hadit",
    "Soy el Señor guerrero de los Cuarenta: los Ochenta se alebran ante mí y se envilecen",
    "Los conduciré hacia la victoria y goce: en la batalla estaré en vuestras armas y se deleitarán en matar",
    "El éxito es vuestra prueba, el coraje vuestra armadura; continúen, continúen, en mi fortaleza y no se volverán atrás por nadie",
    "Este libro será traducido a todas las lenguas: pero siempre con el original en la grafía de la Bestia",
    "Pues en la hechura imprevista de las letras y su posición entre sí: en estas hay misterios que ninguna Bestia adivinará",
    "Que ni lo pretenda: pero viene uno tras él, no digo de dónde, que descubrirá la Clave de todo ello. Así el trazo de esta línea es una clave: así este círculo perfecto en su malogro es también una clave",
    "Y Abrahadabra. Será su niño y eso extrañamente. Que no lo busque; pues de este modo sólo conseguirá apartarse de ello",
    "Este misterio de las letras está ahora concluido y quiero seguir hacia el lugar más santo",
    "Estoy en una cuádruple palabra secreta, la blasfemia contra todos los dioses de los hombres",
    "¡Los maldigo! ¡Los maldigo! ¡Los maldigo!",
    "Con mi cabeza de Halcón picoteo los ojos de Jesús que cuelga sobre la cruz",
    "Bato mis alas en la faz de Mohammed y lo ciego",
    "Con mis garras lacero al Hindú y al Budista, Mongol y Din",
    "¡Bahlasti! ¡Ompedha! Escupo vuestros credos crápulas",
    "Que María inviolada sea despedazada sobre ruedas: que por amor a ella todas las mujeres castas sean profundamente despreciadas en medio de vosotros",
    "¡También por amor a la belleza y al amor!",
    "Despreciad también a los cobardes, soldados profesionales que no osan pelear, sino jugar; a todos los tontos despreciad",
    "¡No obstante los acerados y los orgullosos, los regios y los altivos; ustedes son hermanos!",
    "Como hermanos peleen",
    "No hay ley más allá de Haz lo que tú quieras",
    "Es el fin de la palabra del Dios entronado en el asiento de Ra, aligerando las vigas del alma",
    "Ante mí hagan reverencia; ante mí vengan a través de la tribulación de la ordalía, que es bienaventuranza",
    "El tonto lee este Libro de la ley, y su comentario y no lo entiende",
    "Que venga a través de la primera ordalía y le sabrá a plata",
    "A través de la segunda oro",
    "A través de la tercera a piedras de agua preciosa",
    "A través de la cuarta, a chispas profundas del fuego íntimo",
    "Pero a todos les parecerá bello. Sus enemigos que no lo creen son meros mentirosos",
    "Hay éxito",
    "Soy el Señor Cabeza de Halcón del Silencio y de la Fortaleza, mi tocado amortaja el azulado cielo nocturno",
    "¡Salve!, ¡guerreros gemelos en torno a los pilares del mundo!, pues vuestro tiempo está próximo",
    "Soy el Señor del Doble Basto de Poder; el basto de la fuerza de Coph Nia — no obstante mi mano izquierda está vacía, pues he aplastado un Universo, y nada queda",
    "Pegad las hojas de derecha a izquierda y de arriba hacia abajo; ¡entonces hé aquí!",
    "En mi nombre hay un esplendor escondido y glorioso, así como el sol de medianoche es siempre el hijo",
    "La consumación de las palabras es la Palabra Abrahadabra",
    "El Libro de la Ley está Escrito y Encubierto. Aum. Ha"
  ];
  return frases[Math.floor(Math.random() * frases.length)]
};

const photosPre = [
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/1.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/2.jpg",
      width: 6,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/3.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/4.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/5.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/6.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/7.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/8.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/9.webp",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/10.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/11.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/12.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/13.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/14.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/15.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/16.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/17.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/18.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/19.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/20.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/21.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/22.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/22_1.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/23.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/24.jpg",
      width: 2,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/25.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/26.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/27.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/28.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/29.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/30.jpg",
      width: 4,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/31.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/32.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/33.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/34.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/35.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/36.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/37.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/38.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/39.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/40.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/41.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/42.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/43.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/44.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/45.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/46.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/47.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/48.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/49.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/50.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/51.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/52.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/53.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/54.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/55.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/56.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/57.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/58.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/59.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/60.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/61.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/62.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/63.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/64.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/65.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/66.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/67.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/68.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/69.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/70.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/71.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/72.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/73.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/74.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/75.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/76.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/77.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/78.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/79.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/80.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/81.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/82.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/83.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/84.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/85.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/86.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/87.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/88.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/89.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/90.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/91.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/92.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/93.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/94.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/95.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/96.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/97.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/98.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/99.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/100.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/101.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/102.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/103.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/104.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/105.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/106.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/107.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/108.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/109.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/110.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/111.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/112.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/113.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/114.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/115.gif",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/116.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/117.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/118.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/119.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/120.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/121.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/122.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/123.gif",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/124.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/125.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/126.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/127.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/128.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/129.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/130.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/131.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/132.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/133.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/134.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/135.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/136.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/137.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/138.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/139.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/140.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/141.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/142.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/143.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/144.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/145.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/146.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/147.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/148.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/149.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/150.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/151.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/152.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/153.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/154.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/155.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/156.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/157.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/158.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/159.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/160.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/161.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/162.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/163.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/164.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/165.gif",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/166.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/167.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/168.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/169.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/170.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/171.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/172.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/173.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/174.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/175.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/176.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/177.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/178.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/179.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/180.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/181.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/182.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/183.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/184.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/185.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/186.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/187.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/188.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/189.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/190.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/191.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/192.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/193.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/194.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/195.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/196.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/197.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/198.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/199.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/200.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/201.webp",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/202.webp",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/203.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/204.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/205.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/206.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/207.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/208.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/209.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/210.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/211.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/212.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/213.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/214.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/215.webp",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/216.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/217.gif",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/218.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/219.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/220.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/221.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/222.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/223.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/224.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/225.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/226.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/227.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/228.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/229.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/230.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/231.webp",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/232.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/233.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/234.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/235.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/236.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/237.webp",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/238.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/239.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/240.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/241.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/242.jpg",
      width: 2,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/243.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/244.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/245.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/246.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/247.webp",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/248.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/249.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/250.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/251.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/252.gif",
      width: 2,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/253.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/254.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/255.jpg",
      width: 4,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/256.jpg",
      width: 3,
      height: 4,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/257.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/258.jpg",
      width: 3,
      height: 5,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/259.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/260.jpg",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/261.jpg",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/262.webp",
      width: 5,
      height: 2,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/263.jpg",
      width: 1,
      height: 1,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/264.webp",
      width: 5,
      height: 3,
      title: retornaFrase()
    },
    {
      src: "http://desarrollos.artikaweb.com/react-VE/gallery-masonry/images/265.webp",
      width: 5,
      height: 3,
      title: retornaFrase()
    }
  ];

  export const photos= photosPre.sort(function (a, b) {return Math.random() - 0.5;});
  