import React from 'react';
import background from '../static/images/background.jpg';


export default function IntroBanner() {
    var backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "90vh",
    }


    return (
        <div class= "text-center text-white" style={backgroundStyle}>
            <div class="container-text centered">
                <div class="overlay">
                    <h1>Retro Guitar</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <button type="button" class="btn btn-outline-light btn-lg">Explore</button>
                </div>
            </div>
        </div>
    );

}
