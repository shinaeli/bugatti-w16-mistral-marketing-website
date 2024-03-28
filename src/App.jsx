import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Engine from './components/Engine'
import Interior from './components/Interior'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engine" element={<Engine />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
