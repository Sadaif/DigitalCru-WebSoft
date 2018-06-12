import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';


class App extends Component {
  render() {
    return(
      <div>
        <section>
      <div>
    
      <Header />
     
        </div>
        </section>
        <section>
        <div>
          <footer>
          <Footer />
          </footer>
          </div>
          </section>
    </div>
       
    );
  }
}

export default App;
