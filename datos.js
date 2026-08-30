// ============================================================
//  DATOS DE EL HUB
//  Aca se carga todo. Es el unico archivo que se edita para
//  actualizar el kiosco: no hace falta tocar el HTML.
//
//  La carga es por consola hasta que se habilite que cargue
//  cualquiera. El Hub es la fuente; el Linktree (linktr.ee/EL_HUB)
//  es el espejo. Los CSV de input/ son historicos, NO son fuente.
// ============================================================


// --- LOS SEIS CAMINOS DE LA HOME ---
// El orden de este array es el orden en pantalla.
//
// Son seis intenciones y nada mas: lo que alguien quiere, que no caduca. Las
// actividades NO van aca aunque tengan pantalla propia: son un listado de lo
// que pasa esta semana, otra pregunta, y viven arriba junto al hero.
//
// "color" es el panel izquierdo de la fila. Ese panel es el lugar donde
// entra la foto: cuando haya fotos de la gente de Buenos Aires, se completa
// "foto" con la ruta del archivo y el color se reemplaza solo, sin tocar el
// diseno ni el codigo.
const CAMINOS = [
  { id: "nuevo",          titulo: "Soy nuevo en Saddleback", sub: "Por dónde empezar",              color: "#1980cc", icono: "puerta",     foto: "" },
  { id: "comunidad",      titulo: "Encontrar mi comunidad",  sub: "Por edad y por etapa de la vida", color: "#6a4a91", icono: "grupo",      foto: "" },
  { id: "servir",         titulo: "Quiero servir",           sub: "Sumate al Dream Team",           color: "#f15b4e", icono: "manos",      foto: "" },
  { id: "crecer",         titulo: "Quiero crecer en mi fe",  sub: "Discipulado y formación",        color: "#3f7d3f", icono: "brote",      foto: "" },
  // Ambar y no el verde que tenia: al quedar pegado a "crecer", dos verdes
  // seguidos se leian como el mismo color y el panel dejaba de distinguir.
  { id: "acompanamiento", titulo: "Acompañamiento",          sub: "Para cuando estás pasando algo difícil", color: "#b06a14", icono: "corazon", foto: "" },
  { id: "bautismo",       titulo: "Quiero bautizarme",       sub: "Qué es y cómo se hace",          color: "#0e7f9e", icono: "gota",       foto: "" },
];


// --- LOS PRIMEROS PASOS ---
// El orden es el orden real y es a proposito: primero el desayuno, que es
// lo mas facil de decirle si, y despues Activa. "Por donde empiezo" se
// responde con una secuencia, no con una lista de opciones sueltas.
//
// Activa 2 estaba cargada con un texto inventado: saddleback.com no separa
// Activa 1 de Activa 2, asi que lo que decia era una inferencia mia y no algo
// que dijera el equipo. Sale hasta que alguien de Buenos Aires confirme que
// existe y que cubre.
//
// El primer paso no lleva "cuando" fijo porque lo saca de EVENTOS: si hay un
// desayuno cargado con fecha, el paso muestra esa fecha y se puede tocar.
const PASOS_NUEVO = [
  {
    nombre: "Desayuno para Nuevos Amigos",
    cuando: "Primer domingo de cada mes",
    texto: "Un desayuno para conocernos las caras y que nos preguntes lo que quieras. No hace falta anotarse: venís y ya.",
  },
  {
    nombre: "Activa 1",
    cuando: "Una hora",
    texto: "De qué se trata Saddleback, en qué creemos y cómo se conecta tu historia con la de la iglesia.",
    // "form" es una clave de FORMS. El paso muestra siempre como anotarse:
    // Activa no tiene fecha, asi que si no queda una forma de dejar los datos,
    // el que se entusiasma en el kiosco no tiene que hacer y se va.
    //
    // Mientras FORMS.activa este vacio se ve el hueco marcado en vez de un QR
    // que no lleva a ningun lado. Cuando llegue el link, se pega ahi y el
    // paso se enciende solo.
    form: "activa",
    formAccion: "Anotate en Activa",
  },
];


