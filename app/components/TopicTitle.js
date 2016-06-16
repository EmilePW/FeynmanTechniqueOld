/*
  Add/Edit title upon clicking
  Save title in the space on enter
*/

import React from 'react'

export default class TopicTitle extends React.Component {
  render () {
    let TopicTitleStyle = {
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    return (
      <input style={TopicTitleStyle} type='text' placeholder='Topic Title' />
    )
  }
}
