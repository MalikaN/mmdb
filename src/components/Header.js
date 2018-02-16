import React,{Component} from 'react';
import  {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './Header.css';
import Home from './Home';

class App extends Component{
  render(){
    return(
        <div className="header-container">
        <div className="logo">
        <Link to="/" className="p-logo">MMDB</Link>
        </div>
          <div className="header">
            <div className="header-content">
              <Link to="/movies" className="items">Movies</Link>
              <Link to="/tvseries" className="items">TV Series</Link>
            </div>
          </div>
        </div>
    )
  }

}

export default App;