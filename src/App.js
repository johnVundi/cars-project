import React from 'react'
import Carform from './components/Carform'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
  return (
    <div className='container is-fluid'>
      <Carform />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App