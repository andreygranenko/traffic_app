
// needs to be finished
export const noteikumiKeys = {
  '1': 'visparigi_noteikumi',
  '2': 'gaj_un_pas_pienakumi',
  '3': 'transportlidzeklu_vaditaju_pienakumi',
  '4': 'transportlīdzekla_vaditaja_pienakumi_ipašos_gadijumos',
  '5': 'transportlidzekla_vaditaja_riciba_pec_celu_satiksmes_negadijuma',
  '6': '6_celu_satiksmes_regulesana',
  '7': '7_brauksanas_saksana_un_brauksanas_virziena_maina',
  '8': '8_transportlidzeklu_izkartojums_uz_brauktuves',
  '9': '9_brauksanas_atrums_distance_un_intervals',
  '10': '10_apdzisana_samainisana',
  '11': '11_apstasanas_un_stavesana',
  '12': '12_brauksana_krustojumos',
  '12.1': '12.1_regulejami_krustojumi',
  '12.2': '12.2_neregulejami_krustojumi',
  '13': '13_celu_satiksme_dzivojamas_zonas',
  '14': '14_gaj_parej_un_pieturas',
  // finish this

}

export const noteikumiTitles = {
  '1': 'Vispārīgi noteikumi',
  '2': 'Gājēju un pasažieru pienākumi',
  '3': 'Transportlīdzekļu vadītāju pienākumi',
  '4': 'Transportlīdzekļa vadītāja pienākumi īpašos gadījumos',
  '5': 'Transportlīdzekļa vadītāja rīcība pēc ceļu satiksmes negadījuma',
  '6': 'Ceļu satiksmes regulēšana',
  '7': 'Braukšanas sākšana un braukšanas virziena maiņa',
  '8': 'Transportlīdzekļu izkārtojums uz brauktuves',
  '9': 'Braukšanas ātrums, distance un intervāls',
  '10': 'Apdzīšana, samainīšanās ar pretim braucošu transportlīdzekli un apsteigšana',
  '11': 'Apstāšanās un stāvēšana',
  '12': 'Braukšana krustojumos',
  '12.1': 'Regulējami krustojumi',
  '12.2': 'Neregulējami krustojumi',
  '13': 'Ceļu satiksme dzīvojamās zonās',
  '14': 'Gājēju pārejas un pasažieru sabiedrisko transportlīdzekļu pieturas',
  // finish this

}

export const pants = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '12.1',
  '12.2',
  '13',
  '14'
]


export const signKeys = {
  'bridinajuma-zimes': 'first_group',
  'prieksrocibas-zimes': 'second_group',
  'aizlieguma-zimes': 'third_group',
  'rikojuma-zimes': 'fourth_group',
  'noradijuma-zimes': 'fifth_group',
  'servisa-zimes': 'sixth_group',
  'virzienu-raditaji-un-informacijas-zimes': 'seventh_group',
  'papildzimes': 'eighth_group',
}

export const signGroups = [
  'bridinajuma-zimes',
  'prieksrocibas-zimes',
  'aizlieguma-zimes',
  'rikojuma-zimes',
  'noradijuma-zimes',
  'servisa-zimes',
  'virzienu-raditaji-un-informacijas-zimes',
  'papildzimes',
]

export const signGroupName = {
  'bridinajuma-zimes': 'Brīdinājuma zīmes',
  'prieksrocibas-zimes': 'Priekšrocības zīmes',
  'aizlieguma-zimes': 'Aizlieguma zīmes',
  'rikojuma-zimes': 'Rīkojuma zīmes',
  'noradijuma-zimes': 'Norādījuma zīmes',
  'servisa-zimes': 'Servisa zīmes',
  'virzienu-raditaji-un-informacijas-zimes': 'Virzienu rādītāji un informācijas zīmes',
  'papildzimes': 'Papildzīmes',

}


export function getSignType(number) {
  const firstDigit = number.toString()[0];

  switch (firstDigit) {
    case '1':
      return 'Brīdinājuma zīmes';
    case '2':
      return 'Priekšrocības zīmes';
    case '3':
      return 'Aizlieguma zīmes';
    case '4':
      return 'Rīkojuma zīmes';
    case '5':
      return 'Norādījuma zīmes';
    case '6':
      return 'Servisa zīmes';
    case '7':
      return 'Virzienu rādītāji un informācijas zīmes';
    case '8':
      return 'Papildzīmes';
    default:
      return 'Unknown';
  }
}


export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: 'What is the capital of France?',
      answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      id: 3,
      question: 'What is the smallest country in the world?',
      answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
      correctAnswer: 'Vatican City',
    },
    {
      id: 4,
      question: 'What is the most widely spoken language in the world?',
      answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
      correctAnswer: 'Mandarin',
    },
    {
      id: 5,
      question: 'Who is the founder of Microsoft?',
      answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
      correctAnswer: 'Bill Gates',
    },
  ],
};

export const singleSignKeys = {
  'bridinajuma-zimes': 'first_group',
  'prieksrocibas-zimes': 'second_group',
  'aizlieguma-zimes': 'third_group',
  'rikojuma-zimes': 'fourth_group',
  'noradijuma-zimes': 'fifth_group',
  'servisa-zimes': 'sixth_group',
  'virzienu-raditaji-un-informacijas-zimes': 'seventh_group',
  'papildzimes': 'eighth_group',
}