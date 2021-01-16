import React from 'react';
import HeadLineElement from '../Components/Layout/Headline'
import { TravelTips, TravelTipsUL, TravelTipsLI } from '../Components/TravelAdvice/TravelAdviceCSS';
//changed name
const TourComponent = () => {

    return (
        <>
            <TravelTips>
                <TravelTipsUL>
                    <TravelTipsLI>asdf</TravelTipsLI>
                    <TravelTipsLI>asdf</TravelTipsLI>
                    <TravelTipsLI>asdf</TravelTipsLI>
                    <TravelTipsLI>asdf</TravelTipsLI>
                </TravelTipsUL>
            </TravelTips>
            <HeadLineElement tittle="Family Tours" />
            <HeadLineElement tittle="Sightseeing Tours" />
            <HeadLineElement tittle="Sightseeing Tours" />
        </>
    )


}
export default TourComponent;