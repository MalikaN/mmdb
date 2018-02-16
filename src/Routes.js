import React from 'react';
// import {Route,Switch,Redirect} from 'react-router-dom';
import  { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Movies from './components/Movies';
import Tvseries from './components/Tvseries';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';


const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />     
        <Route path="/movies/:movieId" component={SingleMovie} />
        <Route path="/tvseries" component={Tvseries}/>

    </Switch>

)

export default Routes;