import styled from 'styled-components'

export const Inner=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1000px;
width:100%;
margin:0 auto;

@media (max-width:1000px){
  flex-direction:column;
}
`

export const Item=styled.div`
padding:1rem;
border-bottom:8px solid gray;
`

export const Container=styled.div`
background:black;
color:white;
`

export const Title=styled.h1`
font-size:2.9rem;
`

export const Subtitle=styled.h2`
font-size:1.3rem;
font-weight:normal;
`

export const Pane=styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
@media (max-width:1000px){
  width:100%;
}
`

export const Image=styled.img`
max-width:100%;
height:auto;`