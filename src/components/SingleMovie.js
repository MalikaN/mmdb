import React, {Component} from 'react';
import axios from 'axios';
import {Link}  from 'react-router-dom';

class Movie extends Component{
    constructor(){
        super();
        this.state={
            movie:[],
        }
    }
    componentDidMount(){
        console.log(this.props.match.params);
        let that = this;
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=746505f2f8248ad1116abca45b254301&language=en-US&page=1`)
        .then(function(response){
            that.setState({
                movie:response.data
            })
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                DISPLAY THE MOVIE DETAILS FROM THE STATE HERE
            </div>
        )
    }
}

export default Movie;