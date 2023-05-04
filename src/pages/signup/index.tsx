import { useState } from "preact/hooks";
import { Link } from 'react-router-dom';
import { Nav } from "../../components";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<div>
			<Nav />
			<div class="flex justify-center items-center">
				<form
					class="flex flex-col gap-4"
					action="/api/v1/auth/register"
					onSubmit={handleSubmit}
				>
					<label htmlFor="name" class="text-[#A8A8A8]">
						Full Name
					</label>
					<input
						class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e: any) =>
							setName(e.target.value)}
						placeholder="Type Your full name"
						autoComplete="off"
						required
					/>
					<label htmlFor="email" class="text-[#A8A8A8]">
						Email Address
					</label>
					<input
						class="w-[325px] block bg-white border  rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e: any) =>
							setEmail(e.target.value)}
						placeholder="Type Your Email Address"
						autoComplete="off"
						required
					/>
					<label
						htmlFor="password"
						class="text-[#A8A8A8]"
					>
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
					<input
						type="submit"
						class="bg-[#30BE76] text-white rounded-xl w-[270px] h-[50px] text-[16px] font-bold ml-6"
						value="Create an account"
					/>
					<p class="text-[#A8A8A8] text-center">
						Already have an account? <br />{" "}
						<Link to="/signin">
										<span class="underline text-[#30BE76] font-medium">
											Login Here
										</span>
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};