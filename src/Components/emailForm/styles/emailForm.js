import styled from "styled-components";

export const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
`

export const Input=styled.input`
flex:1 1 350px;
font-size:1.3rem;
font-family:inherit;
padding:0.4em 0.6em;
color:white;
box-sizing: border-box;
border:none;
outline:none;
height:50px;
margin-right:0.6em;
border-radius:5px;

@media (max-width:597px){
  margin-bottom:0.7em;
  margin-right:0em;
}

`

export const Text=styled.p`
font-size:1.1rem;
`

export const Button=styled.button`
width:23%;
min-width:170px;
font-size:1.3rem;
background:red;
color:white;
padding:0.4em 0.6em;
display:flex;
justify-content:space-evenly;
align-items:center;
border:none;
height:50px;
font-weight:700;
border-radius:5px;
 margin: ${({ header }) => (header ? '0 auto' : '0')};
img{
width:1em;
filter: brightness(0) invert(1);
}
`

export const Pane=styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
width:100%;
margin:0 auto;

`