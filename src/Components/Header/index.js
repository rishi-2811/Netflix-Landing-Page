import {Link} from 'react-router-dom'
import { Background,Logo,Frame,Button } from './styles/header'
export default function Header({children,sign=false,...restProp}){
    return <Background sign={sign} {...restProp}>{children}</Background>
}

Header.Frame=function HeaderFrame({children,...restProp}){
    return <Frame {...restProp}>{children}</Frame>
}

Header.Logo=function HeaderLogo({to,children,...restProp}){
    return (
        <Link to={to}>
            <Logo {...restProp}>{children}</Logo>
        </Link>
    )
}

Header.Button=function HeaderLogo({to,children,...restProp}){
    return (
        <Link to={to}>
            <Button {...restProp}>{children}</Button>
        </Link>
    )
}