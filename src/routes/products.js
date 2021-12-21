import { Router } from 'express'
import faker from 'faker'

const router = Router()

const createProducts = (size = 1) => {
  const products = []
  for (let i = 0; i < size; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      stock: 12,
      description: faker.commerce.productDescription(),
      sku: faker.random.alphaNumeric()
    })
  }
  return products
}

router.get('/:num', (req, res) => {
  const { num } = req.params
  const products = createProducts(parseInt(num))
  return res.json(products)
})

export default router
