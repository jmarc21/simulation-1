import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='a'>
                {/* 54D */}
                <section className='header'>
                    
                    <img className='logo' src="../assets/logo.png" alt="" />
                    <h3>SHELFIE</h3>
                </section>
                {/* 54C */}
                <div className='home-list'>
                    {/* 54F */}
                    <Link to='/shelfA'><h2 className='shelfA'>Shelf A</h2></Link>
                    <Link to='/shelfB'><h2 className='shelfB'>Shelf B</h2></Link>
                    <Link to='/shelfC'><h2 className='shelfC'>Shelf C</h2></Link>
                    <Link to='/shelfD'><h2 className='shelfD'>Shelf D</h2></Link>
                </div>
            </div>
        )
    }
}