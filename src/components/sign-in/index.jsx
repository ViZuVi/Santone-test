import React from "react";
import "./sign-in.scss";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const { isSignInOpen, onCancelClick } = this.props
    return (
      <>
      {isSignInOpen && 
      <div className="form-overlay">
        <div className="form-window">
          <button 
              className="modal-close-btn"
              type="button"
              onClick={onCancelClick}
              >
                <img src="img/close.svg" alt="Закрыть окно"/>
          </button>
          <form
            className="login-form"
            action="#" 
            method="post"
            onSubmit={this.handleSubmit}
          >
            <input className="login-input" type="text" name="login" id="login" placeholder="Login" required=""
              ref={this.loginRef}/>
            <input className="login-input" type="text" name="password" id="password" placeholder="Password" required=""
              ref={this.passwordRef}/>
            <button className="login-submit" type="submit">Sign in</button>
          </form> 
        </div>
      </div>  
      }
    </> 
    )
  }
}
