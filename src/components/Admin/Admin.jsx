import React, { useState, useEffect } from 'react';
import UserCard from './UserCard/UserCard';
import SearchBox from './SearchBox';

import axios from 'axios';

const Admin = () => {
	const [userList, setUserList] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [singleUser, setSingleUser] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = () => {
		axios
			.get('http://10.100.102.2:8080/admin')
			.then((res) => {
				const users = res.data.allUsers;
				setUserList(users);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="text-light">
			<div className="admin-header">
				<h1 className="text-center shadow my-1">ADMIN PAGE</h1>
				<SearchBox
					users={userList}
					setIsFiltered={setIsFiltered}
					setSingleUser={setSingleUser}
				/>
			</div>
			{isFiltered
				? userList.map((user) => {
						if (user.firstName == singleUser)
							return <UserCard key={user._id} userDetails={user} />;
				  })
				: userList.map((user) => {
						return <UserCard key={user._id} userDetails={user} />;
				  })}
		</div>
	);
};

export default Admin;
