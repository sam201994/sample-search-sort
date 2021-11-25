import React from "react";

const SearchBox = ({ handleSort }) => {
	return (
		<div style={{display:"flex"}}>
			<select
				style={{
					height: 30,
					borderRadius: "0.5rem",
					border: "1px solid lightgrey",
					padding: "0.3rem",
					paddingRight: "1rem",
				}}
				name="Sort By"
				id="sortBy"
				onChange={handleSort}
			>
			 <option value="" disabled selected hidden>Select Sort Order</option>
				<option value="name">Name</option>
				<option value="dateLastEdited">Last Modified</option>
			</select>
		</div>
	);
};

export default SearchBox;
