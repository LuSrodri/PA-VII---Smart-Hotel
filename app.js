

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    app.use(express.static(__dirname))
    res.sendFile(__dirname + '/index.html');
})

app.get('/offline', (req, res) => {
  app.use(express.static(__dirname))
  res.sendFile(__dirname + '/offline.html');
})

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})