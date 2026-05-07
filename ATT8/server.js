const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', (req, res) => {
 // res.send('Hello World!')
 res.sendFile(__dirname + '/public/index.html');
})

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html');
})

app.post('/contato', (req, res) => {
    const {nome, email} = req.body;
    res.send('Dados recebidos com sucesso! ' + nome + ' - ' + email);
})

app.get('/sobre/:id', (req, res) => {
  res.send(`Meu nome é ${req.params.id}`)
})

app.get('/sobre/paocomacai', (req, res) => {
  res.send('Pão com Açaí')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
