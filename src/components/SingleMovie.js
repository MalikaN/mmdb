import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import './SingleMovie.css';

class SingleMovie extends Component{
    constructor(){
        super();
        this.state={
            movie:'',
            castDetails: [],
            crewDetails:[],
            showCast: '',
            showCrew:'',
            genres:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match);
        let that = this;
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=746505f2f8248ad1116abca45b254301&language=en-US&page=1`)
        .then(function(response){
            that.setState({
                movie:response.data,
                genres:response.data.genres
            })        
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });

        // let showadditem = this.state.showItem + 1
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=746505f2f8248ad1116abca45b254301`)
        .then(function(response){
          
            that.setState({
                castDetails:response.data.cast,
                crewDetails:response.data.crew,
                showCast:5,
                showCrew:5
            })
          
        })
        .catch(function(error){
            console.log(error);
        })    
    }

    render(){
       
        return(
            <div className="single-container">
            { <Header/>}
                <div className="single-grid-content">
                    <div className="moviedetails">
                    <div className="poster-im">
                        <img src={`http://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} alt="Movie Poster" id={this.state.movie.id} />                       
                    </div>
                    <div >
                        <h1>{this.state.movie.original_title}</h1>
                        <h4>Overview</h4>
                        <p>{this.state.movie.overview}</p>
                        <h4>Featured Crew</h4>
                        {this.state.crewDetails.slice(0,this.state.showCrew).map((crew,j)=>(
                            <div className="crew">
                                <b>{crew.name}</b>
                                <p>{crew.job}</p><br/>
                            </div>
                        ))}
                    </div> 
                                    
                    </div>
          
                   <div className="people-content">
                    <div>
                        <h4>Top Billed Cast</h4> 
                        <ol className="people-list">                      
                            {this.state.castDetails.slice(0,this.state.showCast).map((cast,i)=>(
                            <li className="people-card">
                                <img src={`http://image.tmdb.org/t/p/w185/${cast.profile_path}`} alt="Movie Poster" id={cast.cast_id} className="img"/>
                                <h4>{cast.name}</h4>
                                <p className="cast-character">{cast.character}</p>
                            </li>
                            ))}
                        </ol>
                    </div>
                    <div className="info">
                       <h5>Status</h5>
                       <p>{this.state.movie.status}</p>

                       <h5>Release Date</h5>
                       <p>{this.state.movie.release_date}</p>

                       <h5>Homepage</h5>
                       <a href={this.state.movie.homepage}>{this.state.movie.homepage}</a>

                       <h5>Genres</h5>
                       <div>
                       {this.state.genres.map((genre,i)=>(
                               <label className="genre-label">{genre.name}</label>
                       ))}
                       </div>
                   
                   </div>      
                   </div>
            </div>
            </div>
        )
    }
}
export default SingleMovie;