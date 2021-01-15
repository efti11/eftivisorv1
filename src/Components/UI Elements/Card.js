import React from 'react';

const CardCSS= styled.div`
margin:0;
box-shadow:0 2px 8px rgpa(0,0,0,0.26)
border-radius:6px;
overflow:hidden
background:white;
`;

const Card = (prop) => {
   <CardCSS>
        {prop.children}
   </CardCSS>
}

export default Card;