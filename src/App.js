import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Forms/LoginForm';
import SignupForm from './components/Forms/SignupForm';
import Admin from './components/Admin/Admin';
import Control from './components/Control/Control';
import Records from './components/Records/Records';
import Usage from './components/Usage/Usage';
import Footer from './components/Footer/Footer';

import './App.css';
import './util.css';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<BrowserRouter>
			<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={LoginForm} />
				<Route path="/signup" exact component={SignupForm} />
				<Route path="/admin" exact component={Admin} />
				<Route path="/control" exact component={Control} />
				<Route path="/records" exact component={Records} />
				<Route path="/usage" exact component={Usage} />
				<Route path="/logout" exact />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
