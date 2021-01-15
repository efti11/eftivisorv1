import styled from 'styled-components';
import TourFormImg from  '../../Assets/Img/illustration2.jpg';
import ASDF from '../../Assets/Img/svg/undraw_Beach_rvmg1.svg';

export const Wrapper= styled.div`
    display: block;
    background-color: tomato;
  
    @media screen and (min-width:48rem) {
        margin-left:2rem;
        margin-right:2rem; 
      }   
        
`;


export const SiteForm=styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
   
    @media screen and (min-width:48rem) {
        display: flex;
        flex-direction: row;
        position: relative;
        width: 100%;
        margin-top: 2.5rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
   
      }
`;

export const Tomato= styled.div`
    display: block;
    width:100%;
    padding:32px 32px 8px;
    background-color: tomato; 
   
`;

export const Red= styled.div`
    display: block;
    width:100%;
    height: 250px;
    background-image: url(${TourFormImg});
    background-size: cover;
    padding:32px 32px 8px;
   
`;

export const H1=styled.h1`
    font-size: 1rem;
    text-align: left;
    margin-bottom: 1rem;
`;

  
 export const TourFormBtn=styled.button`
    display: block;
    position: absolute;
    bottom:32px;
    right:32px;
    border-radius: 21px;
    border: 1px solid var(--brand-darkened);
    padding:10px 16px;
    background-color: var(--white);
    background-position: left;
    font-size: 1rem;
 `;


 

  


 

  
  
 




