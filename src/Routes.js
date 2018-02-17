import React from 'react';
// import {Route,Switch,Redirect} from 'react-router-dom';
import  { Route, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import Tvseries from './components/Tvseries';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import SingleTvseries from './components/SingleTvseries';


const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />     
        <Route path="/movies/:movieId" component={SingleMovie} />
        <Route exact path="/tvseries" component={Tvseries}/>
        <Route path="/tvseries/:tvseriesId" component={SingleTvseries}/>

    </Switch>

)

export default Routes;