import styled from "styled-components";

export const Background=styled.section`
display:flex;
flex-direction:column;

background:url(/images/misc/home-bg.jpg);
background-color: rgb(170, 169, 169);
background-blend-mode: multiply;
padding:2em 0em 0em;
min-height:100vh;
padding-bottom:${({ sign }) => (sign ? 'Oem' : '2.3em')};
@media(max-width:650px){
min-height:54vh;
}
@media(max-width:480px){
  background:${({ sign }) => (sign ? 'black' : 'url(/images/misc/home-bg.jpg)')};
  background-size:cover;
  background-color:${({sign})=>(sign?'black':'rgb(190, 190, 189)')};
background-blend-mode: multiply;
}
`

export const Frame=styled.div`
display:flex;
max-width:1000px;
width:90%;
margin:0 auto;
justify-content:space-between;
align-items:center;
`

export const Logo=styled.div`

svg{
width:10em;
height:2.5em;
}
`

export const Button=styled.button`
font-size:1.1rem;
color:white;
background:red;
padding:0.3em 0.69em;
border:none;
border-radius:4px;
font-weight:700;

&:hover{
cursor:pointer;
}
`