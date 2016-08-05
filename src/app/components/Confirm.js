import React from 'react'

export default class Confirm extends React.Component {
  render () {
    let ConfirmStyle = {
      width: "100%",
      height: "15%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    let ConfirmButtonStyle = {
      width: "100px",
      height: "40px",
      background: "white",
      border: "2px double #222",
      fontFamily: "Jaldi",
      fontSize: "16px"
    }

    return (
      <footer style={ConfirmStyle}>
        <button onClick={this.props.checkWikiSummary} style={ConfirmButtonStyle}>Check</button>
      </footer>
    )
  }
}