import React, { Component } from 'react';
import BeerItem from './BeerItem';
import Logo from './Logo';
import { Link } from 'react-router-dom';


class BeerItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propsData: this.props.propsData.filter(elt => elt._id === this.props.match.params.id),
            propsReady: this.props.propsReady
        }
    }

    render() {
        console.log(this.state.propsData)
        return (
            <section>
                <BeerItem
                    imgUrl={this.state.propsData[0].image_url}
                    name={this.state.propsData[0].name}
                    tagline={this.state.propsData[0].tagline}
                    firstBrewed={this.state.propsData[0].first_brewed}
                    attenuationLevel={this.state.propsData[0].attenuation_level}
                    description={this.state.propsData[0].description}
                />
                <Link to="/"><Logo /></Link>
            </section>
        );
    }
}

export default BeerItemList;