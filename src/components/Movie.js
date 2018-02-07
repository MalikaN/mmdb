import React, {Component} from 'react';
import {Link}  from 'react-router-dom';

class Movie extends Component{
    render(){
        return(
            <div>
                <Link to={`/movies/${this.props.movie.id}`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} alt="Movie Poster" id={this.props.movie.id} />                       
                    {/* <input type="text" onChange={this.onChange} value={movie.original_title}/> */}
                </Link> 
                <h5>{this.props.movie.title}</h5>
                <h5>{this.props.movie.release_date}</h5>
                <h6>{this.props.movie.overview}</h6>
            </div>
        )
    }
}

export default Movie;