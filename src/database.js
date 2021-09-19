import mongoose from 'mongoose'
import { URL_DATABASE } from './config'

mongoose.connect(URL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('DB connection succesfully'))
    .catch(err => {
        console.log(err)
    })