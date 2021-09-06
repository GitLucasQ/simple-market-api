import { Schema, model } from 'mongoose'

const paymentSchema = new Schema({
    userId: String,
    userEmail: String,
    productsList: [{
        productId: String,
        productName: String,
        quantity: Number,
        total: Number
    }],
    paymentMethod: String,
    grandTotal: Number
},
    {
        timestamps: true,
        versionKey: false
    })

export default model('Payment', paymentSchema)