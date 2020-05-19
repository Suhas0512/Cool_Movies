import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setMovies=(movies)=>{
    return {
        type:'SET_MOVIES',
        payload:movies
    }
}
export const startGetMoviess=()=>{
    return(dispatch)=>{
        axios.get('/movies',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const movies=response.data
            dispatch(setMovies(movies))
        })
    }
}

export const addMovies=(movies)=>{
    return {
        type:'ADD_MOVIES',
        payload:movies
    }
}
export const startAddMovies=(formData)=>{
    return(dispatch)=>{
        axios.post('/movies',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            Swal.fire(
                'Good job!',
                'You added the movie you wanted',
                'success'
              )
            const movies=response.data
            dispatch(addMovies(movies))
        })
    }
}