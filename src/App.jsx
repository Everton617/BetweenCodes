import { useState } from 'react'
import Topbar from './components/topbar'
import Modal from './components/Modal'
import Banner from './components/Banner'
import Footer from './components/Footer'

import './App.css'

function App() {
  

  return (
    <div>
      <Topbar/>
      <Modal/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