// --- LAS PREGUNTAS DEL BAUTISMO ---
// Reemplazan a la seccion "Las fechas", que prometia fechas y mostraba dos
// tarjetas diciendo "a coordinar": un horario sin dia no le sirve a nadie, y
// las dos tarjetas se diferenciaban en una linea.
//
// Todo lo que dicen sale de lo que ya estaba cargado: los datos de las dos
// entradas de bautismo en RECURRENTES y el texto de TEXTOS.bautismo. No hay
// nada inventado aca.
const PREGUNTAS_BAUTISMO = [
  {
    p: "¿Cuándo son los bautismos?",
    r: "Las fechas se van anunciando: no hay un día fijo. Cuando hay, son a las 17:00 y a las 19:00 en Mario Bravo 559. Dejanos tus datos y te avisamos de la próxima.",
  },
  {
    p: "¿Tengo que anotarme?",
    r: "Sí, y es lo único que tenés que hacer ahora. Completá el formulario de acá arriba y nos ponemos en contacto.",
  },
  {
    p: "¿Qué tengo que llevar?",
    r: "La remera, el short y la toalla te las damos nosotros. Vos traé a tu familia y a tus amigos, así celebramos juntos.",
  },
  {
    p: "¿Y si es menor de 18?",
    r: "También se bautizan, pero hay que coordinarlo antes con las responsables de Kids. Hablá con Geli o con Ceci.",
  },
];


// --- LAS PREGUNTAS DE LOS QUE LLEGAN ---
// OJO: hoy no se muestran en ningun lado. Estaban en "Soy nuevo" y se sacaron
// porque repetian lo que ya dicen los pasos. Se dejan cargadas por si vuelven.
// Las que frenan a alguien en la puerta. Salen de la pagina de Activate de
// saddleback.com y de los datos de Buenos Aires. Sacar la excusa para no
// venir sirve mas que explicar mejor de que se trata.
const PREGUNTAS_NUEVO = [
  { p: "¿Quién puede ir?",     r: "Cualquiera. No hace falta ser parte de nada ni creer nada." },
  { p: "¿Tengo que anotarme?", r: "Podés, pero no hace falta. Si caés, entrás." },
  { p: "¿Cuánto dura?",        r: "Una hora." },
  { p: "¿Dónde es?",           r: "Mario Bravo 559." },

  // Estas dos estan en la web de Saddleback US. Confirmar con el equipo de
  // Buenos Aires si aplican aca y, si aplican, descomentarlas: la de los
  // hijos es la que mas decide si alguien viene o no.
  // { p: "¿Qué llevo?", r: "Nada. El cuadernillo y la lapicera te los damos nosotros." },
  // { p: "¿Y mis hijos?", r: "Hay guardería en Saddleback Kids mientras estás en Activa." },
];


// --- AREAS DEL DREAM TEAM ---
// Confirmadas con Ani el 21/08/2026. Pueden venir mas.
// "que" es lo que hace el area; falta definir Kids y SYM.
const AREAS = [
  { nombre: "Primeras Impresiones", que: "Recibir a la gente que llega", referente: "Ruben" },
  { nombre: "Kids",                 que: "", referente: "Geli" },
  { nombre: "SYM",                  que: "", referente: "Saulo" },
  { nombre: "Worship / Oración",    que: "", referente: "Dami" },
  { nombre: "Peace",                que: "Salir a servir a la comunidad", referente: "Gleisner" },
  { nombre: "Atomo",                que: "Diseño y audiovisual", referente: "Dani" },
  { nombre: "Hub",                  que: "Armado del espacio los domingos", referente: "Equipo Hub" },
];


// --- LA REUNION DE LOS DOMINGOS ---
// Va aparte de EVENTOS a proposito: no es una actividad con fecha, es lo
// que pasa todas las semanas. Por eso en pantalla tiene su propia franja.
const REUNIONES = {
  horas: ["11:00", "17:00", "19:00"],
  lugar: "Mario Bravo 559",
};


