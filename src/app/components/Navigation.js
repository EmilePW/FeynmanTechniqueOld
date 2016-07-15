import React from 'react'
import Logo from './Logo'

export default class Navigation extends React.Component {
  render () {
    let NavigationStyle = {
      width: "100%",
      height: "15%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    return (
      <nav style={NavigationStyle}>
        <Logo />
      </nav>
    )
  }
}