export const mockedTradePart = {
  buyer: {
    id: '13',
    username: 'Chanaaar',
    avatarUrl: 'avatar-1.png',
    newMessages: false,
    rating: {
      plus: 37,
      minus: 1
    }
  },
  seller: {
    id: '17',
    username: 'Lora',
    avatarUrl: 'avatar-2.png',
    newMessages: false,
    rating: {
      plus: 42,
      minus: 23
    }
  },
  chatHistory: [
    {
      ts: 1589304344472,
      text: 'Lorem ipsum',
      senderId: '13',
    },
    {
      ts: 1589304421972,
      text: 'Awesome text message!',
      senderId: '13'
    },
    {
      ts: 1589304720320,
      text: 'Not as awesome as mine!',
      senderId: '17'
    }
  ]
};
