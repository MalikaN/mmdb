import React,{Component} from 'react';
import axios from 'axios';

class Tvseries extends Component{
    constructor(){
        super();
        this.state={
            tvseries:[]
        }
    }

    componentDidMount(){
        let that = this;
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=746505f2f8248ad1116abca45b254301&language=en-US&page=1')
        .then(function(response){
           that.setState({
                tvseries:response.data.results
           })
        })
        .catch(function(error){
            console.log(error)
        });
    }
    render(){
        return(
            <div>
               {this.state.tvseries.map((tv,i)=>(
                   <h1>{tv.original_name}</h1>
               ))}
            </div>
        )
    }
}

export default Tvseries;