const initialState = function (type) {
  return {
    user: {
      name: "Johan",
      surname: "Testing",
      patronymic: "Alexovich",
      missedMessages:"3"
    },
    access: type,
    news: [
      {
        tittle: 'News Tittle',
        text: 'Германия, Швеция и Польша зеркально ответили на высылку своих дипломатов из России. ' +
          'Соответствующие заявления сделали представители внешнеполитических ведомств трех европейских стран. Напомним, ' +
          'Россия выслала трех дипломатов на прошлой неделе, заявив, что это связано с их участием в несанкционированных ' +
          'акциях в Москве и Санкт-Петербурге 23 января.\n'
      }, {
        tittle: 'News Tittle',
        text: 'Германия, Швеция и Польша зеркально ответили на высылку своих дипломатов из России. ' +
          'Соответствующие заявления сделали представители внешнеполитических ведомств трех европейских стран. Напомним, ' +
          'Россия выслала трех дипломатов на прошлой неделе, заявив, что это связано с их участием в несанкционированных ' +
          'акциях в Москве и Санкт-Петербурге 23 января.\n'
      }
    ],
    timetable: {}
  }
}

export default initialState