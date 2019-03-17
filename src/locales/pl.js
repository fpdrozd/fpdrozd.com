export default {
  sections: {
    aboutMe: 'O mnie',
    mySkills: 'Moje umiejętności',
    myProjects: 'Moje projekty',
    contact: 'Kontakt'
  },
  aboutMe: {
    bio: 'Cześć, jestem Filip. Uwielbiam technologie webowe i otwarte oprogramowanie. Moja przygoda z programowaniem webowym zaczęła się gdy miałem 13 lat (4 lata temu). Od tamtej pory ciągle uczę się nowych rzeczy i pracuję, aby móc tworzyć niesamowite oprogramowanie. Lubię odkrywać nowe technologie i zgłębiać informacje na ich temat.',
    learnMore: 'Zjedź na dół aby dowiedzieć się więcej o tym co robię.',
    myGithub: 'Mój Github'
  },
  mySkills: {
    description: 'Lista technologii z którymi pracuję:'
  },
  myProjects: {
    description: 'Zobacz moje portfolio:',
    projectDescriptions: {
      SocketChat: 'Aplikacja czatu oparta na Socket.io, napisana w Vanilla.js.',
      Perceptron: 'Przykład perceptronu uczenia maszynowego.'
    },
    view: 'Pokaż',
    repository: 'Repozytorium'
  },
  contact: {
    name: 'Imię',
    email: 'Email',
    message: 'Wiadomość',
    validation: {
      name: {
        isRequired: 'Imię jest wymagane',
        isTooShort: 'Minimalnie 3 znaki',
        isTooLong: 'Maksymalnie 30 znaków'
      },
      email: {
        isRequired: 'Email jest wymagany',
        mustBeValid: 'Podaj poprawny email'
      },
      message: {
        isRequired: 'Wiadomość jest wymagana',
        isTooLong: 'Maksymalnie 500 znaków'
      }
    },
    errorMessage: 'Coś poszło nie tak. Spróbuj ponownie.',
    send: 'Wyślij'
  },
  footer: {
    copyright: 'Wszelkie prawa zastrzeżone'
  }
};
