const express = require('express')


const app = express()

const PORT = 3000

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.get('./', (req, res)=> {
  res.json({
    msg: 'route not found; Please use the api/products endpoint'
  })
})

app.use('/api/products', require('./routes/api/products'))
app.listen(PORT, ()=> console.log('running'))