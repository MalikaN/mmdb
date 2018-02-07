import React,{Component} from 'react';
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Movies from './components/Movies';
import Tvseries from './components/Tvseries';
import SingleMovie from './components/SingleMovie';
 
class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tvseries">TV Series</Link></li>
          </ul>
          <hr/>
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:movieId" component={SingleMovie} />
          <Route path="/tvseries" component={Tvseries}/>
        </div>
      </Router>
    )
  }

}

export default App;