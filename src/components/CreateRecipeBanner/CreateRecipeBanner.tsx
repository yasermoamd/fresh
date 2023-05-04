import {useState} from "preact/hooks";
import { AiOutlineCloseCircle } from 'react-icons/ai';
type CreateRecipeProps = {
	followers: number;
};

export const CreateRecipeBanner = (props: CreateRecipeProps) => {
	const [showCreatePost, setShowCreatePost ] = useState(false)
	return (
		<div class="bg-white w-[431px] h-[60px] flex rounded-lg">
			<div class="flex container justify-between items-center m-4">
				<div class="">
					<p class="text-[#030F09] text-[18px] leading-[20px] font-serif">
						{props.followers} of your followers are online
					</p>
				</div>
				<div class="">
					<button class="bg-[#30BE76] text-white w-[128px] h-[36px] 
				font-serif font-bold leading-4 text-[14px] text-center rounded-lg shadow-lg"
					onClick={() => setShowCreatePost((!showCreatePost))}
					>
 							Create Recipe
 					</button>
					<div class="">
						{
							showCreatePost ?  <CreateRecipe /> : null
						}
					</div>
				</div>
			</div>
		</div>
	);
};

function CreateRecipe() {
	return (
		<div class="absolute top-[6rem] left-[30rem] bg-white w-[400px] h-[400px]">
			<div class="flex justify-end my-2 mx-4">
				<AiOutlineCloseCircle class="w-6 h-6" />
			</div>
		</div>
	)
}