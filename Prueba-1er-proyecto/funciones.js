function devuelveTrue(){
    return true 
}
console.log(devuelveTrue())

async function voyConRetraso() {
    return setTimeout(() => console.log("Hola, llego tarde como siempre"), 5000)
}
console.log(voyConRetraso())

function* idPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
console.log(idPares().value)