import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/marketstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('DB connection succesfully'))
    .catch(err => {
        console.log(err)
    })