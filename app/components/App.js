import React from 'react'
import Navigation from './Navigation'
import Pad from './Pad'
import Confirm from './Confirm'
import Analysis from './Analysis'
import readingAge from '../../readingAge/readingAge'
import getWikiRef from '../wikipedia'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      topic: '',
      explanation: '',
      readingAge: undefined,
      wikiArticle: ''
    }

    this.updateTopic = this.updateTopic.bind(this)
    this.updateExplanation = this.updateExplanation.bind(this)
    this.updateReadingAge = this.updateReadingAge.bind(this)
    // this.updateWikiArticle = this.updateWikiArticle.bind(this)
  }

  updateTopic (topic) {
    this.setState({
      topic: topic
    })
  }

  updateExplanation (explanation) {
    this.setState({
      explanation: explanation
    })
  }

  updateReadingAge () {
    let explanation = this.state.explanation
    let calculatedReadingAge = readingAge(explanation)
    return this.setState({
      readingAge: calculatedReadingAge
    })
  }

  // updateWikiArticle () {
  //   let topic = this.state.topic

  //   getWikiRef(topic)
  //     .then(function (response) {
  //       this.setState({
  //         wikiArticle: response
  //       })
  //     })
  //     .catch(function (err) {
  //       console.log(err)
  //     })
  // }

  render () {
    let AppStyle = {
      width: '100%',
      height: '100%',
      margin: '0 auto',
      display: 'flex'
    }

    let MainStyle = {
      width: '50%',
      height: '100%',
      margin: "0 auto",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    }

    return (
      <div style={AppStyle}>
        <main style={MainStyle}>
          <Navigation />
          <Pad updateTopic={this.updateTopic} updateExplanation={this.updateExplanation} />
          <Confirm updateReadingAge={this.updateReadingAge}  />
        </main>
        <Analysis readingAge={this.state.readingAge} wikiArticle={this.state.wikiArticle} />
      </div>
    )
  }
}
