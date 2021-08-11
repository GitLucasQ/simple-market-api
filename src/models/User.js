import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    firstName: String,
    lastName: String,    
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

userSchema.statics.encryptPassword = async (password) => {
    const generetedSalt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, generetedSalt)
}

userSchema.statics.validatePassword = async (password, comparePassword) => {
    return await bcrypt.compare(password, comparePassword)
}



export default model('User', userSchema)