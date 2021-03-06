import React from 'react';


class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			registerEmail: '',
			registerPassword: '',
			registerName: '',
		}
	}

	onEmailChange = (event) => {
		this.setState({ registerEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({ registerPassword: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({ registerName: event.target.value})
	}

	onSubmitSignUp = () => {
		fetch('https://sleepy-atoll-03557.herokuapp.com/register', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.registerEmail,
				password: this.state.registerPassword,
				name: this.state.registerName,
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
		
	}

	render() {
		
			return (
				<article className="br3 ba b--black-10 mv5 h-auto w-100 w-50-m w-25-l mw6 shadow-5 center">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" >Name</label>
				        <input 
				        	className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name"
				        	onChange={this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email address</label>
				        <input 
				        	className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        	autoComplete="email"
				        	onChange={this.onEmailChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        	autoComplete="new-password"
				        	onChange={this.onPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="mt3">
				    	<input 
				    		onClick={this.onSubmitSignUp}
				    		className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
				    		type="submit" 
				    		value="Sign Up"/>
				    </div>
				  </div>
				</article> 
			);
		}

}

export default Register;