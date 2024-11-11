import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/500/325",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla similique atque repudiandae maiores, animi saepe?",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Card title",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolore incidunt doloribus soluta impedit harum?",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Card title",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, distinctio repudiandae reprehenderit illum laborum veniam.",
	},
	{
		image: "https://picsum.photos/500/325",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ducimus accusantium, numquam consequuntur maxime odio!",
	},
];

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="bg-white p-4 container">
				<Jumbotron />
				<div className="row pt-4">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
