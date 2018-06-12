import React,{ Component } from 'react';
 
import  'react-bootstrap';
 
 
  
class AboutData extends Component {
     
    render(){
        return(
          <div>
            <section className="sec4"></section>
            <br/>
          <div id="about" className="container-fluid">
          <div className="row">
          <div className="col-sm-8">
              <h2>DigitalCru Course Catalog</h2>
              <p>Download a comprehensive list of courses and workshops on topics like APIs, CSS, data analysis, HTML, Java, virtual reality, WordPress, and more.</p>
              <h4>Thanks</h4>
              <button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-8">
              <h2>How your team will learn with DigitalCru</h2>
              <p>Our e-learning platform is designed to help your team develop new skills through interactive, on-demand training. Watch how your team will learn with DigitalCru for Business.</p>
              <h4>Thanks</h4>
              <button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-signal logo"></span>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-globe logo-e"></span>
            </div>
            <div className="col-sm-8">
              <h2>Our Values</h2>
              <h4><strong>MISSION:</strong> Our mission is to exceed our clients’ needs by providing the best possible technology services while meeting their budget and scheduling requirements.</h4>      
              {/* <p><strong>VISION:</strong> Our vision Lorem ipsum..</p> */}
            </div>
          </div>
        </div>
            </div>
    
        )
    }
} 

export default AboutData;