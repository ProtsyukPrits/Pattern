// Facade створюється для упрощення, компактності класів

class Complaints {
  constructor() {
    this.complaints = []

  }
  reply(complaint) {

  }
  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
     return `Product: ${id}: ${customer} (${details})`
   }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
     return `Service: ${id}: ${customer} (${details})`
   }
}

// Facade

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint
    
    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }

}

const registry = new ComplaintRegistry()

console.log(registry.register('Dima', 'service', 'недоступен'))
console.log(registry.register('Elena', 'product', 'вылазит ошибка'))
