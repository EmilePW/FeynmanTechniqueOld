import React from 'react'
import Navigation from './Navigation'
import Pad from './Pad'
import Confirm from './Confirm'
import Analysis from './Analysis'
import calculateReadingAge from '../../js/readingAge'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      topic: '',
      explanation: ''
    }

    this.updateTopic = this.updateTopic.bind(this)
    this.updateExplanation = this.updateExplanation.bind(this)
    this.getReadingAge = this.getReadingAge.bind(this)
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

  getReadingAge () {
    let explanation = this.state.explanation
    return calculateReadingAge(explanation)
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
          <Confirm theState={this.state} />
        </main>
        <Analysis readingAge={this.getReadingAge} />
      </div>
    )
  }
}
