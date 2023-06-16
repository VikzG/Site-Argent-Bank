import './style.css'

const Button = ({ onClick, className, children }) => {
    return (
      <button className="transaction-button" onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;