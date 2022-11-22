const express = require('express')
const products = require('../../Products')

const router = express.Router()


// get all products
router.get('/', (req, res)=> {
  res.json({msg: 'products loaded successfully', products})
})

// get single product
router.get('/:id', (req, res)=> {
  const foundProduct = products.some(product => product.id === parseInt(req.params.id))
  foundProduct ? res.json({msg: 'product loaded successfully', products: products.filter(product => product.id === parseInt(req.params.id))}) : res.json({msg: `product with the id of ${req.params.id} not found`})
})

// delete product
router.delete('/:id', (req, res)=> {
  const foundProduct = products.some(product => product.id === parseInt(req.params.id))
  foundProduct ? res.json({
    msg: `product deleted successfully`,
    products: products.filter(product => {
      product.id !== parseInt(req.params.id)
    })
  }) : res.status(400).json({
    msg: `product not found`
  })
})

module.exports = router;