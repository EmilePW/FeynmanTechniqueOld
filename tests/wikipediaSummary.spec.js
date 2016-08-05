import expect from 'expect'
import getWikiSummary from '../src/app/wikipediaSummary'

describe('getWikiSummary', () => {
  it('should get the correct summary for quantum mechanics', () => {
    const actual = getWikiSummary('quantum mechanics', (summary) => { done(); return summary })
    const expected = 'Quantum mechanics (QM) is the part of physics that tells us how the things that make up atoms work. QM also tells us how electromagnetic waves like light work. QM is a mathematical framework (rules written in math) for much of modern physics and chemistry. Quantum mechanics helps us make sense of the smallest things in nature like protons, neutrons and electrons. Complex mathematics is used to study subatomic particles and electromagnetic waves because they act in very strange ways. Quantum mechanics is important to physics and chemistry. Quantum is a Latin word that means \'how much\'. So a quantum of energy is a specific amount of energy. Light sources such as candles or lasers shoot out (or "emit") light in bits called photons. Photons are like packets. Each one has a certain little bit of energy.'
    expect(actual).toEqual(expected)
  })

  it('should return the correct error message for a non-existent topic', () => {
    const actual = getWikiSummary('gluten free bonobos', (summary) => summary)
    const expected = 'Topic not found in wikipedia, check the spelling, otherwise it doesn\'t exist'
    expect(actual).toEqual(expected)
  })
})
