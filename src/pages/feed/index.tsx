import {ProfileCard, CreateRecipeBanner, LiveCooking, RecipeCard, MostActiveUser, CustomFooter} from "../../components";

export const Feed = () => {
	return (
		<>
			<div class="bg-[#F2F2F2]">
				<div class="container mx-auto">
					<div class="flex flex-row justify-around">
						<div class="mt-6">
							<ProfileCard followers={122} likes={123} />
						</div>
						<div class="flex flex-col items-center mt-6 gap-8">
							<CreateRecipeBanner followers={128} />
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
						</div>
						<div class="flex flex-col gap-6 mt-6">
							<LiveCooking full_name="Nick Evans" />
							<MostActiveUser
								profile_img="/img/profile_img.png"
								userId="13489108497"
								first_name="Tamaki"
							/>
							<CustomFooter />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

/**

					<div class="flex flex-row justify-around">
						<div>
							<ProfileCard followers={122} likes={123} />
						</div>
						<div class="flex flex-col items-center">
							<CreateRecipeBanner followers={128} />
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
							<RecipeCard
								like={13}
								comments={21}
								recipe_title="Tofu Salad Ginger Garlic"
								recipe_description="I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ..."
								first_name="Tamaki"
								last_name="Ryushi"
								profile_img="/img/profile_img.png"
								recipe_img="/img/recipe_card_img.png"
								createdAtByHour={12}
							/>
						</div>
						<div class="flex flex-col gap-4">
							<LiveCooking full_name="Nick Evans" />
							<MostActiveUser
								profile_img="/img/profile_img.png"
								userId="13489108497"
								first_name="Tamaki"
							/>
							<CustomFooter />
						</div>
					</div>
 */
