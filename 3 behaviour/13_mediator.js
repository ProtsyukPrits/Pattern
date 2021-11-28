// Mediator - робить тісну комунікацію між обєктами різних типів

class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(massage, to) {
    this.room.send(massage, this, to)
  }

  receive(massage, from) {
    console.log(`${from.name} => ${this.name}: ${massage}`)
  }
}


class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }


  send(massage, from, to) {
    if (to) {
      to.receive(massage, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(massage, from)
        }
      })
    }
  }
}

const dima = new User('Dima')
const elena = new User('Elena')
const igor = new User('Igor')

const room = new ChatRoom()

room.register(dima)
room.register(elena)
room.register(igor)

dima.send('Hello!', elena)
elena.send('Hello hello', dima)
igor.send('Vsem privet')