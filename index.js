// require('dotenv').config()
// const express = require('express')
// const app = express()

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
const notesRouter = require('./controllers/notes')
app.use('/api/notes', notesRouter)

const PORT = process.env.PORT
app.listen(config.PORT, () => {
    logger.info(`Server running on ${PORT}`)
})





//
//
//
// const Note = require('./models/note')
//
// app.use(express.json())
// app.use(express.static('build'))
//
//
// app.get('/', (request, response) => {
//     response.send('<h1>Hello world</h1>')
// })
//
// app.get('/api/notes', (request, response) => {
//     // response.json(notes)
//     Note.find({}).then(notes => {
//         response.json(notes)
//     })
// })
//
// app.get('/api/notes/:id', (request, response, next) => {
//     Note.findById(request.params.id).then(note => {
//         if (note) {
//             response.json(note)
//         } else {
//             response.status(404).end()
//         }
//     })
//         .catch(error => {
//             console.log('inside catch')
//             console.log(error)
//             next(error)})
// })
//
// app.delete('/api/notes/:id', (request, response, next) => {
//     Note.findByIdAndRemove(request.params.id)
//         .then(result => {
//             response.status(204).end()
//         })
//         .catch(error => next(error))
//
// })
//
//
// app.post('/api/notes', (request, response, next) => {
//     const body = request.body
//
//     const note = new Note({
//         content: body.content,
//         important: body.important || false,
//     })
//
//     note.save()
//         .then(savedNote => {
//             response.json(savedNote)
//     })
//         .catch(error => next(error))
// })
//
// app.put('/api/notes/:id', (request, response, next) => {
//     const body = request.body
//
//     const note = {
//         content: body.content,
//         important: body.important
//     }
//
//     Note.findByIdAndUpdate(request.params.id, note, {new: true, runValidators: true, context: 'query'})
//         .then(updatedNote => {
//             response.json(updatedNote)
//         })
//         .catch(error => next(error))
// })
//
//
// const errorHandler = (error, request, response, next) => {
//     console.log('inside errorHandler')
//     console.error(error.message)
//     if (error.name === 'CastError') {
//         return response.status(404).send({error: 'malformatted id'})
//     } else if (error.name === 'ValidationError') {
//         return response.status(400).json({ error: error.message })
//     }
//     next(error)
// }
//
// const unknownEndpoint = (request, response) => {
//     response.status(404).send({error: 'unknown endpoint'})
// }
// app.use(unknownEndpoint)
//
// app.use(errorHandler)
//
