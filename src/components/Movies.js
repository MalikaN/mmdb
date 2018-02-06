import React,{Component} from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';

const styl={
    'border':'1px solid',
    'float': 'left',
    'width':'24%',
    'height':'24%',
    'margin':'5px'
}
const divMargin={
    'margin':'10px',
    'width':'100%'
}

class Movies extends Component{
    constructor(){
        super();
        this.state={
            movies:[],
            addMovie:''
        }
        this.onChange = this.onChange.bind(this);
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

    onChange(e){
       this.setState({
           addMovie:e.target.value
       })
       console.log('vc');
    }
    render(){
        return(
            <div style={divMargin}>
                {this.state.movies.map((movie,i)=>(
                   <div style={styl}>
                   <Link to="/SingleMovie">
                       <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="Movie Poster" id={movie.id} value={this.state.id} onClick={this.onChange}/>                       
                       {/* <input type="text" onChange={this.onChange} value={movie.original_title}/> */}
                    </Link> 
                       <h5>{movie.release_date}</h5>
                       <h6>{movie.overview}</h6>
                     
                    </div>
                ))}
            </div>
        )
    }
}

export default Movies;