// --- FOTOS ---
// Cada foto puede ser una ruta suelta o { src, recorte: true }.
//
//   ruta suelta   La foto entra ENTERA en el panel y lo que sobra se rellena
//                 con la misma imagen borroneada. Es lo seguro: no se pierde
//                 nada. Se usa cuando la foto tiene texto adentro, como la
//                 del frente: recortada quedaba "DDLEBACK CHUR".
//   recorte true  La foto llena el panel y se recorta al medio. Se ve mucho
//                 mejor cuando no hay nada que leer —caras, manos, una
//                 escena— porque el panel es alto y una foto apaisada entera
//                 deja mas desenfoque que foto.
// El kiosco tiene un lugar reservado para foto en el hero. Mientras la ruta
// este vacia queda un degrade calido con el cartel de "falta foto": no se ve
// roto, se ve pendiente. Cuando haya foto de la gente de Buenos Aires, se
// pone el archivo en output/fotos/ y se completa la ruta aca. Nada mas.
const FOTOS = {
  hero: "",       // ej: "fotos/domingo.jpg"
  bautismo: { src: "fotos/bautismo-abrazo.jpg", recorte: true },
  nuevo: "fotos/frente-saddleback.jpg",   // el frente de Mario Bravo 559
  crecer: "",     // apaisada, dos personas charlando con un cafe, o un grupo
  // La banda de Grupos Pequenos. Apaisada y bien ancha: es un fondo con el
  // titulo encima, asi que conviene con recorte y sin nada escrito adentro.
  //
  // PROVISORIA: es la foto del modulo de Small Groups de saddleback.com, o
  // sea gente del campus de Estados Unidos. Sirve para ver el diseno, pero hay
  // que reemplazarla por una de un grupo de Buenos Aires: el kiosco esta en el
  // hall de Mario Bravo y ahi la gente se reconoce o no se reconoce.
  grupos: { src: "fotos/grupos-PROVISORIA-saddleback-us.jpg", recorte: true },
};


// --- EL CANAL DE DIFUSION ---
// Es lo unico que alguien se lleva puesto del kiosco: la pantalla se apaga,
// el telefono no. Mientras el link este vacio, el QR cae al Linktree.
const CANALES = {
  whatsapp: "https://whatsapp.com/channel/0029VaHPFcH6LwHoZ5e83x2N",
};


// --- TEXTOS DE LOS CAMINOS ---
// El modulo calido que abre cada pantalla: titulo en caja baja y parrafos
// escritos como los diria una persona, no como una planilla. El patron es
// el modulo de bautismo de saddleback.com; la idea es que el kiosco se lea
// como la web de la iglesia.
//
// Las claves son los id de CAMINOS. Falta escribir los otros cinco.
const TEXTOS = {
  nuevo: {
    // Encuadre tomado de saddleback.com/sections/get-involved/adults/activate/
    // y traducido. La web no separa Activa en 1, 2 y 3: describe una sola
    // experiencia de una hora. La secuencia de abajo es la de Buenos Aires.
    titulo: "Tu primer paso en Saddleback empieza acá",
    parrafos: [
      "No hace falta saber nada ni creer nada para entrar. Alcanza con tener ganas de conocer de qué se trata.",
      "Hay más de una manera de empezar y ninguna te compromete a la siguiente. Podés hacer una sola y quedarte ahí el tiempo que quieras.",
    ],
    accion: "Anotate en Activa",
  },
  crecer: {
    // Los dos caminos que describen los parrafos son Reinicio (uno a uno) y
    // Fundamentos (en grupo), que es lo que hay cargado en RECURRENTES.
    titulo: "¿Querés crecer y no sabés por dónde?",
    parrafos: [
      "Creer no es un interruptor que se prende una vez. Se parece más a entrenar: pasa de a poco, y pasa mejor acompañado que solo.",
      "Hay dos caminos según dónde estés. Uno es uno a uno, con alguien que te acompaña de cerca. El otro es en grupo, con más tiempo y más profundidad.",
    ],
    accion: "Quiero empezar",
  },
  bautismo: {
    titulo: "¿El bautismo es tu próximo paso?",
    parrafos: [
      "El bautismo es la manera de contarle a todos que estás siguiendo a Jesús. No te hace parte de la familia: muestra que ya lo sos.",
      "Cuando te bautizás en Saddleback te damos la remera, el short y la toalla. Vos traé a tu familia y a tus amigos, así celebramos juntos tu vida nueva.",
    ],
    accion: "Contanos que te interesa",
  },
};


