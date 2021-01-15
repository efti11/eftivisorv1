import styled from 'styled-components';
import img from '../../Assets/Img/close.svg';

export const SiteNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => isOpen ? '0' : '-60vw'};
  width: 60vw;
  height: 100vh;
  background-color: var(--white);
  transition: left 0.2s;
  transform-origin: 0 center;

  z-index:200;
  @media screen and (min-width: 768px) {
    display: none;
  }

`;


export const SideBarUL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  padding: 0.5rem 1rem;
  list-style-type: none;
  font-size: 0.875rem;
 
`;

export const SideBarLI = styled.li`

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

`;

export const CloseMenuIcon  = styled.button`
border: 0;
  padding: 0;
  background-color: transparent;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
background-image: url(${img});
position: absolute;
top: 0.5rem;
right: 1rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;




  







