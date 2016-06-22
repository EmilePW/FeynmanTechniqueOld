import React from 'react'
import TopicTitle from './TopicTitle'
import Explanation from './Explanation'

export default class Pad extends React.Component {
  render () {
    let PadStyle = {
      width: '100%',
      height: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    }

    return (
      <main style={PadStyle}>
        <TopicTitle topic={this.props.topic} />
        <Explanation explanation={this.props.explanation} />
      </main>
    )
  }
}