const request = require('supertest')
const app = require('../src/start/app')
const mysql = require('../src/services/infrastructure/dbConnection')

describe('Test the root path', () => {
  afterAll(() => {
    mysql.end()
  })
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('message')
  })
})
