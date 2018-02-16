import React,{Component} from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Movie1.css';
import Header from './Header';


class Movies extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        }
    }

    componentDidMount(){
        let that = this;
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=746505f2f8248ad1116abca45b254301&language=en-US&page=1')
        .then(function(response){
            that.setState({
                movies:response.data.results
            })

        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div className="movie-container">
            { <Header/>}
                <div className="grid-content">
               
                    {this.state.movies.map((movie,i)=>(
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Movies;