import styled , {css} from 'styled-components';
import React, { useState } from 'react';

export const Headline = styled.div`
margin-top:30px;
margin-bottom: 20px;
position: relative;
text-align: center;

    ::before{
        display: block;
        content: "";
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        z-index: -1;
        border-bottom: 1px solid black;
    }
`;

export const HeadlineSpan = styled.span`
    letter-spacing: .02em;
    font-weight: bold;
`;

export const H1Span= styled.span`
  display: inline-block;
  background-color: white;
  padding: 0 12px;
`;

const HeadLineElement= (props) =>  {

    return(
        <>
        <Headline>
        <h1><H1Span><HeadlineSpan>{props.tittle}</HeadlineSpan></H1Span></h1>
        </Headline>

    </>
    )


}
export default HeadLineElement;