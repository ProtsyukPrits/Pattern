// adapter призначений для того щоб вбудувати новий код не ламаючи старого!
// Або вбудувати старий інтерфейс в новий не ламаючи додатку



class OldCalc {
  operatins(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 -t2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operatins(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1,t2)
      case 'sub': return this.calc.sub(t1,t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operatins(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.operatins(25, 10, 'sub'))