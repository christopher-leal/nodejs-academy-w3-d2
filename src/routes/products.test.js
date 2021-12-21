import request from 'supertest'
import app from '../app'

describe('Product routes', () => {
  describe('GET products', () => {
    it('should return json', (done) => {
      request(app)
        .get('/')
        .expect(200, () => done())
    })

    it('should return json', (done) => {
      request(app)
        .get('/products/2')
        .expect(200, response => {
          // todo: create the rest of tests
          done()
        })
    })
  })
})
