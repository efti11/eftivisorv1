import styled from 'styled-components';
import img from '../../Assets/Img/hamburger.svg';
import searchicon from '../../Assets/Img/search.svg'

export const Header = styled.header`
position: sticky;
top: 0; 
background-color: var(--white);
z-index:100;


  @media screen and (min-width: 90rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const InnerContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 48rem) {
    display: block;
    justify-content: unset;
    align-items: unset;
    position: relative;
  }

  @media screen and (min-width: 90rem) {
    width:90rem;
  }
`;

export const Logo = styled.div`
font-weight: 700;
  padding: 0 2rem;
  background-color: var(--brand-foreground);
  color: var(--white);
  border-radius: 20px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.75);
  @media screen and (min-width: 48rem) {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
`;

export const SearchIcon = styled.button`
background-image: url(${searchicon});
border: 0;
  padding: 0;
  background-color: transparent;
  width: 1rem;
  height: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    display:none;
  }
`;

export const NavMenuIcon  = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${img});
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SiteNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => isOpen ? '0' : '-60vw'};;
  width: 60vw;
  height: 100vh;
  background-color: var(--white);
  transition: left 0.2s;
  transform-origin: 0 center;
  z-index:500;
  
  @media screen and (min-width: 48rem) {
        position: static;
        top: initial;
        left: initial;
        width: initial;
        height: initial;
        background-color: var(--white);
        transition: initial;
    }


`;



