import React from 'react';
import {FaFax} from 'react-icons/fa';
import {IoCallOutline} from 'react-icons/io5';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';

function Footer() {
    return (
        <footer class="py-5 pt-5 pb-4">
            <div class="container text-center text-md-left">
                <div class="row text-start text-md-left">
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h4>Need Support?</h4>
                        <p>
                            <AiOutlineHome size={24} mt-3/> 10000 Avenue A., City B, IL 90000
                        </p>
                        <p>
                            <AiOutlineMail size={24} /> retroguitar@gmail.com
                        </p>
                        <p>
                            <IoCallOutline size={24} /> +1 (900) 000-0000
                        </p>
                        <p>
                            <FaFax size={24} /> +1 (999) 999-9999
                        </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h4>About</h4>
                        <ul class="list-unstyled ">
                            <li><a class="text-dark text-decoration-none" href="#">Company</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Policy</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Our Teams</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Career</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Press</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h4>Customer</h4>
                        <ul class="list-unstyled">
                            <li><a class="text-dark text-decoration-none" href="#">Shopping</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Order Status</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Return Policy</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Assistance</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">FAQ</a></li> 
                        </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h4>Services</h4>
                        <ul class="list-unstyled">
                            <li><a class="text-dark text-decoration-none" href="#">Upgrade Gear</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Repair Gear</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Rent Gear</a></li>
                            <li><a class="text-dark text-decoration-none" href="#">Lessons</a></li>
                        </ul>
                    </div>
                </div>

                <hr class="mb-4"/>

                <div class="text-center">
                    <p>&copy; 2022 RetroGuitar Inc. Powered by React & Bootstrap5</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;