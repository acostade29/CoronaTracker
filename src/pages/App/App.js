

//REACT and Oauth Imports 
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';


//API IMPORTS 
import Cards from '../../components/Cards/Cards';
import Chart from '../../components/Chart/Chart';
import CountryPicker from '../../components/CountryPicker/CountryPicker' ;
import {fetchData } from '../../api';




class App extends Component {
  state = {
    user: userService.getUser(),
    data: {},
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }










  async componentDidMount() {

    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });

  }








  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>







        <div className="container">
          <Cards data={this.state.data}/>
          <CountryPicker />
          <Chart />
          
          
        </div>

      </>
    );
  }
}

export default App;
