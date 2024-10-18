
import { Container,Text,Input,Button,Pane } from "./styles/emailForm"

export default function Emailform({children,...restProp}){
    return <Container {...restProp}>{children}</Container>
}

Emailform.Text=function formText({children,...restProp}){
    return <Text {...restProp}>{children}</Text>
}

Emailform.Input=function formInput({...restProp}){
    return <Input {...restProp}/>
}

Emailform.Button=function formButton({children,...restProp}){
    return <Button {...restProp}>{children} <img src="/images/icons/chevron-right.png" alt=""/></Button>
}

Emailform.Pane=function formPane({children,...restProp}){
    return <Pane {...restProp}>{children}</Pane>
}