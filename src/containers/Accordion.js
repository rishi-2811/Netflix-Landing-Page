import Accordion from "../Components/Accordion";
import faqsData from '../fixtures/faqs.json'
import { Emailformcontainer } from "../containers/emailform"
export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {
                faqsData.map(item=>(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
            <Emailformcontainer/>
        </Accordion>
    )
}