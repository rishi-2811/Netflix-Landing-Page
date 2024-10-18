import Header from "../Components/Header"
import Form from "../Components/form"
import Footer from "../Components/footer";
import { useState ,useContext} from "react"
import { FirebaseContext } from "../context/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default function SignUp(){
    const [error,seterror]=useState(null)
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [name,setname]=useState('')
    const Navigate=useNavigate()
    const {firebase}=useContext(FirebaseContext)
    const auth=getAuth(firebase)

    const Handlesubmit=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email, password)
                .then(reults=>{
                    return updateProfile(reults.user,{
                        displayName:name,
                        photoUrl:Math.floor(Math.random()*5)+1
                })
                })
                .then(()=>{
                    setname('')
                    setemail('')
                    setpassword('')
                    seterror('')
                    Navigate('/browse')
                })
                .catch(error=>seterror(error.message))
                
    }

    return (
        <>
        <Header sign={true}>
            <Header.Frame>
            <Header.Logo to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="276.742" viewBox="0 0 1024 276.742"><path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" fill="#d81f26"/></svg>
                </Header.Logo>
            </Header.Frame>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>error</Form.Error>}
                <Form.Base onSubmit={Handlesubmit}>
                    <Form.Input type="text" placeholder="Name"
                     value={name} onChange={(e)=>setname(e.target.value)} 
                     required/>
                    <Form.Input type="email" placeholder="Email"
                     value={email} onChange={(e)=>setemail(e.target.value)} 
                     required/>
                    <Form.Input type="password" placeholder="Password" 
                    value={password} onChange={(e)=>setpassword(e.target.value)}
                    required/>
                    <Form.Button type="submit">Sign Up</Form.Button>
                    <Form.Text>Already an User, <Form.Link to="/signin">Sign in Now</Form.Link></Form.Text>
                    <Form.Small>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.Small>
                </Form.Base>
            </Form>
        </Header>
        <Footer>
            <Footer.Title>Questions?Contact Us</Footer.Title>
            <Footer.Inner>
            <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
            </Footer.Inner>
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
        </>
    )
}