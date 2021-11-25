import React, { useState } from "react";

const SearchBox = ({ onSubmitSearch }) => {
	const [searchTerm, setSearhTerm] = useState("");

	const handleOnChange = (e) => {
		setSearhTerm(e.target.value);
	};

	return (
		<div>
			<input
				style={{
					height: 30,
					borderRadius: "0.5rem",
					border: "1px solid lightgrey",
					padding: "0.3rem",
					paddingRight:"1rem"
				}}
				type="search"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleOnChange}
			/>
			<button
				style={{
					cursor: "pointer",
					marginLeft: "-1rem",
					borderRight: "1px solid lightgrey",
					border: "none",
					borderTop: "1px solid lightgrey",
					borderBottom: "1px solid lightgrey",
					height: 30,
					borderTopRightRadius: "0.5rem",
					borderBottomRightRadius: "0.5rem",
				}}
				onClick={() => onSubmitSearch(searchTerm)}
			>
				search
			</button>
		</div>
	);
};

export default SearchBox;
