import React, { Component } from 'react';  
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import HomeData from './Home.js';
import AboutData from './About.js';
import ServicesData from './Services';
 
import './App.css';
import ContactData from './Contact.js';
import PortfolioData from './Portfolio.js';
import PricingData from './Pricing.js';



class Header extends Component {
    render(){
        return (
             
            
            <div> 
            
            <Router>
                <div> 
                            
                     
          
                <nav>
                <a className="brand"><h2>Digitalcru</h2> </a> 
                    <ul>
                     
                     
                    <li><a><Link to="/">Home</Link></a></li>
                  
                            <li><a> <Link to="/about" >ABOUT </Link></a></li>
                            <li><a> <Link to="/services" >SERVICES </Link> </a></li>
                            <li><a> <Link to="/portfolio" >PORTFOLIO</Link> </a></li>
                            <li><a> <Link to="/pricing" >PRICING</Link> </a></li>
                            <li><a> <Link to="contact" >Contact</Link> </a></li>
                        
                    </ul>
                    </nav>
                    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <a class="navbar-brand" >DigitalCru</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                          <a class="nav-item nav-link active" ><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
                          <a class="nav-item nav-link" ><Link to="/about" >ABOUT </Link></a>
                          <a class="nav-item nav-link" ><Link to="/services" >SERVICES </Link></a>
                          <a class="nav-item nav-link" ><Link to="/portfolio" >PORTFOLIO</Link></a>
                          <a class="nav-item nav-link" ><Link to="/pricing" >PRICING</Link></a>
                          <a class="nav-item nav-link" ><Link to="contact" >Contact</Link></a>
                        </div>
                      </div>
                    </nav> */}
                    
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/contact" component={Contact}/>
                     
                </div>
                </Router>
                </div>
                
                   
                 
                 
        )
    }
};
const Home = () => (
    <div>
      <HomeData />
    </div>
  );
  
  const About = () => (
    <div>
      <AboutData />
    </div>
  );
  const Services = () => (
    <div>
       <ServicesData />
    </div>
  );
  const Portfolio = () => (
    <div>
       <PortfolioData />
    </div>
  );
  const Pricing = () => (
    <div>
       <PricingData />
    </div>
  );


  const Contact = () => (
      <div>
         <ContactData />
      </div>
    );
 
  
export default Header;
 