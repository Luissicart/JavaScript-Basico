const persona={
    nombre:"Luis",
    apellido:"Sicart",
    edad:28,
    altura:1.83,
    isDeveloper:true
}
const edad = persona.edad
console.log(edad)
const listaPersonas=[{
    ...persona
},{
    nombre:"Daniel",
    apellido:"Vaca",
    edad:26,
    altura:1.78,
    isDeveloper:false
},{
    nombre:"Miguelin",
    apellido:"Heras",
    edad:21,
    altura:1.70,
    isDeveloper: false
}]
const listaOrdenada=listaPersonas.sort((a,b)=>b.edad - a.edad)
console.log(listaOrdenada)