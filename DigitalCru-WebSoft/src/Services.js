import React,{ Component } from 'react';

import  'react-bootstrap';

class ServicesData extends Component{
    render(){
        return(
            <div>
                 <section className="sec5"></section>
                 <br/>
            <div id="services" className="container-fluid text-center">
            <h2>SERVICES</h2>
            <p>A 24/7 seasoned and experienced staff of experts to help you implement your business solutions efficiently and effectively at a cost-effective rate.</p>
            <p><b> DigitalCru</b> assists organizations with an end-to-end solution, offering design and implementation to post-implementation support. With comprehensive domain knowledge of business applications, <b>DigitalCru</b> facilitates effective decision-making and enables customers to meet their business requirements, with a focus on quality, knowledge transfer and process simplification. <b>DigitalCru</b> supports implementation engagements for clients large and small, across a variety of industries.</p>
            <h4>What we offer</h4>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                
                <span className="fa fa-apple logo-small"></span>
                <h4>IOS Based</h4>
                <p>The iOS user interface is based upon direct manipulation, using multi-touch gestures. Interface control elements consist of sliders, switches, and buttons. Interaction with the OS includes gestures such as swipe, tap, pinch, and reverse pinch, all of which have specific definitions within the context of the iOS operating system and its multi-touch interface.      properly use its products.</p>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-heart logo-large"></span>
                <h4>Payroll</h4>
                <p><b>DigitalCru</b> PAYROLL is a Social HR Software that manages everything from Hire to Retire. <b>DigitalCru</b> PAYROLL helps you improve your workplace productivity by offering all HR services under one platform, at the same time giving your employees an opportunity to interact with one another like never before. </p>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-globe logo-earth"></span>
                <br/>
                <h4>Web Based</h4>
                <p><b>DigitalCru</b> are using web technology for easiness of user
                We provide a qualified team of professional and experienced web developers/designers who are all experts in their relevant fields.  We using the latest technologies such as HTML5, CSS3, PHP, Bootstrap and jQuery. Our website can be optimized to allow them to be viewed by the clients.</p>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-leaf logo-green"></span>
                <h4>Point of Sale</h4>
                <p>With <b>DigitalCru</b> ERP POS system You can analyze sales data, figure out how well all the items on your shelves sell, and adjust purchasing levels accordingly. You can maintain a sales history to help adjust your buying decisions for seasonal purchasing trends. You can improve pricing accuracy by integrating bar-code scanners and credit card authorization ability with the POS system.</p>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-certificate logo-sky"></span>
                <h4>CERTIFIED</h4>
                <p>PSEB a subsidiary of the Ministry of Information Technology, has already supported over 120 software companies in becoming ISO certified, and in the current phase, five software companies are being provided assistance in order to be assessed at CMM level-5 as part of Rs 40 million project to assist the Pakistani software industry in moving towards a culture of quality improvement.</p>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-wrench logo-brown"></span>
                <h4>Manufacture</h4>
                <p><b>DigitalCru</b> ERP Software allows manufacturers to plan, execute, and control production. A manufacturing ERP solution provides a competitive advantage, optimum financial management and faster ROI. Explore a solution built for every role, because when people thrive, so does the business.</p>
                </div>
            </div>
            </div>
            </div>

        )
    }
}

export default ServicesData;