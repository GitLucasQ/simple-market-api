import { Router } from 'express'
import * as productsController from '../controllers/products.controller'
import { validateToken } from '../middlewares'

const router = Router()

router.get('/allProducts', productsController.getAllProducts)
router.get('/findProduct/:productId', productsController.getProductById)
router.get('/findProductsByCategory/:category', productsController.getProductByCategory)
router.post('/createProduct', validateToken, productsController.createProduct)
router.put('/updateProduct/:productId', validateToken, productsController.updateProduct)
router.delete('/deleteProduct/:productId', validateToken, productsController.deleteProduct)
router.get('/getCategories', productsController.getCategories)

export default router;