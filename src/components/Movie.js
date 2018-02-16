import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import './Movie1.css';

class Movie extends Component{
    render(){
        return(
            <div className="card">
                <div >
                <Link to={`/movies/${this.props.movie.id}`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} alt="Movie Poster" id={this.props.movie.id} />                       
                </Link> 
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.release_date}</p>
                <p className="p block-with-text">{this.props.movie.overview}</p></div>
                <div className="view-more">
                <Link to={`/movies/${this.props.movie.id}`} className="a">
                    <p>More info</p>
                </Link>
                </div>
            </div>
        )
    }
}

export default Movie;