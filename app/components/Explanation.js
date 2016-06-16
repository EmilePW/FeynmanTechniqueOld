import React from 'react'

export default class Explanation extends React.Component {
  render () {
    let ExplanationStyle = {
      width: "100%",
      height: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    return (
      <textarea style={ExplanationStyle} placeholder="Write Your Explanation Here...">
        
      </textarea>
    )
  }
}