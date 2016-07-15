import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/components/App'
import getWikiRef from './app/wikipedia'

// Import styles from Sass
require('./styles/main.scss')

ReactDOM.render(<App />, document.getElementById('root'))
