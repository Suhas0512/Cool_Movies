import React from 'react'
import { connect } from 'react-redux'
import { startGetMoviess } from '../../actions/moviesAction'
import MoviesForm from './Movies'
function MoviesList(props){
    if(props.movies.length==0){
        props.dispatch(startGetMoviess())
    }
    return(
        <div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-7">
                    <h2 className="text-center">Listing Movies - {props.movies.length}</h2>
                    <ul className="list-group">
                    {props.movies.map(movie=>{
                        return <li key={movie._id} className="list-group-item">
                            {movie.name}
                        </li>
                    })}
                </ul>
                </div>

                <div className="col-md-5">
                <h2 className="text-center">Add Movies</h2>
                <MoviesForm/> 
                </div>
            </div> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        movies:state.movies
    }
}
export default connect(mapStateToProps) (MoviesList)