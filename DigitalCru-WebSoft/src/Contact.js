import React,{ Component } from 'react';
import 'react-bootstrap'; 
import  './contact.css';
import Map from './Map.js';
class ContactData extends Component {

 
    render(){
        return(
        <div>
         <section className="sec3"></section>
         <br/>
            <div id="contact" class="container-fluid bg-grey">
            
            <h2 class="text-up">CONTACT</h2>
            <div class="row">
              <div class="col-sm-5">
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p><span class="glyphicon glyphicon-map-marker"></span> Pakistan, Lahore</p>
                <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                <p><span class="glyphicon glyphicon-envelope"></span> DigitalCru@gmail.com</p>
              </div>
              <div class="col-sm-7">
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                  </div>
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                  </div>
                </div>
                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                <div class="row">
                  <div class="col-sm-12 form-group">
                    <button class="btn btn-default pull-right" type="submit">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
              <Map />
              </div>
          </div>
         
                    
        // <div  >
        //     <section className="sec3"></section>
        //             <br/>
        //             <section className="sec2">
        //             <form>
        //                 <div className="row">
        //                     <div className="col-md-6 mb-3">
        //                     <label for="validationDefault01">First name</label>
        //                     <input type="text" className="form-control" id="validationDefault01" placeholder="First name"   required />
        //                     </div>
        //                     <div className="col-md-6 mb-3">
        //                     <label for="validationDefault02">Last name</label>
        //                     <input type="text" className="form-control" id="validationDefault02" placeholder="Last name"   required />
        //                     </div>
        //                 </div>
        //                 <div className ="row">
        //                     <div className ="col-md-6 mb-3">
        //                     <label for="validationDefault03">City</label>
        //                     <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
        //                     <div className ="invalid-feedback">
        //                         Please provide a valid city.
        //                     </div>
        //                     </div>
        //                     <div className ="col-md-3 mb-3">
        //                     <label for="validationDefault04">State</label>
        //                     <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
        //                     <div className="invalid-feedback">
        //                         Please provide a valid state.
        //                     </div>
        //                     </div>
        //                     <div className="col-md-3 mb-3">
        //                     <label for="validationDefault05">Address</label>
        //                     <input type="text" className="form-control" id="validationDefault05" placeholder="Address" required />
        //                     <div className="invalid-feedback">
        //                         Please provide a valid zip.
        //                     </div>
        //                     </div>
        //                     <div className="col-md-3 mb-3">
        //                     <label for="validationDefault05">Phone</label>
        //                     <input type="text" className="form-control" id="validationDefault05" placeholder="Number" required />
        //                     <div className="invalid-feedback">
        //                         Please provide a valid zip.
        //                     </div>
        //                     </div>
        //                 </div>

        //                 <button className="btn btn-primary" type="submit">Submit </button>
        //                 </form>
        //             </ section>
  
        
        // </div>
        )
    }
} 

export default ContactData;