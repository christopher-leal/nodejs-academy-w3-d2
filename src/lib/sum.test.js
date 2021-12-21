import sum from './sum'

describe('My first test with jest', () => {
  it('should be ok', () => {
    expect(1).toBe(1)
  })
})

describe('Sum library', () => {
  it('sum should be defined', () => {
    expect(sum).toBeDefined()
  })

  it('should return the sum of two numbers as number', () => {
    expect(sum(1, 2)).toBe(3)
    expect(typeof sum('1', 2)).toBe('number')
    expect(sum(2)).toBe(2)
  })
})
