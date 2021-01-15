import styled , {css} from 'styled-components';



export const TravelTips = styled.section`
display: block;
`;

export const TravelTipsUL = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style: none;
`;

export const TravelTipsLI = styled.section`
display: block;
  text-align: center;
  border: 1px solid var(--brand-darkened);
  border-radius: 4px;
  transition: background-color 0.1s, transform 0.1s, box-shadow 0.1s;
  box-shadow: 2px 2px 0 0 rgba(61, 74, 62, 1);
  text-decoration: none;
  color: var(--brand-darkened);
  padding:11px;
  margin-top: 0.5rem;
  margin-right:1rem;
  min-width:10rem;

    :active {
        background-color: var(--brand-darkened);
        color: var(--white);
        transform: translate(2px, 2px);
        box-shadow: none;
    }

    img{
        display:block;
        margin-right:3px;
    }

`;

