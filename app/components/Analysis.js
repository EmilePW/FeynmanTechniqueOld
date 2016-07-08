import React from 'react'

export default class Analysis extends React.Component {
  render () {
    let AnalysisStyle = {
      width: '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }

    let HeadingStyle = {
      padding: '50px',
      fontFamily: 'Lora',
      fontSize: '18px',
      lineHeight: '60px',
      textTransform: 'uppercase',
      letterSpacing: '5px'
    }

    let ReadingAgeStyle = {
      padding: '20px',
      fontFamily: 'Jaldi',
      fontSize: '50px'
    }

    let readingAge = this.props.readingAge
    
    return (
      <section style={AnalysisStyle}>
        <h3 style={HeadingStyle}>Reading Age</h3>
        <h1 style={ReadingAgeStyle}>{readingAge}</h1>
        <p>
          {this.props.wikiArticle}
        </p>
      </section>
    )
  }
}