const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

const users = []

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
  const {username, password} = req.body

  users.push({
    username,
    password
  })
  res.redirect('/game')
  console.log(users)
})

app.listen(2000, () => {
    console.log("Server is Running.....")
})
