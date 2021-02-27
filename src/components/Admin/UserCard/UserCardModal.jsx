import React, { useState } from 'react';
import axios from 'axios';

const UserCardModal = ({ open, onClose, userDetails }) => {
	const { email, firstName, lastName, _id } = userDetails;
	const [newDetails, setNewDetails] = useState({
		id: _id,
		newFirstName: firstName,
		newLastName: lastName,
		newEmail: email,
	});

	const handleUpdateUser = (user) => {
		axios
			.post('http://10.100.102.2:8080/admin/update', { data: { user } })
			.then((res) => {
				console.log(res);
				window.location.reload(true);
			});
	};

	if (!open) return null;
	return (
		<>
			<div className="modal-overlay"></div>
			<div className="modal-content basic-form">
				<h1>Update User Details</h1>
				user id: {_id}
				<ul>
					<li></li>
					<li>
						<label htmlFor="newFirstName">First Name</label>
						<input
							type="text"
							name="newFirstName"
							id="newFirstName"
							value={newDetails.newFirstName}
							onChange={(e) =>
								setNewDetails({ ...newDetails, newFirstName: e.target.value })
							}
						/>
					</li>
					<li>
						<label htmlFor="newLastName">Last Name</label>
						<input
							type="text"
							name="newLastName"
							id="newLastName"
							value={newDetails.newLastName}
							onChange={(e) =>
								setNewDetails({ ...newDetails, newLastName: e.target.value })
							}
						/>
					</li>
					<li>
						<label htmlFor="newEmail">Email</label>
						<input
							type="email"
							name="newEmail"
							id="newEmail"
							value={newDetails.newEmail}
							onChange={(e) =>
								setNewDetails({ ...newDetails, newEmail: e.target.value })
							}
						/>
					</li>
					<li></li>
				</ul>
				<button onClick={onClose} onClick={() => handleUpdateUser(newDetails)}>
					Update
				</button>
				<button className="ml-1" onClick={onClose}>
					Cancel
				</button>
			</div>
		</>
	);
};

export default UserCardModal;
