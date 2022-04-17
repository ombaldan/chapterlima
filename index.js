const express = require("express")
const { process_params } = require("express/lib/router")
const app = express()
const posts = require('./db/posts.json')

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
  const {username, password} = req.body

  users.push({
    username,
    password
  })
  res.redirect('/game')
  console.log(users)
})

app.get('/api/v1/posts', (req, res) => {
  res.status(200).send(posts)
})

app.get('/api/v1/posts/:id', (req, res) => {
  const post = posts.find(i => i.id == req.params.id)
  res.status(200).send(post)
})

app.post('/api/v1/posts', (req, res) => {
  const {username, password} = req.body
  console.log(req.body)
  const id = posts[posts.length - 1].id + 1
  const post = {id, username, password}

  posts.push(post)
  res.status(201).send(post)
})

app.listen(2000, () => {
    console.log("Server is Running.....")
})
