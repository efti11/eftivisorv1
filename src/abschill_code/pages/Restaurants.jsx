import React from 'react';
import './Restaurants.css';
import {Route, Switch, Link } from 'react-router-dom';
import HeadLineElement from '../../Components/Layout/Headline';

const Restaurants = () => {
    
    return (
        <>
     <HeadLineElement tittle="Chania locations" />
     <p>Search and review food places on these city locations</p>
 <div className="subcategories">
        <ul className="subfields">
                  <Link to="/NeaChora"><div><img src="https://img.icons8.com/ios/64/000000/bed.png" /> Nea Chora</div></Link>
                <Link to="/Centrum"><div><img src="https://img.icons8.com/android/24/000000/star.png" />Centrum</div></Link>
                <Link to="/AgioiApostoloi"><div><img src="https://img.icons8.com/ios-filled/50/000000/camera-identification.png" />Agioi Apostoloi</div></Link>
                <Link to="/Platanias"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Platanias</div></Link>
                <Link to="/OldHarbor"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Old Venetian Harbor</div></Link>
                
        </ul>
 </div>
 <HeadLineElement tittle="OR" />
 <HeadLineElement tittle="Explore by taste" />
                <div className="subcategories">
                <ul className="subfields">
                <Link to="/NeaChora"><div><img src="https://img.icons8.com/ios/64/000000/bed.png" /> Burgers</div></Link>
                <Link to="/Centrum"><div><img src="https://img.icons8.com/android/24/000000/star.png" />Italian</div></Link>
                <Link to="/AgioiApostoloi"><div><img src="https://img.icons8.com/ios-filled/50/000000/camera-identification.png" />Chinese Food</div></Link>
                <Link to="/Platanias"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Street Food</div></Link>
                <Link to="/OldHarbor"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Traditional Dishes</div></Link>
                </ul>
                </div>
 <HeadLineElement tittle="Most Reviewed Food Places" />
 <HeadLineElement tittle="Top Rated Food Places" />
 </>
    )
}

export default Restaurants;