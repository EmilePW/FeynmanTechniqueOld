import React from 'react'
import Navigation from './Navigation'
import Pad from './Pad'
import Confirm from './Confirm'

export default class App extends React.Component {
  render () {
    let AppStyle = {
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
        <Navigation />
        <Pad />
        <Confirm />
      </div>
    )
  }
}
