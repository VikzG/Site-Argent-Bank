import './style.css'
import FormInput from "../../components/FormInput/index.jsx"
  
  function Form({ inputs, buttonText }) {
    return (
      <form>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} />
        ))}
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit" >{buttonText} </button>
      </form>
    );
  }
  
  export default Form;