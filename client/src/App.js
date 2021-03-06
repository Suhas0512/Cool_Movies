import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import Swal from 'sweetalert2';
import { startLogout } from './actions/userAction';
import Movies from './components/Movies/MovieSearch';
import MoviesList from './components/Movies/MoviesList';

function App(props) {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will logged out",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logged Out',
          'You have been logged out.',
          'success'
        )
        props.dispatch(startLogout())
      }
    })
  }
  return (
    <BrowserRouter>
    <div className="container">
      {
        Object.keys(props.user).length==0?(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand ">Best Movies</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/login">Login</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/register">Register</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        ):(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <a className="navbar-brand">Best Movies</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/movies">Search Movies</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" to="/users/account">account</Link></li>
            <li className="nav-item active">
            <Link className="nav-link" onClick={handleLogout}>logout</Link></li>
            </ul>
            </div>
            </nav>
          </div>
        )
      }
      
      <Switch>
      <Route path="/users/login" component={Login}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/users/register" component={Register}></Route>
      <Route path="/users/account" component={Account}></Route>
      {Object.keys(props.user).length>0 && <Route path="/" component={MoviesList} exact={true}></Route>}
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state,props)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
