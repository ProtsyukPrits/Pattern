//  Хороший перемикач для обєктів які не ввимагають уваги.

class Ligtht {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Ligtht {
  constructor() {
    super('red')
  }

  sign() {
    return 'STOP'
  }
}

class YellowLight extends Ligtht {
  constructor() {
    super('yellow')
  }
  
  sign() {
    return 'READY'
  }
}

class GreenLight extends Ligtht {
  constructor() {
    super('green')
  }
  
  sign() {
    return 'GO!!!!'
  }
}


class TrafficLight {
  constructor() {
    this.states = [
      new GreenLight(),
      new YellowLight(),
      new RedLight()
    ]
    this.current = this.states[0]
  }
  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()

console.log(traffic.sign())
traffic.change()