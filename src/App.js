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
        <Link to="/Movies">Movies</Link>
        <Link to="/Tvseries">TV Series</Link>
        <Route path="/Movies" component={Movies}/>
        <Route path="/Tvseries" component={Tvseries}/>
        <Route path="/SingleMovie" component={SingleMovie}/>
      </div>
      </Router>

    )
  }

}

export default App;