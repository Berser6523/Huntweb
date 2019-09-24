import React from 'react'

import Header from './components/Header'
import Main from './pages/main/index'
import Route from './routes'


import './styles/css/index.css'

export default () => {
  return (
    <div className="App"> 
      <Header />
      <Route />
    </div>
  );
}
