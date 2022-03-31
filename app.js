

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    app.use(express.static(__dirname+'/assets'))
    res.sendFile(__dirname + '/index.html');
})

app.get('/offline.html', (req, res) => {
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

app.get('/serviceWorker.js', (req, res) => {
  res.sendFile(__dirname + '/serviceWorker.js'); 
})

app.get('/manifest.webmanifest', (req, res) => {
  res.sendFile(__dirname + '/manifest.webmanifest');
})

app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})