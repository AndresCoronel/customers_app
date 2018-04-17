import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';
import MoviesActions from './../components/movie/MoviesActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("handleOn Click");
        this.props.history.push('/customers');
    }
    handleOnClickMovie = () => {
        console.log("handleOn Click");
        this.props.history.push('/movies');
    }
    onBack = () => {
        console.log("handleOn Click");
        this.props.history.push('/');
    }
   

    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            <img src="http://www.jotdown.es/wp-content/uploads/2014/01/imagen-41.jpg" alt=""/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>
                                <button onClick={this.handleOnClickMovie} >Listado de Peliculas</button>
                                <button onClick={this.onBack} >Salir</button> 
                            </CustomersActions>        
                            
                        </div>
                    }>
                    </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);
