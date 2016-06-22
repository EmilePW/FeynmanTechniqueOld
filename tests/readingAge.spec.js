import expect from 'expect'
import calculateReadingAge from '../js/readingAge'

describe('readingAge', () => {

  it('should return the correct reading age', () => {
    const actual = calculateReadingAge('The quick brown fox jumps over the lazy, quantum effervescent dog')
    const expected = 7
    expect(actual).toEqual(expected)
  })

  it('should return false if there is no text', () => {
    const actual = calculateReadingAge('')
    const expected = false
    expect(actual).toEqual(expected)
  })
})