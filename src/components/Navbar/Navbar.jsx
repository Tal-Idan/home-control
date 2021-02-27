import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
	return (
		<div className="nav container">
			{!isLoggedIn ? (
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>|</li>
					<li>
						<Link to="/signup">Sign up</Link>
					</li>
				</ul>
			) : (
				<div className="logged-navbar">
					<h3 id="logged-user">Welcome, user!</h3>
					<ul className="logged-items">
						<li className="admin">
							<Link to="/admin">Admin</Link>
						</li>
						<li>
							<Link to="/control">Home Control</Link>
						</li>
						<li>
							<Link to="/records">Records</Link>
						</li>
						<li>
							<Link to="/usage">Usage</Link>
						</li>
						<li>
							<Link to="/">Logout</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
