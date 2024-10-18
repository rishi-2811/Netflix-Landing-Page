import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer } from "../containers/Accordion"
import { HeaderContainer } from "../containers/header"
export default function Home(){
    return (
        <>
          <HeaderContainer/>
          <JumbotronContainer/>
          <FaqsContainer/>
          <FooterContainer/>
        </>
    )
}