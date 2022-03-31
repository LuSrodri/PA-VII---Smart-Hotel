

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    app.use(express.static(__dirname))
    res.sendFile(__dirname + '/index.html');
})

app.get('/offline.html', (req, res) => {
  app.use(express.static(__dirname))
  res.sendFile(__dirname + '/offline.html');
})

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/css/styles.css');
})

app.get('/scripts.js', (req, res) => {
  res.sendFile(__dirname + '/js/scripts.js');
})

app.get('/logo.png', (req, res) => {
  res.sendFile(__dirname + '/assets/img/logo.png');
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(__dirname + '/service-worker.js'); 
})

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})