import { Link } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div class="bg-[#30BE76] lg:p-4 flex justify-around">
				<div class="flex items-center gap-2 justify-center">
					<img
						class="mt-2"
						src="https://i.ibb.co/FYWV183/loco-icon.png"
						alt="freshLemon"
					/>

					<h1 class="text-[16px] font-bold font-serif text-white">
						<Link to="/">
							Freshlemon
						</Link>
					</h1>
				</div>
				<nav class="flex gap-8 text-[16px] text-white">
					<Link to="/">AFQ</Link>
					<Link to="/">Career</Link>
					<Link to="/">Contact Us</Link>
				</nav>
			</div>

			{/* content */}
			<div class="text-center my-20">
				<div class="grid grid-cols-3 gap-4 mx-20">
					<div class="bg-blue-100 h-[120px] my-10 text-center">
						Icon 1
					</div>
					<div class="bg-blue-200 h-[120px] my-10 text-center">
						Icon 2
					</div>
					<div class="bg-blue-300 h-[120px] my-10 text-center">
						Icon 3
					</div>
					<div class="bg-blue-400 h-[120px] my-10 text-center">
						Icon 4
					</div>
					<div class="bg-blue-500 h-[120px] my-10 text-center">
						Icon 5
					</div>
					<div class="bg-blue-600 h-[120px] my-10 text-center">
						Icon 6
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
