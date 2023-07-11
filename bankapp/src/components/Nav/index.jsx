import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../../actions/actions.jsx'

function Nav() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { userName } = useSelector((state) => state.userProfile)

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }
    return (
		<nav className='main-nav'>
      <Link to="/argentbank/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {!token ? (
        <Link to="/login/" className="main-nav-item">
                <FontAwesomeIcon icon={faCircleUser} className="log_icon"/>
          Sign In
        </Link>
        ) : (
          ''
        )}
                {token ? (
          <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon icon={faCircleUser} className="log_icon"/>
            {userName}
          </Link>
                  ) : (
                    ''
                  )}
                          {token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/argentbank/">
            <FontAwesomeIcon icon={faRightFromBracket} className="log_icon" />
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
		</nav>
    )
}
 
export default Nav