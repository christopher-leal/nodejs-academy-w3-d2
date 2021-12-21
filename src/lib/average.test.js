import average from './average'

describe('Average fn', () => {
  it('should be ok', () => {
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
  })

  it('should be zero', () => {
    expect(average()).toBe(0)
    expect(average([])).toBe(0)
  })

  it('should be 2', () => {
    expect(average([1, 2, 3])).toBe(2)
  })

  it('should be 0', () => {
    expect(average([-1, 0, 1])).toBe(0)
  })
})
