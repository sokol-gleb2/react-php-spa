import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './Home'
import Blogs from './Blogs'
import NoPage from './NoPage'

function App() {

    const username = "glebby";

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
