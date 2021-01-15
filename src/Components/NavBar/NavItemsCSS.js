import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const UtilityNavUL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  padding: 0.5rem 1rem;
  list-style-type: none;
  font-size: 0.875rem;

    @media screen and (min-width: 48rem) {
        flex-direction: row;
        justify-content: flex-end;
        margin-top: initial;
        padding: initial;
        margin-bottom: 0.5rem;   
    }
 
`;

export const UtilityNavLI = styled.li`
display: block;
text-decoration: none;
padding: 0.25rem 0;
color: var(--black);
text-align:left;
font-size: 0.875rem;

:last-of-type {
  order: -1;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  border-radius: 4px;
  padding: 0.25rem 1rem;
}

@media screen and (min-width: 48rem) { 
   :last-of-type {
        order: initial;
    }
    
    :not(:first-of-type) {
        margin-left: 1rem;
    }
}
`;


export const MainNavUL = styled.ul`
    border-top: 1px solid var(--brand-greyed);
    list-style-type: none;
    padding: 0.5rem 1rem;

    @media screen and (min-width: 48rem) { 
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
        padding: 0;
        border: 0;
    }

    @media screen and (min-width: 90rem) {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
    }
`;

export const MainNavLI = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 0.25rem 0;
    color: var(--brand-darkened);
        

    @media screen and (min-width: 48rem) { 
        display: block;
        text-align: center;
        border: 1px solid var(--brand-darkened);
        border-radius: 4px;
        padding: 0.5rem;
        transition: background-color 0.1s, transform 0.1s, box-shadow 0.1s;
        box-shadow: 2px 2px 0 0 rgba(61, 74, 62, 1);
       
        :active {
            background-color: var(--brand-darkened);
            color: var(--white);
            transform: translate(2px, 2px);
            box-shadow: none;
          }
    }
`;

