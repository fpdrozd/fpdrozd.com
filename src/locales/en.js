export default {
  sections: {
    aboutMe: 'About me',
    mySkills: 'My skills',
    myProjects: 'My projects',
    contact: 'Contact'
  },
  aboutMe: {
    bio: 'Hello, my name is Filip. I love web technologies and open source software. My adventure with web development started when I was 13 (4 years ago). Since then I have constantly been learning new things and working to be able to create amazing software. I like discovering new technologies and exploring what has already been created.',
    learnMore: 'Scroll down to learn more about my experience.',
    myGithub: 'My Github'
  },
  mySkills: {
    description: 'Here is the list of technologies and tools that i work with:'
  },
  myProjects: {
    description: 'Check out my portfolio:',
    projectDescriptions: {
      Plant: 'Application that allows you to conveniently plan your time.',
      SocketChat: 'Socket.io based chat application written in Vanilla.js.',
      Perceptron: 'An example of a machine learning perceptron.'
    },
    view: 'View',
    repository: 'Repository'
  },
  contact: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    validation: {
      name: {
        isRequired: 'Name is required',
        isTooShort: 'Minimum length is 3 characters',
        isTooLong: 'Maximum length is 30 characters'
      },
      email: {
        isRequired: 'Email is required',
        mustBeValid: 'Email must be valid'
      },
      message: {
        isRequired: 'Message is required',
        isTooLong: 'Maximum length is 500 characters'
      }
    },
    errorMessage: 'Something went wrong. Please try again.',
    send: 'Send'
  },
  footer: {
    copyright: 'All rights reserved'
  }
};
