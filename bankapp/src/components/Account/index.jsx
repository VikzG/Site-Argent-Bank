import './style.css'
import Button from "../../components/Button/index.jsx"


function Account() {
  const handleEditClick = () => {
    
  };

    return (
<div className="account">
  <div className="account-content-amount">
    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
    <p className="account-amount">$2,082.79</p>
    <p className="account-amount-description">Available Balance</p>
  </div>
  <div className="account-content-wrapper">
    <Button className="transaction-button" onClick={handleEditClick}>
        View transactions
      </Button>
  </div>
</div>
    )
}
 
export default Account