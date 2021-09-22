import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <section id="homeSection">
                <div>
                    <img src="../img/allBeer.png" alt=""></img>
                    <Link to="/beers">All Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                </div>
                <div>
                    <img src="../img/randomBeer.png" alt=""></img>
                    <Link to="/">Random Beers</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
                </div>
            </section>
        );
    }
}

export default Home;