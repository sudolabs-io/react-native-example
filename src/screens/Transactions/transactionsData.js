const transactions = [
  {
    date: '2020-09-14',
    items: [
      {
        title: 'POTRAVINY MALINA',
        type: 'VE POS nakup',
        amount: '128,00',
        currency: 'EUR',
        isNegative: true
      },
      {
        title: 'Coop Market',
        type: 'VE POS nakup',
        amount: '144,00',
        currency: 'EUR',
        isNegative: true
      },
      {
        title: 'ZELEZIARSTVO',
        type: 'VE POS nakup',
        amount: '128,00',
        currency: 'EUR',
        isNegative: true
      }
    ]
  },
  {
    date: '2020-09-13',
    items: [
      {
        title: 'Jozef Vzorovy',
        type: 'Prijata platba',
        amount: '141,00',
        currency: 'EUR',
        isNegative: false
      },
      {
        title: 'Jana Pekna',
        type: 'Prijata platba',
        amount: '112,00',
        currency: 'EUR',
        isNegative: false
      }
    ]
  },
  {
    date: '2020-09-10',
    items: [
      {
        title: 'Anna Petrovicka',
        type: 'Prijata platba',
        amount: '101,00',
        currency: 'EUR',
        isNegative: false
      }
    ]
  },
  {
    date: '2020-09-08',
    items: [
      {
        title: 'Peter Novak',
        type: 'Prijata platba',
        amount: '178,00',
        currency: 'EUR',
        isNegative: false
      },
      {
        title: 'ZELEZIARSTVO',
        type: 'VE POS nakup',
        amount: '158,00',
        currency: 'EUR',
        isNegative: true
      },
      {
        title: 'Tomas Liptak',
        type: 'Prijata platba',
        amount: '100,00',
        currency: 'EUR',
        isNegative: true
      }
    ]
  }
];

export default transactions;
