const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(express.static('public'));

const feedbacks = []

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/feedbacks', (req, res)=>{
    res.sendFile(__dirname + '/public/feedbacks.html')
})



app.get('/feedbacks', (req, res) => {
    res.json(feedbacks) // retorna os dados em JSON
})