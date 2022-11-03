const compra = ["Solomillo", "Mostaza", "Barbacoa", "Miel", "Ajo"]

compra.push("Aceite de Girasol")
compra.pop()

const peliculas = [
    {
        titulo: "El Viaje de Chihiro",
        director: "Hayao Miyazaki",
        fecha: new Date(2001, 6, 20)
    },
    {
        titulo: "Saving Private Ryan",
        director: "Steven Spielberg",
        fecha: new Date(1998, 6, 24)
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: new Date(1995, 0, 13)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]