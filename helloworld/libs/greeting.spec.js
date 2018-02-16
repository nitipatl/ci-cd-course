import _greeting from './greeting'

describe('Greeting', () => {
  it('show "Hi, Taey"', () => {
      const input = "Taey"
      const expected = "Hi, Taey"
      const actual = _greeting(input)
      expect(actual).toEqual(expected)
  })
  
  it('show "Hello, Anonymous"', () => {
    const input = ""
    const expected = "Hello, Anonymous"
    const actual = _greeting(input)
    expect(actual).toEqual(expected)
  })
})