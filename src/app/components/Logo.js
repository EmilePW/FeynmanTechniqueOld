import React from 'react'

export default class Logo extends React.Component {
  render () {
    let LogoStyle = {
      width: '80%',
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

    let LogoTitleStyle = {
      width: '40%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    let LogoImageStyle = {
      width: '50px',
      height:'50px',
      borderRadius: '100%',
    }

    return (
      <header style={LogoStyle}>
        <h1 style={LogoTitleStyle}>Feynman</h1>
        <img style={LogoImageStyle} src='../../assets/brown-throated-thrush.jpg' alt='Feynman Technique Logo' />
        <h1 style={LogoTitleStyle}>Technique</h1>
      </header>
    )
  }
}