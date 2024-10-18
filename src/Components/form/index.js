import { Container,Text,Title,Base,Input,Link,Button,Error,Small } from "./styles/form"

export default function Form({children,...restProp}){
     return <Container {...restProp}>{children}</Container>
}

Form.Title=function Formtitle({children,...restProp}){
    return <Title {...restProp}>{children}</Title>
}

Form.Base=function Formbase({children,...restProp}){
    return <Base{...restProp}>{children}</Base>
}

Form.Input=function Forminput({...restProp}){
    return <Input {...restProp}/>
}

Form.Button=function Formbutton({children,...restProp}){
    return <Button {...restProp}>{children}</Button>
}

Form.Link=function FormLink({children,...restProp}){
    return <Link {...restProp}>{children}</Link>
}

Form.Error=function Formerror({children,...restProp}){
    return <Error {...restProp}>{children}</Error>
}

Form.Text=function Formtext({children,...restProp}){
    return <Text {...restProp}>{children}</Text>
}

Form.Small=function Formsmall({children,...restProp}){
    return <Small {...restProp}>{children}</Small>
}