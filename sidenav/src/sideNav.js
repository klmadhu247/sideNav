import React, { useState } from "react";
import cn from './assets/cn.png';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import './sidenav.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home';
import Team from "./components/team";
import Projects from "./components/projects";
import Calendar from "./components/calendar";
import Documents from "./components/documents";

function SideNav() {
  const [clicked, setClicked] = useState(false);

  const handleHamburger = () => {
    setClicked(!clicked);
  }

  const handleClose = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      {!clicked && <div><i className="fa fa-bars" onClick={handleHamburger}></i></div>}

      <aside className={clicked ? "sidebar__Items" : "menulist_closed"}>
        <img src={cn} alt="Logo" />

        <Router>
          <div><i className="fa fa-times" onClick={handleClose}></i></div>

          <ul className={clicked ? "list_Items" : "menulist_closed"}>
            <li className="list_Items">
              <Link to='/'>
                <FaHome /> Home
              </Link>
            </li>
            <li className="list_Items">
              <Link to='/team'>
                <MdPeople /> Team
              </Link>
            </li>
            <li className="list_Items">
              <Link to='/projects'>
                <FaFolderOpen /> Projects
              </Link>
            </li>
            <li className="list_Items">
              <Link to='/calendar'>
                <FaCalendarDays /> Calendar
              </Link>
            </li>
            <li className="list_Items">
              <Link to='/documents'>
                <IoDocuments /> Documents
              </Link>
            </li>
          </ul>

          <div className={clicked ? "social" : "menulist_closed"}>
            <ul className="social">
              <li className="social-logo">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="social-logo">
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="social-logo">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li className="social-logo">
                <a href="#"><i className="fab fa-behance"></i></a>
              </li>
            </ul>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </Router>
      </aside>
    </div>
  );
}

export default SideNav;
