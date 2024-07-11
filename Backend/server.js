const express = require('express')
const cors=require('cors')
const parser=require('body-parser')
const app = express()
const port = 3000

app.use(cors())
app.use(parser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    const data = req.body
    res.send("Hello World")
    console.log(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})