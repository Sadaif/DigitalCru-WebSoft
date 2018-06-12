import React,{ Component } from 'react';
 
import  'react-bootstrap';

class PricingData extends Component{
    render(){
        return(
            <div>
                 <section className="sec7"></section>
                 <br/>
            <div id="pricing" className="container-fluid">
            <div className="text-center">
                <h2>Start learning today</h2>
                <br/>
                <h4>Pick your plan</h4>
                <br/>
            </div>
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                    <h1>Basic Plan</h1>
                    </div>
                    <div className="panel-body">
                    <br/>
                    <p>1000+ high quality video courses</p>
                    <p>Interactive tools</p>
                    <p>On-demand learning</p>
                    <p>Supportive community od students</p>
                    <p><strong>Endless</strong> Amet</p>
                    </div>
                    <div className="panel-footer">
                    <h3>$19</h3>
                    <h4>per month</h4>
                    <button className="btn btn-lg">Start your free 7 days trial</button>
                    </div>
                </div>      
                </div>     
                <div className="col-sm-4 col-xs-12">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                    <h1>Pro Plan</h1>
                    </div>
                    <div className="panel-body">
                    <br/>
                    <p>Practice with our live code Challenge Engine</p>
                    <p>Get help in our members only forms</p>
                    <p>Watch talk from industry leaders</p>
                    <p>Enjoy exclusive bonus content</p>
                   <p> Download videos for offline learning</p>
                     
                    </div>
                    <div className="panel-footer">
                    <h3>$29</h3>
                    <h4>per month</h4>
                    <button className="btn btn-lg">Start your free 7 days trial</button>
                    </div>
                </div>      
                </div>       
                <div className="col-sm-4 col-xs-12">
                <div className="panel panel-default text-center">
                    <div className="panel-heading">
                    <h1>DigitalCru  Teams</h1>
                    </div>
                    <div className="panel-body">
                    <br/>
                    <p>Dedicated success team</p>
                    <p>Customized learning tracks to fit your team’s needs</p>
                    <p>Robust reporting on individual success</p>
                    <p>Robust reporting on individual success</p>
                    <p>Download videos for offline learning</p>
                    </div>
                    <div className="panel-footer">
                    <h3>$49</h3>
                    <h4>per month</h4>
                    <button className="btn btn-lg">Get Started</button>
                    </div>
                </div>      
                </div>    
            </div>
            </div>
            </div>
       
        )
    }
}

export default PricingData;