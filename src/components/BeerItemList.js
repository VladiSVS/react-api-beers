import React, { Component } from 'react';
import BeerItem from './BeerItem';
import Logo from './Logo';
import { Link } from 'react-router-dom';


class BeerItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataIsReady: false,
        }
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
            }))
    }
    render() {
        return (
            <section>
                <BeerItem
                    imgUrl={this.state.data.image_url}
                    name={this.state.data.name}
                    tagline={this.state.data.tagline}
                    firstBrewed={this.state.data.first_brewed}
                    attenuationLevel={this.state.data.attenuation_level}
                    description={this.state.data.description}
                />
                <Link to="/"><Logo /></Link>
            </section>
        );
    }
}

export default BeerItemList;