import { Users } from "./users.js"
import { elements } from "./elements.js"
import { Functions } from "./functions.js"
import { Eventos } from "./events.js"
let listaAnimais = []
let users= [] //criei uma lista de user
const elementos = elements()
const funcoes = Functions({
    elementos,
    users,
    listaAnimais,
})

const user = Users({
    listaAnimais,
    users
})
/*sistema de identificadores criado com sucesso*/ 
users.push(new user.CreateUser('Clara','dededuar',2134))
users.push(new user.CreateUser('Lucas','Tarashi','2907'))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
users.push(new user.CreateUser('Livia','livie',123))
console.log(users.length)

console.log(users[0].identifier)
console.log(users[1].identifier)
console.log(users[2].identifier)
console.log(users[3].identifier)
console.log(users[4].identifier)
console.log(users[5].identifier)
console.log(users[6].identifier)
console.log(users[8].identifier)
console.log(users[9].identifier)
console.log(users[7].identifier)
const events = Eventos({
    elementos,
    funcoes
})

events.fazerLogout()
events.entrarLogin()
events.botaoParaAbrirMenu()





