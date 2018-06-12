import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
            
            <div>
                <footer id="myFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 myCols">
                                <h5>Get started</h5>
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>Sign up</a></li>
                                    <li><a>Downloads</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 myCols">
                                <h5>About us</h5>
                                <ul>
                                    <li><a>Company Information</a></li>
                                    <li><a>Contact us</a></li>
                                    <li><a>Reviews</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 myCols">
                                <h5>Support</h5>
                                <ul>
                                    <li><a>FAQ</a></li>
                                    <li><a>Help desk</a></li>
                                    <li><a>Forums</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 myCols">
                                <h5>Legal</h5>
                                <ul>
                                    <li><a>Terms of Service</a></li>
                                    <li><a>Terms of Use</a></li>
                                    <li><a>Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed" /> 
                    </div>
                    <div className="social-networks">
                        <a className="twitter"><i className="fa fa-twitter"></i></a>
                        <a className="facebook"><i className="fa fa-facebook-official"></i></a>
                        <a className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2018 DigitalCru </p>
                    </div>
                </footer>
            </div>
            </div>
           
        )
    }
}

export default Footer;