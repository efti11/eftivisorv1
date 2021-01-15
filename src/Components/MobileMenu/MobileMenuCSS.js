import styled from 'styled-components';

export const MobileMenuDiv = styled.div`
overflow: hidden;
`;

export const MobileMenuUL = styled.ul`
    display: flex;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    list-style-type: none;
    overflow-x: auto;
    flex-grow: 4;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
   
    ::-webkit-scrollbar {
        display: none;
      }
    
  @media screen and (min-width: 48rem) {
        display:none;
    }

`;


export const MobileMenuLI = styled.li`
    display: flex;
    text-decoration: none;
    color: var(--brand-darkened);
    text-align: center;
    border: 1px solid var(--brand-darkened);
    border-radius: 4px;
    padding: 11px 13px 11px 14px;
    margin-left:0.5rem;
    transition: background-color 0.1s, transform 0.1s, box-shadow 0.1s;
    box-shadow: 2px 2px 0 0 rgba(61, 74, 62, 1);
    min-width: 150px;
    align-items: stretch; 
        :active{
            background-color: var(--brand-darkened);
            color: var(--white);
            transform: translate(2px, 2px);
            box-shadow: none;
        }
     
`;


