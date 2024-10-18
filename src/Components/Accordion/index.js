import { useState,useContext,createContext } from "react";
import { Container,Inner,Item,Title,Header,Body } from "./styles/Accordion";
const Togglecontext=createContext()


export default function Accordion({children,...restProp}){
    
    return(
        <Container {...restProp}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title=({children,...restProp})=>{
    return <Title {...restProp}>{children}</Title>
}

Accordion.Item=function AccordionItem({children,...restProp}){
    const [toggle,setoggle]=useState(false)
    return (
        <Togglecontext.Provider value={{toggle,setoggle}}>
            <Item {...restProp}>{children}</Item>
            </Togglecontext.Provider>
    )
}

Accordion.Header= function AccordionHeader({children,...restProp}){
    const {toggle,setoggle}=useContext(Togglecontext)
    return (<Header onClick={()=>setoggle(!toggle)}
                {...restProp}>
                {children}
                {toggle?(<img src="/images/icons/close-slim.png" alt="Close button"/>):(<img src='/images/icons/add.png'alt="Open Button"/>)}
                </Header>
                )
}

Accordion.Body=function AccordionBody({children,...restProp}){
    const {toggle}=useContext(Togglecontext)
    const text=toggle && <Body {...restProp}>{children}</Body>
    return text
}

