import "./styles.css";

const Card = ({ data }) => {
	return (
		<div
		className="grid-item"
			style={{
				borderRadius: "1rem",
				overflow:"hidden",
				 boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
				 marginBottom: "1%",
			}}
		>
			<img alt="product" src={data.image} width="100%" />
			<div style={{ padding: "1rem" }}>
				<div style={{fontFamily: "Arial", fontWeight:800}}>{data.name}</div>
				<div style={{fontFamily: "Arial", color:"#878484", marginTop:5}}>{data.description}</div>
			</div>
		</div>
	);
};

export default Card;
