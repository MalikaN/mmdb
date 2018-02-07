import React,{Component} from 'react';
import axios from 'axios';
import Movie from './Movie';


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
            <div>
                {this.state.movies.map((movie,i)=>(
                    <Movie movie={movie} />
                ))}
            </div>
        )
    }
}

export default Movies;