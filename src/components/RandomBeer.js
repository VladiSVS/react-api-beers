import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section>
                123
                < Link to="/" > <Logo /></Link >
            </section>
        );
    }
}

export default RandomBeer;