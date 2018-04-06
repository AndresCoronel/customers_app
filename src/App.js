import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import MoviesContainer from './containers/movie/MoviesContainer';
import CustomerContainer from './containers/CustomerContainer';
import MovieContainer from './containers/movie/MovieContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';
import NewMovieContainer from './containers/movie/NewMovieContainer';
import Login from './containers/Login';

class App extends Component {

  renderHome = () => <HomeContainer />
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customer List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;


  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/movies/new" component={NewMovieContainer} />
            <Route path="/customers/:cedula"
              render={props => <CustomerContainer cedula={props.match.params.cedula} />} />

            <Route path="/movies/:id"
              render={props => <MovieContainer id={props.match.params.id} />} />
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
