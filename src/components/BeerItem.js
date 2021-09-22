import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="beerItemList">
                <div>
                    <div>
                        <img src={this.props.imgUrl} alt=""></img>
                    </div>
                    <h1>{this.props.name}</h1>
                    <h2>{this.tagline}</h2>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>First brewed:</span>
                            <span>Attenuation level:</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ textAlign: "right" }}>{this.props.firstBrewed}</span>
                            <span style={{ textAlign: "right" }}>{this.props.attenuationLevel}</span>
                        </div>
                    </div>
                    <p>{this.props.description}</p>
                    <Link to="/beers"><img src="../img/Vector.svg" alt=""></img></Link>
                </div>
            </div >
        );
    }
}

export default BeerItem;