import React from 'react'

export default class TopicTitle extends React.Component {
  handleChange (e) {
    this.props.updateTopic(e.target.value)
  }

  render () {
    let TopicTitleStyle = {
      width: '80%',
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: '10px',
      border: 'none',
      borderBottom: '1px solid #ccc',
      outline: 'none',
      fontFamily: 'Lora',
      fontSize: '16px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '5px',
      textIndent: '5px',
      color: '#222'
    }

    return (
      <input onChange={this.handleChange.bind(this)} style={TopicTitleStyle} type='text' placeholder='Topic Title' />
    )
  }
}
