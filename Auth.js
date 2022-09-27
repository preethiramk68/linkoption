import React from "react";
import { Link } from "react-router-dom";






class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleEvent = this.handleEvent.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handlePassw=this.handlePassw.bind(this)
  }

 // handleSubmit(event) {
    //Try to call a REST API call with the username and password
   // alert('A name was submitted: ' + this.state.email);
   // alert('a username was :' + this.state.username);
    //alert('A password was submitted:');

    //event.preventDefault();
 // }//

  handleEvent(event) {
    const newemail = event.target.value
    this.setState({
      email: newemail
    });
    console.log(this.state.email)
  }
  handleName(event) {
    const newname = event.target.value
    this.setState({
      username: newname
    });
    console.log(this.state.username)
  }
  handlePassw(event) {
    const newpassword = event.target.value
    this.setState({
      password: newpassword
    });
    console.log(this.state.password)
  }


  render() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={this.handleEvent}
            />
            <label value={this.state.email}></label>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onChange={this.handleName}
            />
            <label value={this.state.username}></label>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={this.handlePassw}
            />
            <label value={this.state.password}></label>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-Success" >
              <Link to="/tab">SUBMIT</Link>
              

            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
}
export default LoginForm;

