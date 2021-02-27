import React, { useState } from 'react';
import UserCardModal from './UserCardModal';
import axios from 'axios';

const UserCard = ({ userDetails, singleUser }) => {
	const { email, firstName, lastName, date, _id } = userDetails;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDeleteUser = (user) => {
		axios
			.post('http://10.100.102.2:8080/admin/delete', { data: { user } })
			.then((res) => {
				console.log(res);
				window.location.reload(true);
			});
	};

	return (
		<>
			<div className="basic-form dashboard-card">
				<h1 className="card-header">{`${firstName} ${lastName}`}</h1>
				<h2 className="my-1">Email: {email}</h2>
				<h2>Registration Date: {date}</h2>
				<div className="buttons">
					<button onClick={() => setIsModalOpen(true)}>Update details</button>
					<button className="ml-1" onClick={() => handleDeleteUser(_id)}>
						Delete User
					</button>
				</div>
			</div>
			<UserCardModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				userDetails={userDetails}
			/>
		</>
	);
};

export default UserCard;
