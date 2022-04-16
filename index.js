const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
    console.log("ini halaman Homepage")
})

app.get('/game', (req, res) => {
    res.render('game')
    console.log("ini halaman game")
})

app.listen(2000, () => {
    console.log("Server is Running.....")
})
