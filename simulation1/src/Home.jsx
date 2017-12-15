import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/shelfA'><h2>Shelf A</h2></Link>
                <Link to='/shelfB'><h2>Shelf B</h2></Link>
                <Link to='/shelfC'><h2>Shelf C</h2></Link>
                <Link to='/shelfD'><h2>Shelf D</h2></Link>
            </div>
        )
    }
}