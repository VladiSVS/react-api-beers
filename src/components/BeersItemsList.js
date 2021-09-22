import React, { Component } from 'react';
import BeersItems from './BeersItems';
import Logo from './Logo';
import { Link } from 'react-router-dom';

class BeerItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
            }))
    }

    render() {
        return (
            <section>
                {this.state.dataIsReady && this.state.data.map(elt =>
                    <BeersItems imgUrl={elt.image_url} name={elt.name} tagline={elt.tagline} id={elt._id} key={elt._id} />
                )}
                <Link to="/"><Logo /></Link>
            </section>
        );
    }
}

export default BeerItemsList;