//  Визначає скелет майбутнього алгоритму, делигує створення конкретного функціоналу в дочірні класи
//  Оприділяє конкретну структуру, а дочірні класи функціонал


class Employes {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  
  
  work(){
    return `${this.name} выполняет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Developer extends Employes {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс создания программ'
  }
}

class Tester extends Employes {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс тестирования'
  }
}

const dev = new Developer('Dima', 10000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Victoria', 9000)
console.log(tester.getPaid())
console.log(tester.work())