// Boilerplate code
const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

// Import our controller functions
 //This line imports our controller functions from the controller file, in this case the sendMovies function.
const {sendMovies, updateMovie, createMovie, deleteMovie} = require("./controller.js")

// Endpoints
app.get("/api/movies", sendMovies)
app.put("/api/movies/:id", updateMovie)
app.post("/api/movies", createMovie)
app.delete("/api/movies/:id", deleteMovie)


app.listen(4004, () => console.log("Docked at port 4004"))