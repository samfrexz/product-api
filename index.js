const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())

const PORT = 3000

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.get('./', (req, res)=> {
  res.send('hello from frontend')
})

app.use('/api/products', require('./routes/api/products'))
app.listen(PORT, ()=> console.log('running'))