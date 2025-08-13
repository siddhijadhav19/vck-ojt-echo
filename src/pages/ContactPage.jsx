

const ContactPage = () => {
  return(
    <div className="main-container">
    <div className="page-container" style={{overflow:"auto"}}>
    
       
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        
          <h2>General Enquiries</h2>
          <p>
            <b>Vivekanand College Main Campus</b><br/>
           2130, E Ward, Tarabai Park, Kolhapur, <br/> Maharashtra 400071
             <br/>India</p>
          <p>Phone: **+91 12345 67890**<br/>
             Email: **info@vivekanandcollege.edu**<br/>
             Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        
          <h2>Admissions Office</h2>
          <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
             Phone: +91 98765 43210<br/>
             Email: admissions@vivekanandcollege.edu</p>
       
          <h2>Student Support Services</h2>
          <p>For current student support, academic advising, or general assistance:<br/>
             Phone: +91 87654 32109<br/>
             Email: studentsupport@vivekanandcollege.edu</p><br/>
       
          <h2>Find Us on the Map</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.290515316619!2d74.2386097!3d16.7123502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100664ad0e191%3A0x4b2af9253659bbec!2sVivekanand%20College!5e0!3m2!1sen!2sin!4v1754661888021!5m2!1sen!2sin" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">

          </iframe>

        
          <h2>Send Us a Message</h2>
           <form className="contact-form">
             Name:<input type="text" placeholder="Your Name" name="name" required /><br/>
            Email: <input type="email" placeholder="Your Email" name="email" required /><br/>
            Subject: <input type="text" placeholder="Subject" name="subject" /><br/>
             Message:<input type="text" placeholder="Your Message" name="message" required></input><br/>
             <button type="submit">Send Message</button>
          </form>
        
  
     
    </div>
    </div>
   
  )
}
export default ContactPage;