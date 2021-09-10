const request = require('supertest')
const app = require('../src/start/app')
const mysql = require('../src/services/infrastructure/dbConnection')

describe('Test pokemon controller', () => {
  afterAll(() => {
    mysql.end()
  })
  test('getAll should return valid items', async () => {
    const response = await request(app).get('/pokemon')
    expect(response.statusCode).toBe(200)
    expect(response.body[0]).toHaveProperty('name')
  })
  test('getOne should return valid items', async () => {
    const response = await request(app).get('/pokemon/11')
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('name')
  })
  test('Insert pokemon should return 201', async () => {
    const body = {
      name: 'squirtle',
    }
    const response = await request(app).post('/pokemon').send(body)
    expect(response.statusCode).toBe(201)
    expect(response.body).toHaveProperty('name')
  })
  test('Update one should return 200 ', async () => {
    const body = {
      name: 'squirtle',
    }
    const response = await request(app).patch('/pokemon/6').send(body)
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('name')
  })
})
