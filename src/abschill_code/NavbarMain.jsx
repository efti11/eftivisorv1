import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const NavbarMain = () => {
    //navbar in one place with css file imported for simpler setup
    return (
        <>
            <nav className="navTop">
                <h1><Link to="/">EtfiVisor</Link></h1>
            </nav>

            <nav className="navMain">
                <Link to="/hotels"><div><img src="https://img.icons8.com/ios/64/000000/bed.png" /> Hotels</div></Link>
                <Link to="/top"><div><img src="https://img.icons8.com/android/24/000000/star.png" />Top Rated</div></Link>
                <Link to="/reviews"><div><img src="https://img.icons8.com/ios-filled/50/000000/camera-identification.png" />Search Reviews</div></Link>
                <Link to="/login"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Write Review</div></Link>
                <Link to="/forum"><div><img src="https://img.icons8.com/dotty/50/000000/comment-discussion.png" />Travel Forums</div></Link>
                <Link to="/more"><div><img src="https://img.icons8.com/android/24/000000/more.png" />More</div></Link>
            </nav>
        </>
    )
}

export default NavbarMain;