import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<div
				id="portal"
				class="bg-contain bg-home_bg">
				<div class="lg:absolute top-[14rem] left-[5rem] py-4">
					<div class="grid content-start md:content-around">
						<div class="flex flex-col">
							<span class="text-[40px]">
								Join over 50 millions people
								<br />
								sharing recipes everyday
							</span>
							<br />
							<span class="">
								Never run out of ideas again. Try new foods,
								ingredients, cooking style, and more
							</span>
						</div>
						<div class="flex justify-between my-8 items-center ">
							<Link to="/signup">
								<div class="border-[#30BE76] border-2 p-2 bg-[#30BE76] text-white w-[239px] h-[50px] 
								            text-[18px] text-center rounded-xl shadow-md">
									<Link
										to="/signup"
										class="border-none"
									>
										Join Fresh
									</Link>
								</div>
							</Link>

							<div class="border-[#30BE76] border-2 p-2 text-[#30BE76] w-[239px] h-[50px] text-[18px] 
							            text-center rounded-xl shadow-md">
								<Link
									to="/about"
									class="pl-[17px] border-none"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
