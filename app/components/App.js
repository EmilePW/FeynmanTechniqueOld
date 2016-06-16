import React from 'react'
import Navigation from './Navigation'
import Pad from './Pad'
import Confirm from './Confirm'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <Pad />
        <Confirm />
      </div>
    )
  }
}
