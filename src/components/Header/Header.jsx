import {Link} from 'react-router-dom'
import './Header.css'
import { useState } from 'react';
const Header = () =>{
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);// State to control drawer visibility\
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    // Function to close drawer when a link is clicked
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return(
    
        <header className='header1'>  
                <div className='logo'>
                <Link to="/"><h4>Vivekanand College </h4></Link>
                {/* College Name/Logo for desktop & mobile */}
                </div>
               {/* Desktop Navigation */}

            <nav className='navbar desktop-nav'>
            <Link to="/" className='nav'>Home</Link>
           <Link to="/about" className='nav'>About</Link>
            <Link to="/contactus" className='nav'>Contact</Link>
            <Link to="/courses" className='nav'>Courses</Link>
            <Link to="/admission" className='nav'>Admission</Link>
            <a href="/admission" className="apply-btn">Apply Now!</a>   
            </nav>

            {/* Mobile Hamburger Button */}
            <button className="hamburger-menu" onClick={toggleDrawer}>
                <span className='hamburger-icon'></span>
                <span className='hamburger-icon'></span>
                <span className='hamburger-icon'></span>
            </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
            <Link to="/" className='nav' onClick={closeDrawer}>Home</Link>
            <Link to="/about" className='nav' onClick={closeDrawer}>About</Link>
            <Link to="/contactus" className='nav' onClick={closeDrawer}>Contact</Link>
            <Link to="/courses" className='nav' onClick={closeDrawer}>Courses</Link>
            <Link to="/admission" className='apply-btn'onClick={closeDrawer}>Apply Now!</Link>
                
            </nav>
      {/* Overlay when drawer is open */}
       {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}

           </header> 
       
    );
}

export default Header;