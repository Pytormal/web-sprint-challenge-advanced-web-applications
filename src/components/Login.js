import React, {useEffect } from 'react';
import axios from 'axios';


class LoginForm extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	};
	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			},
		});
  };
  
 

	login = (e) => {
		// make a post request to retrieve a token from the api
		// when you have handled the token, navigate to the BubblePage route
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/colors', this.state.credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				this.props.history.push('/colors');
			});

		useEffect(() => {
			axios
				.delete(`http://localhost:5000/api/colors/1`, {
					headers: {
						authorization:
							'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98',
					},
				})
				.then((res) => {
					axios
						.get(`http://localhost:5000/api/colors`, {
							headers: {
								authorization: '',
							},
						})
						.then((res) => {
							console.log(res);
						});
					console.log(res);
				});
    });

   
  };
  

	render() {
		return (
			<>
				<h1>
					Welcome to the Bubble App!
					<form onSubmit={this.login}>
						<p>Log In Here</p>
						<input
							type='username'
							name='username'
							value={this.state.credentials.username}
							onChange={this.handleChange}
              placeholder='user name'
              text= 'username'
						/>
						<input
							type='password'
							name='password'
							value={this.state.credentials.password}
							onChange={this.handleChange}
              placeholder='password'
              text= 'password'
						/>
						<button
							type='submit'
							id='submit'
							name='submit'
						>
							Submit
						</button>
					</form>
				</h1>
			</>
		);
	}
}

export default LoginForm;

//Task List:
//1. Build a form containing a username and password field.

//2. Add whatever state nessiary for form functioning.

//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.

//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
