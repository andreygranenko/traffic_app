
// needs to be finished
export const noteikumiKeys = {
  '1': 'visparigi_noteikumi',
  '2': 'gaj_un_pas_pienakumi',
  '3': 'transportlidzeklu_vaditaju_pienakumi',
  '4': 'transportlīdzekla_vaditaja_pienakumi_ipašos_gadijumos',
  '5': 'transportlidzekla_vaditaja_riciba_pec_celu_satiksmes_negadijuma',
  // finish this
  '6': 'celu_kustibas',
  '7': 'celu_kustibas_ierobezosana',
  '8': 'celu_kustibas_regulejums',
  '9': 'celu_kustibas_drosiba',
  '10': 'celu_kustibas_vadiba',
  '11': 'celu_kustibas_regulejums_uz_celu',
  '12': 'celu_kustibas_regulejums_kustiba',
  '13': 'celu_kustibas_regulejums_stavoklis',
  '14': 'celu_kustibas_regulejums_vadiba',

}

export const noteikumiTitles = {
  '1': 'Vispārīgi noteikumi',
  '2': 'Gājēju un pasažieru pienākumi',
  '3': 'Transportlīdzekļu vadītāju pienākumi',
  '4': 'Transportlīdzekļa vadītāja pienākumi īpašos gadījumos',
  '5': 'Transportlīdzekļa vadītāja rīcība pēc ceļu satiksmes negadījuma',
  '6': 'Ceļu kustības',
  '7': 'Ceļu kustības ierobežošana',
  '8': 'Ceļu kustības regulējums',
  '9': 'Ceļu kustības drošība',
  '10': 'Ceļu kustības vadība',
  '11': 'Ceļu kustības regulējums uz ceļu',
  '12': 'Ceļu kustības regulējums kustība',
  '13': 'Ceļu kustības regulējums stāvoklis',
  '14': 'Ceļu kustības regulējums vadība',
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
  '10'
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
