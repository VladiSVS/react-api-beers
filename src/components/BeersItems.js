import React from 'react';
import { Link } from 'react-router-dom';

class BeersItems extends React.Component {
    render() {
        return <article className="beerItems">
            <div>
                <img src={this.props.imgUrl} alt=""></img>
            </div>
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.tagline}</h2>
                <p>Created by: {this.props.name}</p>
                <Link to={`/beers/${this.props.id}`}>Details</Link>
            </div>
        </article>;
    }
}

export default BeersItems;