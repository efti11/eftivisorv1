import styled , {css} from 'styled-components';
import BackIcon from '../../Assets/Img/arrow-left.svg';
import PPLMing from '../../Assets/Img/svg/undraw_sunlight_tn7t.svg';
import SearchIcon from  '../../Assets/Img/search.svg';

export const SiteSearch = styled.div`
background-color:var(--brand-greyed);
padding: 3rem 1rem 10rem;
margin-bottom: 5rem;
position: relative;
margin-top:2rem;
z-index:50;



::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    width: 70vw;
    
    height: 14rem;
    background-image: url(${PPLMing});  
   
    background-repeat: no-repeat;
    background-size: 70vw 14rem;
    z-index:-1;

    @media screen and (min-width: 48rem) {
      transform: translateX(-30%);
      height: 20rem;
      background-size: 70vw 22rem;
      bottom:2.5rem;
      
    
    }
   
  }

  @media screen and (min-width: 48rem) {
    padding: 5rem 1rem 10rem;
    margin-left:2rem;
    margin-right:2rem;
    border-radius:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  }

  @media screen and (min-width: 90rem) {
    
    width:90rem;
  }
 
 
`;

export const Asdfwrapper = styled.div`

@media screen and (min-width: 90rem) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
   
`;

export const H1 = styled.h1`
font-size: 1rem;
text-align: left;
margin-bottom: 2rem;

@media screen and (min-width: 48rem) {
  
  text-align:left;
}
`;


export const SearchBoxForm = styled.div`
${props => props.active && css`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
background-color: var(--white);
padding: 1rem;
z-index:900;

  @media screen and (min-width: 48rem) {
    position: static;
    top: unset;
    left: unset;
    height: unset;
    width: unset;
    right: unset;
    padding: 0.5rem;
    border-radius: 4px;
  }

${Input} {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  box-shadow: unset;
  background-image: url(${BackIcon});
  }
`}`;


export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--brand-darkened);
  padding: 0.5rem 0.5rem 1rem 2rem;
  background-color: var(--white);

  transition: background 500ms ease;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  background-position: left 0.5rem center;
  font-size: 1rem;
  transition: background-color 0.1s, transform 0.1s, box-shadow 0.1s;
        box-shadow: 4px 4px 0 0 rgba(61, 74, 62, 1);

  @media screen and (min-width: 48rem) {
    padding: 0.5rem 0.5rem 1rem 2rem;
   
  }

`;


// export const DivContainer = styled.div`
// width: 100%;
//   font-size: 1.5rem;
//   display: grid;

//   position: absolute;
//   background: white;
//   box-shadow: 0px 0px 5px black;
//   border-radius: 0px 0px 5px 5px;
// `;

// export const SearchClose = styled.button` 
// display: none;
// `;


// export const SearchContainer = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     background-color: var(--white);
//     padding: 1rem;
//     z-index:900;

//     @media screen and (min-width: 48rem) {
//         width:400px;
//     }

    
     

//         ${SearchClose} {
//             display: block;
//             position: absolute;
//             top: 1.75rem;
//             left: 1.5rem;
//             width: 1rem;
//             height: 1rem;
//             border: 0;
//             background-color: transparent;
//             background-image: url(${BackIcon});
//             background-size: cover;
//             }
  
// `;


  




  
  
 




