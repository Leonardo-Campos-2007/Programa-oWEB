const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const feedbacks = []

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/feedbacks', (req, res) => {
    res.sendFile(__dirname + '/public/html/feedbacks.html')
})


app.get('/api/feedbacks', (req, res) => {
    res.json(feedbacks)
})

app.post('/api/feedbacks/:index', (req, res) => {
    const index = req.params.index
    feedbacks.splice(index, 1)
    res.sendStatus(200)
})

app.post('/contato', (req, res) => {

    const nome = req.body.nome
    const feedback = req.body.feedback

    feedbacks.push({
        nome,
        feedback
    })

    console.log(feedbacks)

    res.redirect('/')
})