import React, { useState, useEffect, useRef } from 'react';

const SearchBox = ({ users, setIsFiltered, setSingleUser }) => {
	const [search, setSearch] = useState('');
	const [display, setDisplay] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	const handleClick = (e) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(e.target)) {
			setDisplay(false);
		}
	};

	const setSearchTarget = (userToFind) => {
		setSearch(userToFind);
		setDisplay(false);
	};

	const handleSearch = () => {
		console.log(search);
		setSingleUser(search);
		setIsFiltered(true);
	};

	return (
		<div ref={wrapperRef} className="basic-form admin-searchbox">
			<div className="admin-searchbox-auto">
				<input
					type="text"
					id="search"
					value={search}
					placeholder="Type to search user..."
					onClick={() => setDisplay(!display)}
					onChange={(e) => {
						if (e.target.value == '') setIsFiltered(false);
						setSearch(e.target.value);
					}}
				/>
				{display && (
					<div className="auto-results-container">
						{users
							.filter(
								({ firstName }) => firstName.indexOf(search.toLowerCase()) > -1
							)
							.map((user) => {
								return (
									<div
										className="auto-results"
										onClick={() => setSearchTarget(user.firstName)}
										key={user._id}
										tabIndex="0"
									>
										<span>{user.firstName}</span>
									</div>
								);
							})}
					</div>
				)}
			</div>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBox;
