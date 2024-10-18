import Emailform from "../Components/emailForm";

export function Emailformcontainer({header}){
    return (
        <Emailform>
            <Emailform.Text>Ready to watch? Enter your email to create or restart your membership.</Emailform.Text>
            <Emailform.Pane>
                <Emailform.Input placeholder='Email Address'/>
                <Emailform.Button header={header}>Get Started</Emailform.Button>
            </Emailform.Pane>
        </Emailform>
    )
}