import React from 'react'
import Content from './Content';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { SearchProvider } from '../Contexts/Search';

function Home() {
  return (
    <>
      <SearchProvider>
        <div className="container-fluid overflow-hidden">
          <div className="row vh-100 overflow-auto">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Content />} />
              <Route exact path="/business" element={<Content category="business" />} />
              <Route exact path="/entertainment" element={<Content category="entertainment" />} />
              <Route exact path="/health" element={<Content category="health" />} />
              <Route exact path="/sports" element={<Content category="sports" />} />
            </Routes>
          </div>
        </div>
      </SearchProvider>
    </>
  )
}

export default Home