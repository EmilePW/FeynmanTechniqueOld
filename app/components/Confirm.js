import React from 'react'

export default class Confirm extends React.Component {
  render () {
    let ConfirmStyle = {
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    return (
      <footer style={ConfirmStyle}>
        <button>Confirm</button>
      </footer>
    )
  }
}