import React from 'react'

export default class Analysis extends React.Component {
  render () {
    let AnalysisStyle = {
      width: '50%',
      height: '100%'
    }

    let HeadingStyle = {
      padding: '50px',
      fontFamily: 'Lora',
      fontSize: '18px',
      height: '20%',
      lineHeight: '60px',
      'textAlign': 'center',
      textTransform: 'uppercase',
      letterSpacing: '5px'
    }

    let WikiSummaryStyle = {
      padding: '20px',
      fontFamily: 'Jaldi',
      fontSize: '16px',
      lineHeight: '30px',
      height: '80%',
      margin: '0 auto',
      display: 'flex',
      width: '80%'
    }

    let readingAge = this.props.readingAge
    
    return (
      <section style={AnalysisStyle}>
        <h3 style={HeadingStyle}>What is {this.props.topic}?</h3>
        <p style={WikiSummaryStyle}>
          {this.props.wikiSummary}
        </p>
      </section>
    )
  }
}