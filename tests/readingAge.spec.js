import expect from 'expect'
import readingAge from '../readingAge/readingAge'

describe('readingAge', () => {

  it('should return the correct reading age', () => {
    const actual = readingAge('The quick brown fox jumps over the lazy, quantum effervescent dog')
    const expected = 13
    expect(actual).toEqual(expected)
  })

  it('should return false if there is no text', () => {
    const actual = readingAge('')
    const expected = false
    expect(actual).toEqual(expected)
  })
})
