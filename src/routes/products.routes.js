import { Router } from 'express'
import * as productsController from '../controllers/products.controller'

const router = Router()

router.get('/allProducts', productsController.getAllProducts)
router.get('/findProduct/:productId', productsController.getProductById)
router.post('/createProduct', productsController.createProduct)
router.put('/updateProduct/:productId', productsController.updateProduct)
router.delete('/deleteProduct/:productId', productsController.deleteProduct)

export default router;