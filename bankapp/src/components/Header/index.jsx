import './style.css'
import Button from "../../components/Button/index.jsx"


function Header() {
  const handleEditClick = () => {
    // Logique de manipulation du clic du bouton
  };

    return (
		<div className='header'>
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <Button className="edit-button" onClick={handleEditClick}>
        Edit name
      </Button>
		</div>
    )
}
 
export default Header