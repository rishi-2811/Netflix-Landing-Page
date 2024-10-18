import { Container,Title,Link,Inner,Text} from "./styles/footer"

export default function Footer({children,...restProp}){
    return <Container {...restProp}>{children}</Container>
}

Footer.Title=({children,...restProp})=>{
    return <Title {...restProp}>{children}</Title>
}

Footer.Inner=({children,...restProp})=>{
    return <Inner {...restProp}>{children}</Inner>
}

Footer.Link=({children,...restProp})=>{
    return <Link {...restProp}>{children}</Link>
}

Footer.Text=({children,...restProp})=>{
    return <Text {...restProp}>{children}</Text>
}