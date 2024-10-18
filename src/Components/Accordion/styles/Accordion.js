import styled from "styled-components";

export const Container=styled.div`
max-width:1000px;
width:95%;
margin:0 auto;
`

export const Inner=styled.div``

export const Title=styled.h1`
margin:2em 0;`

export const Header=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.6em 0.8em;
border-bottom:1px solid gray;

&:hover{
background:#575656;
cursor:pointer;
}

img{
filter: brightness(0) invert(1);
height:1em;
}
`

export const Body=styled.div`
padding:0.7em 0.94em;
`

export const Item=styled.div`
max-width:800px;
width:100%;
background-color:#333;
margin-bottom:1.3em;
font-size:1.5rem;
`