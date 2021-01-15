import React, { useState } from 'react';
import HeadLineElement from '../../Components/Layout/Headline';
import {TravelTips,TravelTipsUL,TravelTipsLI} from './TravelAdviceCSS';

const TravelAdvice = () =>  {

    return(
        <>
        <HeadLineElement tittle="Basic Info" />
        <TravelTips>
            <TravelTipsUL>
                <TravelTipsLI>asdf</TravelTipsLI>
                <TravelTipsLI>asdf</TravelTipsLI>
                <TravelTipsLI>asdf</TravelTipsLI>
                <TravelTipsLI>asdf</TravelTipsLI>
              
            </TravelTipsUL>
        </TravelTips>
    </>
    )


}
export default TravelAdvice;