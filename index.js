const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'c.html'));
})

app.get('/b.html', (req, res) => {
    res.sendFile(path.join(__dirname,'b.html'));
  })
app.listen(port, () => {
  console.log('Up')
})