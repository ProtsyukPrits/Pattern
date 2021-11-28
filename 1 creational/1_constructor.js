
// Old version

// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }

// Server.prototype.getUrl = function () {
//   return `http://${this.ip}:80`
// }

// New version

class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }


  getUrl = function () {
    return `http://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())