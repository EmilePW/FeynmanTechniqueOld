import React from 'react'
import Navigation from './Navigation'
import Pad from './Pad'
import Confirm from './Confirm'
import Analysis from './Analysis'

import getWikiSummary from '../wikipedia'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      topic: '',
      explanation: '',
      readingAge: undefined,
      wikiSummary: ''
    }

    this.updateTopic = this.updateTopic.bind(this)
    this.updateExplanation = this.updateExplanation.bind(this)
    this.onCheck = this.onCheck.bind(this)
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

  onCheck () {
    // Get Simple English Wikipedia summary of topic
    getWikiSummary(this.state.topic, (summary) => this.setState({ wikiSummary: summary }))
  }

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
          <Confirm checkWikiSummary={this.onCheck} />
        </main>
        <Analysis topic={this.state.topic} wikiSummary={this.state.wikiSummary} />
      </div>
    )
  }
}
