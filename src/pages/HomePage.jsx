// import { href } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
const HomePage = () =>{
    return(
<div>
        <Header/>
           <div id="container" class="scroll-bar">
          <div className="section">
         
        <img alt="Vivekanand College" src="/Images/college-banner.png"  className="banner-image" />
        <div className="overlay-text">
        <h1>Welcome to Vivekanand College!</h1>
<p>Your journey to excellence starts here.</p><br/>
            <Link to="/admission" class="apply-btn"><u>Apply Now!</u></Link>   
            </div>    
            </div>
        
            <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2><hr/>
            <ul>
                <li>
                    <b>Legacy of Excellence:</b> Decades of commitment to quality education.
                </li>
                <li>
                    <b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.
                </li>
                <li>
                    <b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus
                </li>
                <li>
                    <b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.
                </li>
                <li>
                    <b>Strong Placements:</b>Excellent career opportunities with leading companies.
                </li>
            </ul>
            <h2>Campus Life & Facilities</h2>
           <img src="/Images/students-studying.jpeg" alt="Home" style={{width:"400px", height:"350px"}}/><img src="/Images/campus-life.jpg"alt="Home" style={{width:"400px", height:"350px"}}/><br/>
           
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.<br/>Ready to explore our courses?</p>
        
    <div className="h1"><Link to="/courses" class="apply-btn">Explore Courses</Link></div>
        </div>
        
    </div>
    )
}

export default HomePage;