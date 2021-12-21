import request from 'supertest'
import app from '../app'

describe('Product routes', () => {
  describe('GET products', () => {
    it('should return json', (done) => {
      request(app)
        .get('/')
        .expect(200, done)
    })

    it('should return an array with 2 object', (done) => {
      request(app)
        .get('/products/2')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err)
          expect(typeof res.body).toBe('object')
          expect(typeof res.body[0]).toBe('object')
          expect(res.body).toHaveLength(2)
          expect(res.body[0]).toHaveProperty('name')
          done()
        })
    })

    it('should return and empty array', (done) => {
      request(app)
        .get('/products/0')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err)
          expect(typeof res.body).toBe('object')
          expect(res.body).toHaveLength(0)
          done()
        })
    })

    it('should return an empty array with an invalid param', (done) => {
      request(app)
        .get('/products/test')
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err)
          expect(typeof res.body).toBe('object')
          expect(res.body).toHaveLength(0)
          done()
        })
    })
  })
})
