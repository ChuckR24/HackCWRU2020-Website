import React, { Component } from 'react';
import SpartonLogo from '../Assets/Pixelated Spartron.svg';

class Logo extends Component{
    render() {
        return (
            <div className="myLogo">
                <div className ="spartonLogo">
                    <img src={SpartonLogo} alt = "The main Logo for the HackCWRU2020" />
                </div>
            </div>
        )
    }
}

export default Logo;