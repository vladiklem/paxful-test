// import { TradeItemT } from '../store/trades/reducer.types';

// export const selectTradeList = (mode: string): TradeItemT[] => {
//   const tradeListsDB: any = {
//     buyer: [
//       {
//         id: '1',
//         hash: '45aFD3rR',
//         username: 'Lora',
//         avatarUrl: 'avatar-2.png',
//         paymentMethod: 'Amazon Gift Card',
//         amount: 30,
//         paid: true,
//         newMessages: true,
//         rating: {
//           plus: 27,
//           minus: 5
//         },
//         chatHistory: [
//           {
//             ts: Date.now(),
//             text: 'Lorem ipsum',
//             senderId: '13',
//           }
//         ]
//       },
//       {
//         id: '2',
//         hash: '45ajnK3P',
//         username: 'Lora',
//         avatarUrl: 'avatar-2.png',
//         paymentMethod: 'iTunes Gift Card',
//         amount: 45,
//         paid: false,
//         newMessages: true,
//         rating: {
//           plus: 37,
//           minus: 1
//         },
//         chatHistory: [
//           {
//             ts: Date.now(),
//             text: 'Lorem ipsum',
//             senderId: '13',
//           }
//         ]
//       }
//     ],
//     seller: [
//       {
//         id: '1',
//         hash: '45aFD3rR',
//         username: 'Chanaaar',
//         avatarUrl: 'avatar-1.png',
//         paymentMethod: 'Amazon Gift Card',
//         amount: 30,
//         paid: true,
//         newMessages: true,
//         rating: {
//           plus: 37,
//           minus: 1
//         },
//         chatHistory: [
//           {
//             ts: Date.now(),
//             text: 'Lorem ipsum',
//             senderId: '13',
//           }
//         ]
//       },
//       {
//         id: '2',
//         hash: '45ajnK3P',
//         username: 'Chanaaar',
//         avatarUrl: 'avatar-1.png',
//         paymentMethod: 'iTunes Gift Card',
//         amount: 45,
//         paid: false,
//         newMessages: true,
//         rating: {
//           plus: 37,
//           minus: 1
//         },
//         chatHistory: [
//           {
//             ts: Date.now(),
//             text: 'Lorem ipsum',
//             senderId: '13',
//           }
//         ]
//       }
//     ]
//   };

//   return tradeListsDB[mode];
// }

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
