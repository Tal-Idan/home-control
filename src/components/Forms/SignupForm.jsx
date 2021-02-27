import React from 'react';

const SignupForm = ({ isLoggedIn, setIsLoggedIn }) => {
	const handleSignup = () => {
		setIsLoggedIn(!isLoggedIn);
		console.log(isLoggedIn);
	};
	return (
		<div className="basic-form text-light shadow">
			<form>
				<h1>Sign up</h1>
				<li></li>
				<ul>
					<li>
						<label for="firstname">First Name</label>
						<input type="text" name="firstname" autofocus required />
					</li>
					<li>
						<label for="lastname">Last Name</label>
						<input type="text" name="lastname" required />
					</li>
					<li>
						<label for="email">Email</label>
						<input type="email" name="email" required />
						<div class="email error"></div>
					</li>
					<li>
						<label for="password">Password</label>
						<input type="password" name="password" required />
						<div class="password error"></div>
					</li>
					<li>
						<label for="password2">Re-enter password</label>
						<input type="password" name="password2" required />
					</li>
					<button onclick={handleSignup}>Sign up</button>
				</ul>
			</form>
		</div>
	);
};

export default SignupForm;
