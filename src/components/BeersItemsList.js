import React, { Component } from 'react';
import BeersItems from './BeersItems';
import Logo from './Logo';
import { Link } from 'react-router-dom';

class BeerItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propsData: this.props.propsData,
            propsReady: this.props.propsReady
        }
    }

    render() {
        console.log(this.state.propsData)
        console.log(this.state.propsReady)
        return (
            <section >
                {this.state.propsReady && this.state.propsData.map(elt =>
                    <BeersItems imgUrl={elt.image_url} name={elt.name} tagline={elt.tagline} id={elt._id} key={elt._id} />
                )}
                < Link to="/" > <Logo /></Link >
            </section >
        );
    }
}

export default BeerItemsList;