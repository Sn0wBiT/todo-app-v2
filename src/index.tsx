import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { App } from './App'
import { mergeStyles } from '@fluentui/react'

mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
    backgroundColor: '#faf9f8'
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
