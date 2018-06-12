import React,{ Component } from 'react';
// import img from './i.png';
// import {Button} from 'react-bootstrap';
import  './home.css';
import  'react-bootstrap';
import CEO from './ceo.jpg'; 
// import Footer from './Footer';
class HomeData extends Component {
    render(){
        return(
             
                   
            <div>
             <div>
              <div>
                <div>
                    <section className="sec1"></section>
                    </div>
               
                
                    <br/>
                     <img className="ceo" src={CEO} alt="ceo"/>
                     <br/>
                     <div>
                     <h1 className="ceo-text">Syed Murtza</h1>
                     <p  className="ceo-text"><b>"Ceo Digitalcru"</b></p>
                     {/* <div className="container-fluid center bg-grey"  >
                     <p><b>"Experienced Senior Developer with a demonstrated history of working in the computer software industry. Skilled in Scala, Rust, Elixir, Python, Erlang, Java, Ruby, Akka, Apache Kafka, Apache Spark, Apache Storm, Apache Hadoop, Cassandra, Scylla, Riak, PostgreSQL, ElasticSearch, React.js, Haskell & TensorFlow. Strong engineering professional with a SUN Certified(1999) Java Programmer focused in Computer Science from University of Indianapolis." </b>  </p>
                     </div> */}
                     </div>
                    <section className="sec2">
                    
                   <div className="container-fluid bg-grey" >
                   
                    <h2>What is Digitalcru?</h2>

                    <p>A software house or company whose primary products are various forms of software, software technology, distribution,
                        and software product development.Software houses are companies in the software industry.</p>          
                    <h2> Common roles in a software house </h2>

                    <p>Organizing a software house is very specialized type of management skill, 
                        where experienced persons can turn the organizational problem into a unique benefit.
                        For example, having sub-teams spread in different time zones may allow a 24-hour company working day,
                        if the teams, systems and procedures are well established.
                        A good example is the test team in time zone 8 hours ahead or behind the development team,
                            who fix software bugs found by the testers.</p>
                    </div>
                    
                    </section>
                 
  
                    </div>
                    </div>
                   
                </div> 
                
        )
    }
} 

export default HomeData;