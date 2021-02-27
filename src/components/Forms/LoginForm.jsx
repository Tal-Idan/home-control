import React from 'react';

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
	const handleLogin = () => {
		setIsLoggedIn(!isLoggedIn);
		console.log(isLoggedIn);
	};
	return (
		<div className="basic-form text-light shadow">
			<form>
				<ul>
					<h1>Log in</h1>
					<li></li>
					<li>
						<label for="email">Email</label>
						<input type="text" name="email" autofocus required />
						<div class="email error my-1"></div>
					</li>
					<li>
						<label for="password">Password</label>
						<input type="password" name="password" required />
						<div class="password error my-1"></div>
					</li>
					<li class="checkbox">
						<label for="remember">Remember Me</label>
						<input type="checkbox" class="remember" name="remember"></input>
					</li>
					<button onClick={handleLogin}>Log in</button>
				</ul>
			</form>
		</div>
	);
};

export default LoginForm;
