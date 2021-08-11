import Product from '../models/Product'

export const getAllProducts = async (req, res) => {
    const listOfProducts = await Product.find()
    res.status(200).json(listOfProducts)
}

export const getProductById = async (req, res) => {
    const findedProduct = await Product.findById(req.params.productId)
    res.json(findedProduct)
}

export const createProduct = async (req, res) => {
    const { name, price, category, subCategory, imgUrl } = req.body
    const createdProduct = await new Product({
        name,
        price,
        category,
        subCategory,
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