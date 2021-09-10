const request = require('supertest')
const app = require('../src/start/app')

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/pokemon')
    expect(response.statusCode).toBe(200)
  })
})
