

//REACT and Oauth Imports 
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import  './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';


//API IMPORTS 
import Cards from '../../components/Cards/Cards';
import Chart from '../../components/Chart/Chart';
import CountryPicker from '../../components/CountryPicker/CountryPicker' ;
import {fetchData } from '../../api';
import styles from '../../../src/App.module.css';
import coronaImage from '../../../src/components/images/covidimage2.png';



//comment imports 
  
import * as commentAPI from '../../services/comments-api';
import CommentListPage from '../../pages/CommentListPage/CommentListPage';
import AddCommentpage from '../../pages/AddCommentPage/AddCommentPage';







class App extends Component {
  state = {
    user: userService.getUser(),
    data: {},
    comments: [],
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }




handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

}
handleAddComment = async newCommentData => {
  const newComment = await commentAPI.create(newCommentData);
  this.setState(state => ({
    comments: [...state.comments, newComment]
  }), () => this.props.history.push('/comments'));
}


async componentDidMount() {
  const fetchedData = await fetchData();
  this.setState({ data: fetchedData });
  const comments = await commentAPI.getAll();
  this.setState({comments});
}



  render () {

    const { data, country } = this.state;

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






        <Route exact path='/comments' render={({history, location}) => 
            <CommentListPage
            comments={this.state.comments}
            user={this.state.user}
            history={history}
            location={location}
            />
          } />
          <Route exact path='/AddcommentPage' render={() => 
            <AddCommentpage
              handleAddComment = {this.handleAddComment}
            />
          } />

          

   














            <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="Covid-19"/>
               <Cards data={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data}  country={country}/>
            </div>

      </>
    );
  }
}

export default App;