// --- FORMULARIOS ---
// Mientras ACTIVA este vacio, la pantalla muestra el QR del Linktree
// en lugar de un boton que no lleva a ningun lado.
const FORMS = {
  activa:      "",
  bautismo:    "https://forms.gle/nFoENjFamgUzwZceA",
  crecimiento: "",   // <-- formulario de Reinicio / Fundamentos (Jose Salazar)
  linktree:    "https://linktr.ee/EL_HUB",
};


// --- EVENTOS ---
// Cada evento tiene su propia pantalla, a la que se llega tocandolo en
// Actividades. Los cuatro datos que alguien necesita antes de decidir si va
// son descripcion, horario, direccion e inscripcion.
//
// No hace falta tener todo: lo que falte se muestra como hueco marcado, que
// es mejor que inventarlo o que esconderlo.
//
//   descripcion  Que es y para quien, en una o dos frases.
//   fechaFin     Solo si dura varios dias. La pantalla muestra el rango.
//   horario      Ej "19:30hs". Va junto a la fecha.
//   lugar        La direccion. Casi siempre "Mario Bravo 559".
//   costo        Solo si sale plata. Va en la pantalla aunque el detalle este
//                en el formulario: es lo que mas define si alguien va o no,
//                y enterarse recien al anotarse es peor.
//   incluye      Que cubre ese costo. Es lo que lo justifica.
//   contacto     A quien preguntarle. Ej "Nombre · 11 0000-0000". Solo si esa
//                persona dijo que si: un numero personal en la pantalla del
//                hall se pone preguntando, no deduciendolo de otra planilla.
//   inscripcion  false      -> confirmado que no hace falta anotarse
//                true       -> hace falta, pero todavia no tenemos el link
//                "https://" -> hace falta, y ese es el link del QR
//                null       -> todavia no sabemos si hace falta
//   flyer        Ruta dentro de output/flyers/. Se usa en la pantalla del
//                evento entero y en el hero de la home recortado.
const EVENTOS = [
  {
    fecha: "2026-08-22", nombre: "Adultos 35-55", tipo: "Encuentro", comunidad: "Adultos",
    horario: "19:30hs", lugar: "Mario Bravo 559",
    descripcion: "",
    inscripcion: null,
    flyer: "", hubRequired: false,
  },
  {
    fecha: "2026-08-29", nombre: "Now NextGen", tipo: "Noche de adoración", comunidad: "SADDLE",
    horario: "19:30hs", lugar: "Mario Bravo 559",
    descripcion: "¡Vení a cantar y a pasar un tiempo para escuchar a Dios juntos, como una gran familia!",
    inscripcion: false,
    flyer: "flyers/now-nextgen.jpg", hubRequired: false,
  },
  {
    // Aca va solo lo que se necesita para decidir si vas. Todo el detalle
    // —que incluye el costo, datos de salud, contacto de emergencia, que la
    // seña no se devuelve— esta en el formulario, y repetirlo en la pantalla
    // era hacerle leer dos veces lo mismo a la misma persona.
    //
    // Sin contacto a proposito: tenia el celular de Ceci y la consulta va por
    // el formulario.
    fecha: "2026-09-04", fechaFin: "2026-09-06",
    nombre: "Campamento Jóvenes 18-35", tipo: "Campamento", comunidad: "JOVENES",
    horario: "Arranca el viernes a la tarde",
    lugar: "Predio CICE, Pilar",
    descripcion: "Estamos expectantes de ver lo que Dios va a hacer en esta nueva edición campamentera. Si es la primera vez que te sumás, nos alegramos un montón.",
    costo: "$110.000 hasta el 31 de agosto, después $120.000. Seña de $20.000 para reservar tu lugar.",
    inscripcion: "https://forms.gle/hp7CezkTay3jArgt6",
    flyer: "flyers/campamento-jovenes.png", hubRequired: false,
  },
  {
    // Sin contacto a proposito. Tenia el WhatsApp de Paola, sacado de
    // COMUNIDADES_LINKS, y lo sacamos: nadie confirmo que ella quiera que su
    // numero este en la pantalla del hall. La inscripcion va por el
    // formulario, que para esto alcanza.
    //
    // PENDIENTE para el inventario: preguntarle a Paola si quiere que pongamos
    // el link del grupo de WhatsApp de GAM, asi la gente se suma sola.
    fecha: "2026-09-05",
    nombre: "Merienda de GAM", tipo: "Merienda", comunidad: "GAM",
    horario: "16:00 a 18:00hs", lugar: "Mario Bravo 559",
    descripcion: "Una tarde pre primavera para los +55. Vení con muchas ganas de divertirte y jugar: los vamos a estar esperando.",
    inscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSduYq7BzN-S_VTy2Yf1zeZGqR3PGdmJcAWnLQDItPRUI2tJnA/viewform",
    flyer: "flyers/merienda-gam.jpg", hubRequired: false,
  },
  {
    // Es la fecha concreta del paso que PASOS_NUEVO describe como "primer
    // domingo de cada mes": el 6 de septiembre cae primer domingo. Los dos
    // conviven a proposito. En "Soy nuevo" se explica que existe todos los
    // meses, y aca aparece la del mes que viene con su flyer.
    //
    // OJO: la descripcion la escribi yo, no vino del equipo. Esta armada con
    // lo que ya decia PASOS_NUEVO ("conocernos las caras", "no hace falta
    // anotarse") y con el horario del flyer. Confirmarla con Buenos Aires.
    fecha: "2026-09-06",
    nombre: "Desayuno para Nuevos Amigos", tipo: "Desayuno", comunidad: "SADDLE",
    horario: "10:00hs", lugar: "Mario Bravo 559",
    descripcion: "Un café, algo rico y un rato para conocernos las caras. Si llegaste hace poco, este es el lugar más fácil para empezar: venís, charlás y preguntás lo que quieras. Es a las 10, justo antes de la reunión de las 11.",
    inscripcion: false,
    flyer: "flyers/desayuno-nuevos-amigos.jpg", hubRequired: false,
  },
  // Agregar mas eventos aqui...
];

