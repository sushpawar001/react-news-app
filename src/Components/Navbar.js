import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../Contexts/Search';


function Navbar() {
  const { handleSearch } = useContext(SearchContext)
  return (
    <div className="col-sm-3 col-xl-2 px-sm-2 px-0 d-flex sticky-top py-3" style={{ backgroundColor: "#000000" }}>
      <div
        className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">

        <Link to="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 fw-bold">N<span className="d-none d-sm-inline">amaste</span><span style={{ color: "#fca311" }}>B<span className="d-none d-sm-inline">harat</span></span></span></Link>

        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu">
          <li className="nav-item">
            <Link to="/" className="nav-link px-sm-0 px-2 text-white hover-nav-link">
              <i className="fa-solid fa-house fa-lg"></i>
              <span className="ms-3 d-none d-sm-inline">Home</span></Link>
          </li>
          <li>
            <Link to="/business" className="nav-link px-sm-0 px-2 text-white hover-nav-link">
              <i className="fa-solid fa-user-tie fa-lg"></i>
              <span className="ms-3 d-none d-sm-inline">Business</span></Link>
          </li>
          <li>
            <Link to="/entertainment" className="nav-link px-sm-0 px-2 text-white hover-nav-link">
              <i className="fa-solid fa-masks-theater fa-lg"></i>
              <span className="ms-3 d-none d-sm-inline">Entertainment</span></Link>
          </li>
          <li>
            <Link to="/health" className="nav-link px-sm-0 px-2 text-white hover-nav-link">
              <i className="fa-solid fa-heart-pulse fa-lg"></i>
              <span className="ms-3 d-none d-sm-inline">Health</span></Link>
          </li>
          <li>
            <Link to="/sports" className="nav-link px-sm-0 px-2 text-white hover-nav-link">
              <i className="fa-solid fa-table-tennis-paddle-ball fa-lg"></i>
              <span className="ms-3 d-none d-sm-inline">Sports</span></Link>
          </li>
        </ul>
        <form className="d-flex input-group" role="search" onSubmit={(e) => { e.preventDefault(); }}>
          <input className="form-control rounded-0 rounded-start" type="search" onChange={(e) => { handleSearch(e.target.value) }} placeholder="Search" aria-label="Search" id='search' name='search' />
          <button className="btn rounded-0 p-1 rounded-end" style={{ backgroundColor: "#fca311", color: "#000" }} type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

      </div>
    </div>
  )
}

export default Navbar