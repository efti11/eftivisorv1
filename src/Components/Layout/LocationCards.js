import styled , {css} from 'styled-components';
import React, { useState } from 'react';

export const LocationCard = styled.div`
    display:block;
    position:relative;
    height:290px;
    width:250px;
    text-align: center;
    border: 1px solid var(--brand-darkened);
    border-radius: 4px;
    transition: background-color 0.1s, transform 0.1s, box-shadow 0.1s;
    box-shadow: 2px 2px 0 0 rgba(61, 74, 62, 1);
    text-decoration: none;
`;

export const ImgContainer = styled.div`
    height:220px;
    width:100%;
    overflow:hidden;
        img{
            height:100%;
            width:100%;
            background:  center center;
            background-size: cover;
            object-fit: cover;
        }
`;

export const LocationCardContent= styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    font-size:20px;
    text-align: center;
    padding:20px 30px;
`;

const LocationCards= (props) =>  {

    return(
        <>
        <LocationCard>
            <ImgContainer>
            <img src={props.img}></img> 
            </ImgContainer>

         <LocationCardContent> 
             {props.tittle}
         </LocationCardContent>

        </LocationCard>

    </>
    )


}
export default LocationCards;