// --- RECURRENTES ---
const RECURRENTES = [
  {
    nombre: "Bautismos Adultos",
    comunidad: "SADDLE",
    descripcion: "Las fechas se van anunciando. Formulario de inscripción disponible en el Linktree.",
    dia: "A coordinar", lugar: "Mario Bravo 559", horario: "17:00 y 19:00hs",
    contacto: "Ruben Altamirano", metodo: "Linktree", status: "Ongoing"
  },
  {
    nombre: "Bautismos Menores de 18",
    comunidad: "SADDLE",
    descripcion: "Requiere coordinación previa con las responsables de Kids.",
    dia: "A coordinar", lugar: "Mario Bravo 559", horario: "17:00 y 19:00hs",
    contacto: "Geli / Ceci", metodo: "Contacto directo", status: "Ongoing"
  },
  {
    nombre: "Celebremos la Recuperación",
    comunidad: "CR",
    descripcion: "Programa de apoyo basado en los 12 pasos para personas que buscan recuperarse de adicciones y comportamientos compulsivos.",
    dia: "Viernes", lugar: "Mario Bravo 559", horario: "19:00hs",
    contacto: "", metodo: "Asistir presencialmente", status: "Ongoing"
  },
  {
    nombre: "Clases de Piano",
    comunidad: "Arte",
    descripcion: "Coordinar días y horarios con el profesor.",
    dia: "A coordinar", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Fer Codina", metodo: "Formulario Google", status: "Ongoing"
  },
  {
    nombre: "Grupos Pequeños",
    comunidad: "SADDLE",
    descripcion: "Inscripción a través del Linktree para asignación de grupo.",
    dia: "A coordinar", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Ruben Altamirano", metodo: "Linktree", status: "Ongoing"
  },
  {
    nombre: "Oración",
    comunidad: "Worship",
    descripcion: "Juntos en oración. Abierto a toda la comunidad, no requiere inscripción previa.",
    dia: "Jueves", lugar: "Mario Bravo 559", horario: "19:30hs",
    contacto: "Damian Coppola", metodo: "Sin inscripción", status: "Ongoing"
  },
  {
    nombre: "Transformando Calles",
    comunidad: "PEACE",
    descripcion: "Coordinar el lugar y el horario con el responsable.",
    dia: "Viernes", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Gleisner", metodo: "11 2898 2641", status: "Ongoing"
  },
  {
    nombre: "Clases de Guitarra",
    comunidad: "Arte",
    descripcion: "Coordinar días y horarios con el profesor.",
    dia: "A coordinar", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Victor Ariza", metodo: "11 2656 9772", status: "Pausado"
  },
  {
    nombre: "Coro",
    comunidad: "Arte",
    descripcion: "Si te gusta cantar y queres ser parte de algo especial, unite. Presentarse directo, no requiere inscripción.",
    dia: "Lunes", lugar: "Mario Bravo 559", horario: "19:30hs",
    contacto: "Connie Bongarra", metodo: "Presentarse directo", status: "Pausado"
  },
  {
    nombre: "Teatro",
    comunidad: "Arte",
    descripcion: "Coordinar con Silvia para inscripciones e información.",
    dia: "Sábados", lugar: "Mario Bravo 559", horario: "15:00 a 17:30hs",
    contacto: "Silvia M", metodo: "11 5939 6976", status: "Pausado"
  },
  {
    nombre: "Teatro +55",
    comunidad: "GAM",
    descripcion: "Actividad para mayores de 55 años.",
    dia: "Lunes", lugar: "Mario Bravo 559", horario: "18:00hs",
    contacto: "Romina Venegas", metodo: "Consultar", status: "Pausado"
  },
  {
    nombre: "Reinicio",
    comunidad: "C.Esp.",
    descripcion: "Programa de discipulado básico. 12 encuentros uno a uno para cuestionarte, aprender y tomar decisiones.",
    dia: "A coordinar", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Jose Salazar", metodo: "Formulario Google", status: "Pausado"
  },
  {
    nombre: "Fundamentos",
    comunidad: "C.Esp.",
    descripcion: "Discipulado avanzado presencial en grupo. Tres módulos, dos meses cada uno. Los temas no son correlativos.",
    dia: "Sábados", lugar: "Mario Bravo 559", horario: "15:00 a 17:00hs",
    contacto: "Jose Salazar", metodo: "Formulario Google", status: "Pausado"
  },
  {
    nombre: "ECOS (Hospitales)",
    comunidad: "PEACE",
    descripcion: "Visitas a hospitales para bendecir personas en distintas situaciónes.",
    dia: "A coordinar", lugar: "A coordinar", horario: "A coordinar",
    contacto: "Gleisner", metodo: "11 2898 2641", status: "Pausado"
  },
  {
    nombre: "Mayores Amigos",
    comunidad: "PEACE",
    descripcion: "Visita a hospital.",
    dia: "Sábados", lugar: "A coordinar", horario: "09:30hs",
    contacto: "Gleisner", metodo: "11 2898 2641", status: "Pausado"
  },
  {
    nombre: "Entrega de Donaciones",
    comunidad: "PEACE",
    descripcion: "Entrega de cosas para personas en situación de calle.",
    dia: "Miercoles", lugar: "A coordinar", horario: "15:00hs",
    contacto: "Gleisner", metodo: "11 2898 2641", status: "Pausado"
  },
];

