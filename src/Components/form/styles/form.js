import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

export const Container=styled.div`
max-width:450px;
width:90%;
margin: auto auto 0;
background:rgba(0,0,0,0.60);
padding:3em 4.3em;
min-height:80vh;
display:flex;
flex-direction:column;
box-sizing:border-box;

@media(max-width:480px){
   min-height:40vh;
   margin-top:2em;
   background:black;
   padding:0;
}

`

export const Title=styled.h1`
font-size:2.0rem`

export const Base=styled.form`
display:flex;
flex-direction:column;
justify-content:space-evenly;
`

export const Input=styled.input`
font-family:inherit;
padding:0.7em 1em;
box-sizing:border-box;
width:100%;
background:inherit;
border:0.001px solid white;
border-radius:4px;
color:white;
font-size:1.1rem;
margin-bottom:1.3em;
outline:none;
`

export const Button=styled.button`
font-size:1.3rem;
font-family:inherit;
background:red;
color:white;
padding:0.42em 0.6em;
border:none;
border-radius:3px;
cursor:pointer;
margin-bottom:1.3em;
`

export const Error=styled.div``

export const Link=styled(routerLink)`
color:white;
text-decoration:none;
font-weight:bolder;
font-size:1.3rem;
&:hover{
text-decoration:underline;
}
`

export const Text=styled.p`
font-size:1rem;
`

export const Small=styled.p`
font-size:0.9rem;
color:grey;
`