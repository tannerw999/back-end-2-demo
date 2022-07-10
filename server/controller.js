// Import movies from json file.
const movies = require("./db.json")
let globalId = 11 

// Export functions to use in main server file.
// Let functions = {}
// Can also look like module.exports = functions
module.exports = {
    sendMovies: (req, res) => {
        res.status(200).send(movies)
    },

    updateMovie: (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body.type)
        // Need to convert ID to be a number type and find the index of matching ID's
        
        // Increment or decrement if it's possible
        const existingId = +req.params.id
        let index = movies.findIndex(movie => movie.id === existingId) //This is to pull the correct index from our id of movies.
        if(req.body.type === "plus"){
            if(movies[index].rating >= 5){
                res.status(400).send("Cannot rate a movie over 5.")
            } else {
                movies[index].rating++
                res.status(200).send(movies)
            }
        } else {
            if(movies[index].rating <= 1){
                res.status(400).send("Cannot rate a movie under 1.")
            } else {
                movies[index].rating--
                res.status(200).send(movies)
            }
        }
    },

    createMovie: (req, res) => {
        const {imageURL, title, rating} = req.body

        let newMovie = {
            title,
            rating,
            imageURL,
            id: globalId
        }

        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },

    deleteMovie: (req, res) => {
        const existingId = +req.params.id

        let index = movies.findIndex(movie => movie.id === existingId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    }
}