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
      padding: '10px',
      resize: 'none',
      fontFamily: 'Jaldi',
      fontSize: '18px',
      lineHeight: '26px',
      color: '#444'
    }

    return (
      <textarea className='type-2' style={ExplanationStyle} placeholder='Write Your Explanation Here...'>
        
      </textarea>
    )
  }
}