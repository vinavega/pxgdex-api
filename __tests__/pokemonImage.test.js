const request = require('supertest')
const app = require('../src/start/app')
const mysql = require('../src/services/infrastructure/dbConnection')
const body = require('./pokemonImageUpload.json')

describe('Test pokemonImage controller', () => {
  afterAll(() => {
    mysql.end()
  })
  test('Upload Image should return 201', async () => {
    const response = await request(app).post('/pokemon/image').send(body)
    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('id')
  })
})
