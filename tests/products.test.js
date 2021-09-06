const request = require('supertest')
const app = require('../src/index')

describe('GET /products/allProducts', () => {
    it('respond with a list of all products', (done) => {
        request(app)
            .get('/products/allProducts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /products/findProduct/:productId', () => {
    it('respond with a product', (done) => {
        request(app)
            .get('/products/findProduct/611862844f0ff9414e3c137d')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /products/findProductsByCategory/:category', () => {
    it('respond with a product', (done) => {
        request(app)
            .get('/products/findProductsByCategory/TVs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('POST /products/createProduct', () => {
    it('create a new product', (done) => {
        const product = {
            name: 'name-test',
            price: 1.99,
            category: 'category-test',
            brand: 'brand-test',
            stock: 1,
            imgUrl: 'img-test'
        }

        request(app)
            .post('/products/createProduct')
            .send(product)
            .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTJmYTczYzBkNmExZTA2N2E5NjJhZiIsImlhdCI6MTYzMDA5MjcwMSwiZXhwIjoxNjMwMTc5MTAxfQ.NlooP9Xew35w00H4KVKUIId7i93CLRJBZ7elexWxgKI')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(err => {
                if (err) return done(err);
                return done()
            })
    })
})