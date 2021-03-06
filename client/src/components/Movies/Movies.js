import React from 'react'
import { connect } from 'react-redux'
import { startAddMovies } from '../../actions/moviesAction'
class MoviesForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.dispatch(startAddMovies(formData))
    }
    render(){
        return(
            <div>
                <h2>Add movie you would want others to see</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Movie Title</label>
                    <input id="name" value={this.state.name} onChange={this.handleChange} name="name" className="form-control"></input><br/>
                    <input type="submit" value="submit" class="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(MoviesForm)