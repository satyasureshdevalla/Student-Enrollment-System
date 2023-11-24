import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/">Courses <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/students">Students </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/admins">Admins </a>
      </li>
      <li className="nav-item">
         <a className="nav-link" href="http://localhost:3000/drops">Drops </a>
      </li>
      <li className="nav-item">
         <a className="nav-link" href="http://localhost:3000/enrolls">Enrolls </a>
      </li>
      <li className="nav-item">
         <a className="nav-link" href="http://localhost:3000/instructors">Instructors </a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar