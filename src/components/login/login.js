import React, { Component } from 'react';

import './login.styles.css';

class Login extends Component {
	constructor() {
		super()
	};
	async componentDidMount()
	{
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");

		var myInput = document.getElementById("pass");
   var letter = document.getElementById("letter");
   var capital = document.getElementById("capital");
   var number = document.getElementById("number");
   myInput.onfocus = function() {
      document.getElementById("checksField").style.display = "block";
   };
   myInput.onblur = function() {
      document.getElementById("checksField").style.display = "none";
   };
   myInput.onkeyup = function() {
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
         letter.classList.remove("wrong");
         letter.classList.add("correct");
      } else {
         letter.classList.remove("correct");
         letter.classList.add("wrong");
      }
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
         capital.classList.remove("wrong");
         capital.classList.add("correct");
      } else {
         capital.classList.remove("correct");
         capital.classList.add("wrong");
      }
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
         number.classList.remove("wrong");
         number.classList.add("correct");
      } else {
         number.classList.remove("correct");
         number.classList.add("wrong");
      }
   };
});

	}
	render() {
		return(
			<>
				<div className="container" id="container">
					<div className="form-container sign-up-container">
						<form className="login_form" action="#" method="POST">
							<h1 className="login-h1">Create Account</h1>
							<div className="social-container">
								<input type="text" name="name" placeholder="Name" required />
								<input type="email" name="email" placeholder="Email" required />
								<input type="password" name="pass" id="pass" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one number and one uppercase and lowercase letter, and at
								least 8 or more characters" required />
								<input type="text" name="mobile" placeholder="Mobile Number" required />
							</div>
							<button className="login_button" type="submit">Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form className="login_form" action="#" method="POST">
							<h1 className="login-h1">Sign in</h1>
							<div class="social-container">
							</div>
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
							<a className="login_a" href="#">Forgot your password?</a>
							<button className="login_button" type="submit">Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1 className="login-h1">StoXkeeper</h1>
								<p className="login-p">Invest with us Today...</p>
								<button class="ghost login_button" id="signIn">Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h2 className="login-h2">Welcome Investor</h2>
								<p className="login-p">Enjoy the world of Market with StoXkeeper</p>
								<button className="ghost login_button" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
	
			</>
		)
	}
}

export default Login;

