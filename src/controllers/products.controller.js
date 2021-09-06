import Product from '../models/Product'

export const getAllProducts = async (req, res) => {
    const listOfProducts = await Product.find()
    res.status(200).json(listOfProducts)
}

export const getProductById = async (req, res) => {
    const findedProduct = await Product.findById(req.params.productId)
    res.json(findedProduct)
}

export const getProductByCategory = async (req, res) => {
    const findedProducts = await Product.find({ 'category': req.params.category })
    res.json(findedProducts)
}

export const createProduct = async (req, res) => {
    const { name, price, category, brand, stock, imgUrl } = req.body
    const createdProduct = await new Product({
        name,
        price,
        category,
        brand,
        stock,
        imgUrl
    }).save()

    res.status(201).json(createdProduct)
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json('product deleted')
}

export const getCategories = async (req, res) => {
    const categories = await Product.distinct('category')
    res.status(200).json(categories)
}