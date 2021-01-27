import React from 'react';
import '../../abschill_code/pages/Nightlife.css';
import {Route, Switch, Link } from 'react-router-dom';
import HeadLineElement from '../../Components/Layout/Headline';
import LocationCard from '../../Components/Layout/LocationCards';
import centrum from '../../Assets/Img/green.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NightLife = () => {

    const responsive = {
        desktop: {
          breakpoint: { max:3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
      
    
    return (
        <>
         
         <div className="pswles">
          <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
       
      >
             
            
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>                   
      
                  
      </Carousel>
      </div>
     
     <HeadLineElement tittle="Chania locations" />
     <p>Search and review food places on these city locations</p>
 <div className="subcategories">
        <ul className="pswles">
            
        
                 
                    <Link to="/NeaChora">
                    <LocationCard img={centrum} tittle="Centrum" />
                    </Link>
                     
                  <Link to="/NeaChora">
                    <LocationCard img={centrum} tittle="asdf" />
                    </Link>     
        </ul>
 </div>

 <HeadLineElement tittle="OR" />
 <HeadLineElement tittle="Explore by taste" />
                <div className="subcategories">
                <ul className="subfields">
                <Link to="/NeaChora"><div><img src="https://img.icons8.com/ios/64/000000/bed.png" /> Bars & Drinks</div></Link>
                <Link to="/Centrum"><div><img src="https://img.icons8.com/android/24/000000/star.png" />Clubbing</div></Link>
                <Link to="/AgioiApostoloi"><div><img src="https://img.icons8.com/ios-filled/50/000000/camera-identification.png" />Drinks With a View</div></Link>
                <Link to="/Platanias"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />A Chilled Night Out</div></Link>
                <Link to="/OldHarbor"><div><img src="https://img.icons8.com/wired/64/000000/google-forms.png" />Coffeehouses</div></Link>
                </ul>
                </div>
 <HeadLineElement tittle="Most Reviewed Food Places" />
 <HeadLineElement tittle="Top Rated Food Places" />
 </>
    )
}

export default NightLife;