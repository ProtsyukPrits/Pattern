class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  // Створюємо звичайний сімпл, для того щоб користувач який без type автоматично був simple
  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || Membership.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Dima', 'simple'),
  factory.create('Elena', 'premium'),
  factory.create('Vasilisa', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Petr')
]

// Зробимо ітерацію по кожному обєкту

members.forEach(member => {
  member.define()
})

