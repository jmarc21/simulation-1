import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShelfA extends Component {
    render() {
        return (
            //42E
            <div>
                <Link to='/shlfAB1'><h2>Bin 1</h2></Link>
                <Link to='/shlfAB2'><h2>Bin 2</h2></Link>
                <Link to='/shlfAB3'><h2>Bin 3</h2></Link>
                <Link to='/shlfAB4'><h2>Bin 4</h2></Link>
            </div>
        )
    }
}