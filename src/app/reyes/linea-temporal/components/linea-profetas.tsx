import { useMemo } from "react";

export const LineaProfetasComponent = () => {
  
  const prophets = [
    // {
    //   name: 'Semaías',
    //   key: 'semaias',
    //   prophtised_to: 'Roboám',
    //   start: 0,
    //   time: 0,
    //   bible: '1 Reyes 12:21-24'
    // },
    // {
    //   name: 'Ahías',
    //   key: 'ahias',
    //   prophtised_to: 'Jeroboam I',
    //   start: 0,
    //   time: 22,
    //   bible: '1 Reyes 11:29-39; 14:1-20'
    // },
    // {
    //   name: 'Varón de Dios',
    //   key: 'prophet_1',
    //   prophtised_to: 'Jeroboam',
    //   start: 1,
    //   time: 0,
    //   bible: ''
    // },
    // {
    //   name: 'Elías',
    //   key: 'elias',
    //   prophtised_to: 'Acab, Ocozías',
    //   start: 57,
    //   time: 24,
    //   bible: ''
    // },
    // {
    //   name: 'Eliseo',
    //   key: 'eliseo',
    //   prophtised_to: 'Jorám de Israel, Jehú',
    //   start: 81,
    //   time: 60,
    //   bible: ''
    // },
    // {
    //   name: 'Micaías',
    //   key: '',
    //   prophtised_to: 'Josafat, Acab',
    //   start: 64,
    //   time: 0,
    //   bible: ''
    // },
    // {
    //   name: 'Jehú',
    //   key: 'jehu_prophet',
    //   prophtised_to: 'Baasa, josafat',
    //   start: 24,
    //   time: 0,
    //   bible: ''
    // },
    // {
    //   name: 'Jaziel',
    //   key: '',
    //   prophtised_to: 'Josafat',
    //   start: 67, // ??? Da victoria obre Moab y Amon (2 Cr 20)
    //   time: 0,
    //   bible: ''
    // },
    // {
    //   name: 'Eliezer',
    //   key: 'eliezer_prophet',
    //   prophtised_to: 'Josafat',
    //   start: 81, //????? -> Le dice que las naves a Tarsis se destruirian (2 Cr 20:31-)
    //   time: 0,
    //   bible: ''
    // },

    // {
    //   name: 'Azarías',
    //   key: 'azarias_prophet',
    //   prophtised_to: 'Asa',
    //   start: 20, //??? -> Ayuda contra los etíopes
    //   time: 0,
    //   bible: ''
    // },
    // {
    //   name: 'Hanani',
    //   key: 'hanani_prophet',
    //   prophtised_to: 'Asa',
    //   start: 38, // Reprende por pedir ayuda a Siria
    //   time: 0,
    //   bible: ''
    // },
    
    

    //PRIMER REY 928

    // PROFETAS CANÓNICOS
    {
      name: 'Abdías',
      key: 'abdias_prophet',
      prophtised_to: 'Edom',
      is_major: false,
      start: 75, // 853-841 a.C.
      time: 12,
      bible: '',
      classname: `mt-[calc(75*52px)] pt-[calc(12*52px)]`,
      prophecy: 'Reprende a Edon por su soberbia y por alegrarse de los males de su hermano, Israel; Adevertencia de juicio para ellos.',
    },
    {
      name: 'Joel',
      key: 'joel_prophet',
      prophtised_to: 'Judá y Jerusalen',
      is_major: false,
      start: 103, // 825 a.C. (Joas en Judá)
      time: 0,
      bible: '',
      classname: `mt-[calc(103*52px)] pt-[calc(0*52px)]`,
      prophecy: 'Advierte acerca del día de Jehová, día en el que Dios interviene en la humanidad de forma directa y definitiva, ya sea pra juicio o para bendición, y haciendo tambien alusión al día del juicio final.'
    },
    {
      name: 'Jonás',
      key: 'jonas_prophet',
      prophtised_to: 'Nínive',
      is_major: false,
      start: 135, // 793-753 a.C. - Jeroboam II (Visita a Nínive entre 780 y 750)
      time: 40,
      bible: '',
      classname: `mt-[calc(135*52px)] pt-[calc(40*52px)]`,
      prophecy: 'Anuncia la destrucción de Nínive por sus pecados.'
    },
    {
      name: 'Amos',
      key: 'amos_prophet',
      prophtised_to: 'Israel',
      is_major: false,
      start: 161, // 767-752 a.C. (Jeroboam II y Uzías en Judá)
      time: 15,
      bible: '',
      classname: `mt-[calc(161*52px)] pt-[calc(15*52px)]`,
      prophecy: 'Advierte el juicio que viene de parte de Dios hacia Israel debido a la corrupción social, moral y espiritual en que estaban.'
    },
    {
      name: 'Oseas',
      key: 'oseas_prophet',
      prophtised_to: 'Israel',
      is_major: false,
      start: 162, // 767 - 697 (Dirante ultimo príodo de Jeroboam II) (Uzías, Jotam, Acaz y Ezequías) - Luego de Amos
      time: 70,
      bible: '',
      classname: `mt-[calc(162*52px)] pt-[calc(70*52px)]`,
      prophecy: 'Si bien nombra reyes de Judá, se dirige principalmente a Israel, denunciando los pecados en forma de lamento, y anuncia el inminente juicio de Dios al reino del Norte por la apostacía, aunque también muestra la misericordia y el amor de Dios.' 
    },
    {
      name: 'Miqueas',
      key: 'miqueas_prophet',
      prophtised_to: 'Judá y Samaria',
      is_major: false,
      start: 0,  //Durante 740 y 697 (Pekaia, Peka y Oseas sobre Israel) (Jotam, Acaz y Ezequias en Judá)
      time: 0,
      bible: '',
      classname: `mt-[calc(211*52px)] pt-[calc(43*52px)]`,
      prophecy: 'Advierte acerca de la ira venidera de Dios sobre la nación por causa de sus pecados, injusticia social, violencia, todo esto disfrazado de una aparente religiosidad. También les recuerda la venida del Mesías, que nacería en un lugar humilde y gobernaría con verdad y justicia.'
    },
    {
      name: 'Isaías',
      key: 'isaias_prophet',
      prophtised_to: 'Judá', // Principalmente a Judá aunque tmb se dirige a Israel y otras naciones a las cuales anuncia juicio
      is_major: true,
      start: 222, // 750-680 - Desde muerte de Uzías hasta que fue acerrado por Manasés
      time: 70,
      bible: '',
      classname: `mt-[calc(222*52px)] pt-[calc(70*52px)]`,
      prophecy: 'Si bien se dirige Principalmente a Judá también aplica para Israel, y también advierte a otras naciones del juicio que les sobrevendría. Advierte al pueblo del juicio inminente de Jehová debido a su idolatría y alianzas mundanas, y les recuerda el plan de liberación de Dios a traves de la venida del Medías, primero como siervo sufriente, y luego como el Rey de toda la Tierra.'
    },
    {
      name: 'Nahúm',
      key: 'nahum_prophet',
      prophtised_to: 'Nínive',
      is_major: false,
      start: 274, // 654 - 625
      time: 29,
      bible: '',
      classname: `mt-[calc(274*52px)] pt-[calc(29*52px)]`,
      prophecy: 'Les advierte del jucio de Dios que vendría sobre ellos por su maldad en extremo, perversidad y por su orgullo'
    },
    {
      name: 'Sofonías',
      key: 'sofonias_prophet',
      prophtised_to: 'Judá',
      is_major: false,
      start: 0, // 640 - 612 (Durante reinado de Josias hasta caida de Nínive)
      time: 28,
      bible: '',
      classname: `mt-[calc(339*52px)] pt-[calc(28*52px)]`,
      prophecy: 'Condena al pueblo por todos sus pecados, idolatría, advierte el gran día de la ira de Dios y hace un llamado urgente al arrepentimiento'
    },

    {
      name: 'Jeremías',
      key: 'jeremias_prophet',
      prophtised_to: 'Israel',
      is_major: true,
      start: 0, // Nacio en el 647; A los 20 años comenzó (Año 13 de Josías), ejerció durante 40 años. 
      time: 40,
      bible: '',
      classname: `mt-[calc(353*52px)] pt-[calc(40*52px)]`,
      prophecy: 'Les da las últimas advertencias de Dios al pueblo ante su rechazo a la ley y a los profetas, ya que la destruccipon de la nación y el desastre espiritual ya estaban llegando. Les decía que se sometan a Babilonia para salvar a la nacion de una destrucción completa'
    },
    {
      name: 'Habacuc',
      key: 'habacuc_prophet',
      prophtised_to: 'Judá',
      is_major: false,
      start: 0, // Contemporaneo a jeremias y posterios a Sofonias
      time: 0,
      bible: '',
      classname: `mt-[calc(371*52px)] pt-[calc(14*52px)]`,
      prophecy: 'Profetiza el juicio de Dios a Judá por sus pecados y violencia, a través de otras naciones. A todo esto, el profeta hace énfasis en la santidad de Dios.'
    },
    {
      name: 'Ezequiel',
      key: 'ezequiel_prophet',
      prophtised_to: 'Judá',
      is_major: true,
      start: 0, //Desde 593 a 571
      time: 0,
      bible: '',
      classname: `mt-[calc(375*52px)] pt-[calc(22*52px)]`,
      prophecy: 'Ezequiel se centra en la destrucción de Jerusalén. Antes de la misma, llama al arrepentimiento, y los amonesta por buscar ayuda en las naciones extrangeras, como lo estaban haciendo con Egipto. Luego de la destrucción de Jerusalén, el profeta se encarga de consolar a los judíos desterrados, recordando las promesas de rescate y restauración del pueblo, y los anima, buscando también de esta forma, evitar que, con la prosperidad de Babilonia, se olviden de Jerusalén'
    },
    {
      name: 'Daniel',
      key: 'daniel_prophet',
      prophtised_to: 'Pueblo de Israel en el cautiverio',
      is_major: true,
      start: 0, // Entre gobiernos de Nabucodonosor y Ciro (605 - 530)
      time: 75,
      bible: '',
      classname: `mt-[calc(376*52px)] pt-[calc(75*52px)]`,
      prophecy: 'Este libro es denominado apocalíptico por el contenido que tiene. Declara la soberanía de Dios y profetiaza cuatro reinos mundiales antes de que el reino de Dios se establezca de forma permantente bajo el Mesías.'
    },
    {
      name: 'Esdras',
      key: '',
      prophtised_to: '',
      is_major: false,
      start: 0, // 538 - 430
      time: 0,
      bible: '',
      classname: `mt-[calc(463*52px)] pt-[calc(108*52px)]`,
      prophecy: 'Esdrás se concentró en una reforma y renovación espiritual en el pueblo, siguiendo tres ideas principales: el pueblo escogido, la Ley y el Templo.'
    },
    {
      name: 'Zacarias',
      key: 'zacarias_prophet',
      prophtised_to: 'Pueblo de Israel',
      is_major: false,
      start: 0, // 520 - 480
      time: 0,
      bible: '',
      classname: `mt-[calc(481*52px)] pt-[calc(521*52px)]`,
      prophecy: 'Consolaba y animaba al pueblo de Dios que aún estaba sufriendo, mostrando las bendiciones de Dios, pero siempre recordando que para obtenerla es necesario el arrepentimiento y uana vida santa'
    },
    {
      name: 'Hageo',
      key: 'hageo_prophet',
      prophtised_to: 'Pueblo de Israel',
      is_major: false,
      start: 0, // 520-505
      time: 0,
      bible: '',
      classname: `mt-[calc(481.3*52px)] pt-[calc(497*52px)]`,
      prophecy: 'Exorta al pueblo, al gobernador Zorobabel y al sumo sacerdote, Jesúa, para que completen la reconstrucción del templo, proyecto que fue abandonado por la oposicion de los pueblos enemigos'
    },
    {
      name: 'Ester',
      key: 'ester',
      prophtised_to: '',
      is_major: false,
      start: 0, // 483-473
      time: 0,
      bible: '',
      classname: `mt-[calc(531*52px)] pt-[calc(541*52px)]`,
      prophecy: 'Este libro relata como la coronada como reina, Ester, obedeciendo el consejo de su tio Mardoqueo, consigue librar al pueblo hebreo de lo que sería su fin, anulando el drecreto real que lanzó Aman.'
    },
    {
      name: 'Nehemías',
      key: 'nehemias',
      prophtised_to: '',
      is_major: false,
      start: 0, // 444-418
      time: 0,
      bible: '',
      classname: `mt-[calc(537*52px)] pt-[calc(537*52px)]`,
      prophecy: 'Nehemías fue escogido para proteger a los judíos que habían vuelto a su tierra y para finalizar las obras en Jerusalén, muros y puertas de la ciudad'
    },
    {
      name: 'Malaquías',
      key: 'malaquias_prophet',
      prophtised_to: 'Pueblo de Dios',
      is_major: false,
      start: 0, // 433-432
      time: 0,
      bible: '',
      classname: `mt-[calc(548*52px)] pt-[calc(550*52px)]`,
      prophecy: 'Reprende al pueblo y a los sacerdotes por sus pecados; estaban volviendo a cometer los mismos pecados que los había llevado a terminar cautivos y con la ciudad destruida. Denuncia fuertemente a aqueññps que trataban el templo y las cosas del Espíritu con indiferencia y descuido. Era un creformador valiente de hablaba en contra del pecado firmemente, sin miedo.'
    },
  ]

  // const prophets_formatted = useMemo(() => {
  //   return prophets.map((item) => {
  //     return {
  //       ...item,
  //       classname: `mt-[calc(${item.start}*52px)] pt-[calc(${item.time}*52px)]`
  //     }
  //   })
  // }, [prophets])

  return (
    <div className="w-full px-2">
      <h3 className="text-center text-gray-700 py-4">Profetas</h3>
      <div className="prophets flex justify-around">
        {prophets.map((item) => (
          <div className={`w-[6px] rounded-2 h-1 ${item.classname} ${item.is_major ? 'bg-rose-400' : 'bg-cyan-400'} item-${item.key} relative`} key={`prophet-item-${item.key}`}>
            <div className="absolute top-[-12px] left-[-3px] flex items-center">
              <div className={`h-3 w-3 ${item.is_major ? 'bg-rose-700' : 'bg-cyan-700'} rounded-md mr-2`}></div>
              <p className={`text-base font-bold ${item.is_major ? 'text-rose-700' : 'text-cyan-700'}`}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 