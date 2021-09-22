import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BeerItem from './BeerItem';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propsRandom: this.props.propsData[Math.floor(Math.random() * this.props.propsData.length)],
            propsReady: this.props.propsReady,
            check: undefined
        }
    }
    render() {
        console.log(this.state.propsRandom)
        console.log(this.state.propsReady)
        return (
            <section>
                <BeerItem
                    imgUrl={this.state.propsRandom.image_url}
                    name={this.state.propsRandom.name}
                    tagline={this.state.propsRandom.tagline}
                    firstBrewed={this.state.propsRandom.first_brewed}
                    attenuationLevel={this.state.propsRandom.attenuation_level}
                    description={this.state.propsRandom.description}
                />
                <Link to="/"><Logo /></Link>
            </section>
        );
    }
}

export default RandomBeer;