import React from 'react'

export default class Analysis extends React.Component {
  render () {
    let readingAge = this.props.readingAge()
    
    return (
      <section>
        <h1>{readingAge}</h1>
      </section>
    )
  }
}