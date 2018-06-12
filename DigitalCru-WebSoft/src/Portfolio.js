import React,{ Component } from 'react';
import T from './2.jpg';
import P from './14.jpg';
import A from './12.jpg';
class PortfolioData extends Component{
    render(){
        return(
            <div>
                 <section className="sec6"></section>
                 <br/>
            <div id="portfolio" className="container-fluid text-center bg-grey">
            <h2>Portfolio</h2><br/>
            <h4>What we have created</h4>
            <br/>
            <div className="row text-center">
                <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={T} alt="Paris" width="400" height="300" />
                    <p><strong>DigitalCru Trade</strong></p>
                    <p>This software is developed specially for those business who want to provide  sale services to their clients. It also helps managing finance related requirements of trading companies. Royaltrade is a complete trading solution for management of retail businesses. It enables the retailer to manage sales, purchases, inventories and accounts as well. It manages sales and optimizes inventory across multiple outlets of a retail organization. With Royaltrade, multi-location retail management becomes as effective and effortless operation.</p>
                    <p><b>Components</b> </p>
                    <li>Month Wise Profit & Loss Comparison (Bar Chart)</li>
                    <li>Month Wise Profit & Loss Comparison (Linear Chart)</li>
                    <li>Bank Balances</li>
                    <li>Payable Balances</li>
                    <li>Receivables Balances</li>
                    <li>Day Wise Expense Analysis (Bar Chart)</li>
                    <li>Day wise Sales and Purchase Analysis (Bar Chart)</li>
                    <li>Month Wise Sales and Purchase Analysis (Bar Chart)</li>
                    <li>Minimum Level Stock List</li>
                    <li>Maximum Level Stock List</li>
                    <li>Top Item Sale</li>
                    <li>Customer Credit Limit Exceed</li>
                     
                </div>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={P} alt="New York" width="450" height="200" />
                    <p><strong>DigitalCru Payroll</strong></p>
                    <p>This software is developed specially for those business who want to provide / sale services to their clients. It also helps managing finance related requirements of trading companies. Royaltrade is a complete trading solution for management of retail businesses. It enables the retailer to manage sales, purchases, inventories and accounts as well. It manages sales and optimizes inventory across multiple outlets of a retail organization. With Royaltrade, multi-location retail management becomes as effective and effortless operation.</p>
                    <p><b>Components</b> </p>
                    <li>Month Wise Profit & Loss Comparison (Bar Chart)</li>
                    <li>Month Wise Profit & Loss Comparison (Linear Chart)</li>
                    <li>Bank Balances</li>
                    <li>Payable Balances</li>
                    <li>Receivables Balances</li>
                    <li>Day Wise Expense Analysis (Bar Chart)</li>
                    <li>Day wise Sales and Purchase Analysis (Bar Chart)</li>
                     
                    <li>Minimum Level Stock List</li>
                    <li>Maximum Level Stock List</li>
                    <li>Top Item Sale</li>
                    <li>Customer Credit Limit Exceed</li>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail">
                    <img src={A} alt="San Francisco" width="400" height="300" />
                    <p><strong>DigitalCru Account</strong></p>
                    <p>This software is developed specially for those business who want to provide / sale services to their clients. It also helps managing finance related requirements of trading companies. Royaltrade is a complete trading solution for management of retail businesses. It enables the retailer to manage sales, purchases, inventories and accounts as well. It manages sales and optimizes inventory across multiple outlets of a retail organization. With Royaltrade, multi-location retail management becomes as effective and effortless operation.</p>
                    <p><b>Components</b> </p>
                    <li>Month Wise Profit & Loss Comparison (Bar Chart)</li>
                    <li>Month Wise Profit & Loss Comparison (Linear Chart)</li>
                    <li>Bank Balances</li>
                    <li>Payable Balances</li>
                    <li>Receivables Balances</li>
                    <li>Day Wise Expense Analysis (Bar Chart)</li>
                    <li>Day wise Sales and Purchase Analysis (Bar Chart)</li>
                    <li>Month Wise Sales and Purchase Analysis (Bar Chart)</li>
                    <li>Minimum Level Stock List</li>
                    <li>Maximum Level Stock List</li>
                    <li>Top Item Sale</li>
                    <li>Customer Credit Limit Exceed</li>
                </div>
                </div>
            </div>

            <h2>What our customers say</h2>
            <p>

             Every year we gather feedback and reviews from the clients we have assisted in their recruitment needs. Overall comments have resulted in 90% of our customers recommending our service.</p>
            <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
               
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

               
                <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
                </div>
                <div className="item">
                    <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
                </div>
                <div className="item">
                    <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                </div>
                </div>

                 
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
            </div>
        )

    }
}

export default PortfolioData;