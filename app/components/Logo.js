import React from 'react'

export default class Logo extends React.Component {
  render () {
    let LogoStyle = {
      width: '70%',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontFamily: 'Lora',
      fontSize: '20px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '5px',
      textIndent: '5px',
      color: '#222'
    }

    let LogoImageStyle = {
      width: '50px',
      height:'50px',
      borderRadius: '100%',
    }

    return (
      <h1 className='type-1' style={LogoStyle}>
        Feynman
        <img style={LogoImageStyle} src='../../assets/brown-throated-thrush.jpg' alt='Feynman Technique Logo' />
        Technique
      </h1>
    )
  }
}