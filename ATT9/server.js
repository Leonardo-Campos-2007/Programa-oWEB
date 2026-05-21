const express = require('express')
const app = express()
const port = 3000


const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const db = require('./db');

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
  console.log(`Server funcionando na porta ${port}`)
})

