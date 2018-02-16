import React,{Component} from 'react';
import  {Link} from 'react-router-dom';
import './Home.css';

// import Header from './components/Header';


 
class Home extends Component{
  render(){
    return(
      <div className="container">
        <div className="home-grid">
         <Link to="/movies" className="btn btn-primary btn-lg">Movies</Link>
        <Link to="/tvseries" className="btn btn-primary btn-lg">TV Series</Link>
        </div>
      </div>
    )
  }

}

export default Home;