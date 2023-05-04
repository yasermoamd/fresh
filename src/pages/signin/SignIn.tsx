import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
import {Nav} from "../../components";

export const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
	 <div class="flex flex-col ">
		 <Nav />

		 <div class="flex flex-col justify-center items-center">
			 <div class="flex  mt-8">
			 <h1 class="flex  justify-start">Login into your account</h1>
		 </div>
		 <form
			 class="flex flex-col gap-4"
			 action="/api/v1/auth/register"
			 onSubmit={handleSubmit}
		 >
			 <div>
				 <label htmlFor="email" class="text-[#A8A8A8]">
					 Email Addresss
				 </label>
				 <input
					 class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
					 type="text"
					 id="email"
					 name="email"
					 value={email}
					 onChange={(e: any) => setEmail(e.target.value)}
					 placeholder="Type Your Email Address"
					 autoComplete="off"
					 required
				 />
			 </div>
			 <div>
				 <label htmlFor="password" class="text-[#A8A8A8]">
					 Password
				 </label>
				 <input
					 class="w-[325px] block bg-white border rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
					 type="password"
					 id="password"
					 name="password"
					 value={password}
					 onChange={(e: any) =>
						 setPassword(e.target.value)}
					 placeholder="Type Your Password"
					 autoComplete="off"
					 required
				 />
			 </div>
			 <input
				 type="submit"
				 class="bg-[#30BE76] text-white rounded-xl w-[270px] h-[50px] text-[16px] font-bold ml-6"
				 value="Login"
			 />
			 <p class="text-[#A8A8A8] text-center">
				 New to Scratch? <br />{" "}
				 <Link to="/signup">
									<span class="underline text-[#30BE76] font-medium">
										Create Account Here
									</span>
				 </Link>
			 </p>
		 </form>
		 </div>
	 </div>
	);
}; 
