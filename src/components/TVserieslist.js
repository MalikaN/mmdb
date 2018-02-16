import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import './Movie1.css';

class TVseriesList extends Component{
    render(){
        return(
            <div className="card">
                <div >
                <Link to={`/tvseries/${this.props.tv.id}`}>
                    <img src={`http://image.tmdb.org/t/p/w185/${this.props.tv.poster_path}`} alt="Movie Poster" id={this.props.tv.id} />                       
                </Link> 
                <p>{this.props.tv.name}</p>
                <p>{this.props.tv.first_air_date}</p>
                <p className="p block-with-text">{this.props.tv.overview}</p></div>
                <div className="view-more">
                <Link to={`/movies/${this.props.tv.id}`} className="a">
                    <p>More info</p>
                </Link>
                </div>
            </div>
        )
    }
}


export default TVseriesList;