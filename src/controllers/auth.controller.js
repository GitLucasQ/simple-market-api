import User from '../models/User'
import * as Token from '../utils/Token'

export const signIn = async (req, res) => {
    const userFounded = await User.findOne({ email: req.body.email })

    if (!userFounded) return res.status(400).json('user not found')

    const isPasswordCorrect = await User.validatePassword(req.body.password, userFounded.password)

    if (!isPasswordCorrect) return res.status(401).json('password incorrect')

    const token = Token.createToken(userFounded._id)
    res.json({ token: token })

}

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const userFounded = await User.findOne({ email })

    if (userFounded) {
        res.json('user already exists')
    }
    else {
        const createdUser = new User({
            firstName,
            lastName,
            email,
            password: await User.encryptPassword(password)
        })

        await createdUser.save()

        const token = Token.createToken(createdUser._id)
        res.json({ token: token })
    }

}