// --- COMUNIDADES_LINKS ---
// Cada comunidad muestra los canales que tenga: el canal de WhatsApp, el
// Instagram, o los dos. Un QR por cada uno.
//
// "canal" es el LINK del canal o del grupo, nunca un telefono. Antes este
// campo tenia el numero personal del referente sacado de una planilla
// interna, y eso en la pantalla del hall queda publicado sin que la persona
// lo haya aceptado. Un canal no tiene ese problema: no expone a nadie y no
// hay que volver a cambiarlo cuando el referente cambia.
//
// Lo que este vacio se muestra como hueco marcado. El hueco es el
// recordatorio de a quien falta preguntarle.
const COMUNIDADES_LINKS = [
  {
    nombre: "El Hub",
    rango: "General",
    lider: "Equipo Hub",
    descripcion: "Punto de conexión central de Saddleback Buenos Aires. Linktree con toda la info.",
    color: "#242424",
    icono: "&#127968;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
    linktree: "https://linktr.ee/EL_HUB",
    esHero: true,
  },
  {
    nombre: "Kids",
    rango: "0 a 8 años",
    lider: "Geli",
    descripcion: "Ministerio para los más pequeños de la iglesia.",
    color: "#3d8a5f",
    icono: "&#127880;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "saddlebackkidsbsas",
  },
  {
    nombre: "PreTeens",
    rango: "9 a 12 años",
    lider: "Juan y Andrea",
    descripcion: "Comunidad para preadolescentes.",
    color: "#1f8a7d",
    icono: "&#11088;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
  {
    nombre: "SYM",
    rango: "12 a 17 años",
    lider: "Saulo",
    descripcion: "Comunidad para adolescentes.",
    color: "#14707c",
    icono: "&#9889;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "sym.bsas",
  },
  {
    nombre: "Jóvenes",
    rango: "18 a 25 años",
    lider: "Martin & Vale",
    descripcion: "Comunidad de jóvenes. Se juntan los sábados.",
    color: "#b06a14",
    icono: "&#128293;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
  {
    nombre: "+25",
    rango: "25 a 35 años",
    lider: "???",
    descripcion: "Comunidad de jóvenes adultos. Se juntan los sábados.",
    color: "#c0563a",
    icono: "&#128293;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
  {
    nombre: "Adultos",
    rango: "35 a 55 años",
    lider: "???",
    descripcion: "Comunidad de adultos.",
    color: "#5b6b7a",
    icono: "&#128104;&#8205;&#127979;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
  {
    nombre: "GAM",
    rango: "+55 años",
    lider: "Paola",
    descripcion: "Comunidad para adultos mayores. Desayunos, teatro, encuentros.",
    color: "#6a4a91",
    icono: "&#128156;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
  {
    nombre: "Enlazados",
    rango: "Matrimonios",
    lider: "Pipi",
    descripcion: "Comunidad para matrimonios. Encuentros Refresh y más.",
    color: "#a83c69",
    icono: "&#128141;",
    canal: "",                    // <-- link del canal o grupo de WhatsApp
    instagram: "",                   // <-- Agregar handle de IG
  },
];


// --- GRUPOS PEQUENOS ---
// Sale de COMUNIDADES_LINKS y pasa a tener bloque propio arriba de todo en
// "Encontrar mi comunidad". No es una comunidad mas de la grilla: las otras
// se eligen por edad o etapa —o sos de Kids o sos de GAM, no las dos— y esta
// es transversal, cualquiera entra. Ademas es la que la iglesia empuja.
//
// El modelo es el modulo de Small Groups de saddleback.com: banda con foto,
// el nombre grande y la temporada debajo.
const GRUPOS_PEQUENOS = {
  bajada: "Un grupo se junta una vez por semana, casi siempre en la casa de alguien, para charlar la vida y la fe. Es donde la iglesia deja de ser un lugar al que vas y pasa a ser gente que te conoce.",
  lider: "Ruben",

  // FALTA: las fechas reales de la temporada. Ani las averigua. Mientras
  // esten vacias, la banda muestra el hueco marcado en vez de inventar un
  // periodo: una fecha equivocada es peor que ninguna.
  temporada: { inicio: "", fin: "" },   // ej: "2026-09-12" y "2026-12-13"

  // Los dos caminos, al modelo de "Join a Group" y "Lead a Group" de
  // saddleback.com. Cada uno es una card con foto arriba.
  //
  // Una card sin "link" no se muestra: es lo que mantiene afuera el camino de
  // liderar hasta que alguien confirme que en Buenos Aires existe (implica una
  // capacitacion y nadie dijo que se de aca).
  caminos: [
    {
      titulo: "Sumate a un grupo",
      texto: "La vida es mejor acompañada. Un grupo pequeño es donde la fe se charla de verdad, con gente que se termina conociendo. No importa en qué andás: hay un grupo para vos.",
      boton: "Buscar mi grupo",
      nota: "Escaneá el código y elegí el que te quede cerca",
      link: "https://saddleback.com/groups/find-a-group?campus=5",  // buscador del campus 5, que es Buenos Aires
      foto: "",   // FALTA: una mesa, un living, gente charlando
    },
    {
      titulo: "Liderá un grupo",
      texto: "Liderar no es saber todas las respuestas: es abrir tu casa y hacer las preguntas. Te damos la capacitación y el acompañamiento para que puedas.",
      boton: "Quiero liderar",
      nota: "Escaneá el código con tu celular",
      link: "",   // FALTA CONFIRMAR que este camino exista en Buenos Aires
      foto: "",
    },
  ],
};

// --- SERIES ---
const SERIES = [
  { nombre: "Each Campus Message",          desc: "Cada campus comparte su propio mensaje.", fechaInicio: "2026-01-04", semanas: 1, predicadores: ["LIVE"] },
  { nombre: "Back on Track",                desc: "", fechaInicio: "2026-01-11", semanas: 5, predicadores: ["AW", "WILL", "SEBA", "SW", "LIVE"] },
  { nombre: "Groups Weekend Message",       desc: "Church Together Weekend.", fechaInicio: "2026-02-15", semanas: 1, predicadores: ["LIVE"] },
  { nombre: "Stand Alone — Return Gathering", desc: "", fechaInicio: "2026-02-22", semanas: 1, predicadores: ["LIVE"] },
  { nombre: "Post Return",                  desc: "", fechaInicio: "2026-03-01", semanas: 1, predicadores: ["AW"] },
  { nombre: "Jesús en Movimiento",          desc: "", fechaInicio: "2026-03-08", semanas: 4, predicadores: ["AW", "WILL", "SEBA", "LIVE"] },
  { nombre: "Easter",                       desc: "Mensaje pre-grabado.", fechaInicio: "2026-04-05", semanas: 1, predicadores: ["AW"] },
  { nombre: "Stand Alone",                  desc: "", fechaInicio: "2026-04-12", semanas: 1, predicadores: ["LIVE"] },
  { nombre: "Camino hacia la Paz",          desc: "", fechaInicio: "2026-04-19", semanas: 5, predicadores: ["AW", "WILL", "LIVE", "STACIE", "SEBA"] },
  { nombre: "Get Growing",                  desc: "", fechaInicio: "2026-05-24", semanas: 4, predicadores: ["AW", "LIVE", "WILL", "SEBA"] },
  { nombre: "Jesús en Movimiento 2",        desc: "", fechaInicio: "2026-06-21", semanas: 4, predicadores: ["LIVE", "AW", "WILL", "SEBA"] },
  { nombre: "Off the Shelf",                desc: "", fechaInicio: "2026-07-19", semanas: 4, predicadores: ["LIVE", "ESTEBAN", "WILL", "SEBA"] },
  { nombre: "Relationship Series",          desc: "", fechaInicio: "2026-08-16", semanas: 4, predicadores: [] },
  { nombre: "Small Group Emphasis",         desc: "", fechaInicio: "2026-09-13", semanas: 1, predicadores: [] },
  { nombre: "Stronger Homes",               desc: "", fechaInicio: "2026-09-20", semanas: 4, predicadores: [] },
  { nombre: "Jesús en Movimiento 3",        desc: "", fechaInicio: "2026-10-18", semanas: 5, predicadores: [] },
  { nombre: "Dream Now",                    desc: "", fechaInicio: "2026-11-22", semanas: 1, predicadores: [] },
  { nombre: "Stand Alone",                  desc: "", fechaInicio: "2026-11-29", semanas: 1, predicadores: [] },
  { nombre: "Navidad",                      desc: "", fechaInicio: "2026-12-06", semanas: 3, predicadores: [] },
];

