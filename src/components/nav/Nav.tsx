import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<div class="bg-[#30BE76] h-[50px] lg:p-4 lg:flex md:flex items-center justify-around">
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
				<Link to="/signin">Signin</Link>
				<Link to="/feed">Feed</Link>
			</nav>
		</div>
	);
};
