import './style.css'
import Nav from "../../components/Nav/index.jsx"
import Footer from "../../components/Footer/index.jsx"
import UserHeader from '../../components/UserHeader/index.jsx'
import Account from "../../components/Account/index.jsx"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'



function Profile() {
	let navigate = useNavigate()

  	const { token } = useSelector((state) => state.userLogin)
 
  useEffect(() => {
    if (!token) {
      navigate('/argentbank')
    }
  }, [token, navigate])
    return (
		<div className='profile'>
			<Nav />
			<main className='main bg-dark'>
				<UserHeader />
				<Account />
				<Account />
				<Account />
				</main>
			<Footer />
		</div>
    )
}
 
export default Profile