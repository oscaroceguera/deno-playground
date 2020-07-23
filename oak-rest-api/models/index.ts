interface User {
  id: string;
  username: string;
}

const users = new Map<string, User>();

users.set('1', {
  id: '1',
  username: 'Oscar Oceguera'
})
users.set('2', {
  id: '2',
  username: 'Carlos Oceguera'
})

interface Message {
  id: string;
  text: string;
  userId: string;
}

const messages = new Map<string, Message>();

messages.set('1', {
  id: '1',
  text: 'hello oscar',
  userId: '1'
})
messages.set('2', {
  id: '2',
  text: 'hello carlos',
  userId: '2'
})

export default {
  users,
  messages
}