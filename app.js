const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello fucking world! Route route');
});

app.get('/uno', (req, res) => {
    res.send('Hello fucking world! Route one');
});

app.get('/prueba', (req, res) => {
  res.send("Hello fucking World! Route Prueba")
})

app.get('/html', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1> Hola mi amor. </h1>
  </body>
  </html>`);
})

app.listen(3000)