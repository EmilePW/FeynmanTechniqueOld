import React from 'react'

export default class Explanation extends React.Component {
  render () {
    let ExplanationStyle = {
      width: '100%',
      height: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: '30px 15px',
      border: "none",
      outline: "none",
      resize: 'none',
      fontFamily: 'Jaldi',
      fontSize: '18px',
      lineHeight: '26px',
      color: '#444'
    }

    return (
      <textarea style={ExplanationStyle} placeholder='Write your simple explanation here...'>
        
      </textarea>
    )
  }
}