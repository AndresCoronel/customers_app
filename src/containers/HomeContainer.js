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

    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            <img src="https://4.bp.blogspot.com/-ngrI-kVAaow/WLHRC_js5uI/AAAAAAAAbbo/N8lNqLK3PC4iOeMV98j8hayj2l7fLV5VwCLcB/s1600/77662759c5406e93a741dbf70639d005.jpg" alt=""/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>
                                <button onClick={this.handleOnClickMovie} >Listado de Peliculas</button>
                                
                            </CustomersActions>        
                        </div>
                    }>
                    </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);