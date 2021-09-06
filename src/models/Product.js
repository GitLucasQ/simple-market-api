import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    brand: String,
    stock: Number,
    imgUrl: String
},
    {
        timestamps: true,
        versionKey: false
    })

export default model('Product', productSchema)