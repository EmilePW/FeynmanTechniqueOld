import React from 'react'
import TopicTitle from './TopicTitle'
import Explanation from './Explanation'

export default class Pad extends React.Component {
  render () {
    return (
      <main>
        <TopicTitle />
        <Explanation />
      </main>
    )
  }
}