import { Header, ProfileCard, ProfileSettings, CategoryCardList } from "../../components";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<>
			<div class="">
				<Header />
				<div class="bg-[#F2F2F2]">
					<div class="container mx-auto ">
						<div class="flex flex-row  mx-40">
							<div class="flex flex-col gap-10 m-8">
								<ProfileCard
									followers={122}
									likes={123}
									recipes={22}
									saved={75}
									following={285}
								/>
								<ProfileSettings />
							</div>
							<div class="flex flex-col w-full mx-16 m-8">
								<div class="flex justify-between">
									<div>
										<h2 class="text-2xl font-bold text-[#030F09]">
											My Recipes
										</h2>
									</div>

									<div class="flex justify-center gap-2 font-bold items-center border-[#30BE76] 
						                  border-2 p-2 text-[#30BE76] w-[139px] h-[50px] sm:w-[156px] sm:h-[36px] text-[18px] text-center rounded-xl shadow-md">
										<img
											src="/icon/add_icon.svg"
											class="w-[24px]"
											alt="save"
										/>
										<Link
											to="/recipe"
											class="pl-[17px] border-none"
										>
											Add New
										</Link>
									</div>
								</div>
								<div class="flex flex-row gap-4">
									<CategoryCardList />
								</div>
								<div class="flex flex-row gap-12"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
