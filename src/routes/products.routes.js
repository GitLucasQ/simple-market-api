import { Router } from 'express'
import * as productsController from '../controllers/products.controller'
import { validateToken } from '../middlewares'

const router = Router()

router.get('/allProducts', productsController.getAllProducts)
router.get('/findProduct/:productId', productsController.getProductById)
router.post('/createProduct', validateToken, productsController.createProduct)
router.put('/updateProduct/:productId', validateToken, productsController.updateProduct)
router.delete('/deleteProduct/:productId', validateToken, productsController.deleteProduct)

export default router;