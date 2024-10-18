import styled from "styled-components";

export const Container=styled.div`
    max-width:1000px;
    width:90%;
    margin:0 auto;
    color:#ffffffb3;
    
`

export const Inner=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    grid-column-gap: 2.5em;
    margin:3.4em 0em;
    `

export const Title=styled.p`
    font-size:1.2rem;
`



export const Link=styled.a`
    color:#ffffffb3;
    margin-bottom:0.5em;
`

export const Text=styled.p``