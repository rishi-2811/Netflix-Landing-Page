import { Inner,Item,Container,Title,Subtitle,Image,Pane } from "./styles/jumbotron"

export default function Jumbotron({children,direction='row',...restProps}){
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}
Jumbotron.Container=({children,...restProps})=>{
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title=({children,...restProps})=>{
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.Subtitle=({children,...restProps})=>{
    return <Subtitle {...restProps}>{children}</Subtitle>
}
Jumbotron.Image=({...restProps})=>{
    return <Image {...restProps}/>
}
Jumbotron.Pane=({children,...restProps})=>{
    return <Pane {...restProps}>{children}</Pane>
}