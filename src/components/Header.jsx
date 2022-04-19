import React from 'react';

import logo from '../static/logos/logoretro.png';



export default function Header() {
    return (
        <div id='main'>
            <header class="py-3 mb-4 border-bottom">
                <div class="container d-flex flex-wrap justify-content-center">
                    <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img src={logo} width="50" height="46"/>
                        <span class="fs-4"><h3>Retro Guitar</h3></span>
                    </a>
                    <form class="col-sm-6 col-auto">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </div>
        
    )
}

