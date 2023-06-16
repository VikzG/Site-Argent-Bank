import './style.css'
import Nav from "../../components/Nav/index.jsx"
import Footer from "../../components/Footer/index.jsx"
import SignInForm from '../../components/SigninForm/index'



export default function SignIn() {

	return (
	  <>
		<Nav />
		<main className="main bg-dark">
		  <SignInForm />
		</main>
		<Footer />
	  </>
	)
  }