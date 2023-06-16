import './style.css'
import Nav from "../../components/Nav/index.jsx"
import Footer from "../../components/Footer/index.jsx"
import Account from "../../components/Account/index.jsx"


function Transactions() {
    return (
		<div className='transactions'>
			<Nav />
			<main className='main bg-dark'>
			<Account />
			</main>
			<Footer />

		</div>
    )
}
 
export default Transactions