const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
    console.log("ini halaman Homepage")
})

app.get('/game', (req, res) => {
    res.render('game')
    console.log("ini halaman game")
})

app.get('/login', (req, res) => {
    res.render('login')
    console.log('Halaman login')
  })

app.post('/login', (req, res) => {
  //  Login Code 
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`)
  console.log('Login sukses')
})

app.listen(2000, () => {
    console.log("Server is Running.....")
})
