import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaSearch, FaGlobe } from 'react-icons/fa'; // Importing Font Awesome icons
import './Navbar.css'; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update the searchQuery state with current input value
    // Implement dynamic search logic here (e.g., filtering data based on searchQuery)
    console.log("Search query:", event.target.value); // Log the current search query to the console
  };
  
  const handleSearchClick = () => {
    // Implement search action logic here (e.g., perform actual search based on searchQuery)
    console.log("Search button clicked with query:", searchQuery); // Log the search query when search button is clicked
  };
  

  return (
    <div className="navbar-container">
      {/* Main Navbar (Top Layer) */}
      <nav className="navbar navbar-main">
        <div className="logo">
          <Link to="/">Livestock Management</Link>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="search-input" // Add a class name for custom styling
          />
          <button onClick={handleSearchClick}><FaSearch /></button>
        </div>
        <div className="services">
          <Link to="/login"><FaUser className="icon" /></Link>
          <Link to="/notifications"><FaBell className="icon" /></Link>
          <Link to="/language"><FaGlobe className="icon" /></Link>
        </div>
      </nav>

      {/* Services Navbar (Bottom Layer) */}
      <nav className="navbar navbar-services">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/animallist">About Us</Link>
          </li>
          <li>
            <Link to="/healthrecords">Health</Link>
          </li>
          <li>
           <Link to="/SystemSettings">Services</Link>
           
          </li>
          <li>
          <Link to="/BreedingRecords">Breeding</Link>
          
           
          </li>
          <li>
            <Link to="/CustomReports">Reports</Link>
         
            
          </li>
          <li>
          <Link to="/InventoryList">Inventory</Link>
         
          </li>
          <li>
          <Link to="/financialreports">Finance</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
