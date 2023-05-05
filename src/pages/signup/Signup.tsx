import { useState } from "preact/hooks";
import { Link } from 'react-router-dom';
import { Nav } from "../../components";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, seteName] = useState("");
    const [password, setPassord] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <div>
            <Nav />
            <div class="flex flex-col justify-center items-center">
                {/* page title */}
                <div class="max-h-screen mt-[12rem] sm:mt-[3rem] mb-[2rem] bg-white shadow-2xl w-[60rem] h-[33rem]">
                    <div class="flex justify-around items-center">
                        <div class="flex justify-center items-center w-[30rem]">
                            {/*  */}
                            <div class="md:flex items-center justify-center gap-2 hidden">
                                <Link to="/">
                                    <img
                                        class="w-[17px] h-[26px]"
                                        src="https://i.ibb.co/FYWV183/loco-icon.png"
                                        alt="freshLemon"
                                    />
                                </Link>
                                <h1 class="text-[16px] text-black font-bold">
										<span class="text-[#F8B449]">
											Fresh
										</span>
                                </h1>
                            </div>
                        </div>
                        {/* preact form */}
                        <div class="flex flex-col justify-around items-center gap-4 w-[30rem]">
                            <div class="mt-4">
                                <h2 class="text-[24px] text-[#030F09] font-bold font-serif leading-8">
                                    Start from Scratch
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit} class="flex flex-col gap-3 p-4 mt-2 w-[30rem] h-[26rem]">
                                 <div class="flex flex-col gap-1">
                                     <label htmlFor="fullname">Full Name</label>
                                     <input
                                         class="border-b outline-none rounded-md h-[35px] text-[20px]"
                                         name="fullname"
                                         type="text"
                                         value={name}
                                         onChange={(e: any) => seteName(e.target.value)}
                                     />
                                 </div>
                                <div class="flex flex-col gap-1">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        class="border-b outline-none rounded-md h-[35px] text-[20px]"
                                        name="email"
                                        type="text"
                                        value={email}
                                        onChange={(e: any) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div class="flex flex-col gap-1">
                                     <div class="flex justify-between items-center">
                                         <label htmlFor="password">Password</label>
                                         <Link to="#" class="hover:underline">Forgot password?</Link>
                                     </div>
                                    <input
                                        class="border-b outline-none rounded-md h-[35px] text-[25px]"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e: any) => setPassord(e.target.value)}
                                    />
                                </div>
                                <div class="flex flex-col justify-center items-center gap-6 mt-6">
                                    <input
                                        type="submit"
                                        class="bg-[#30BE76] text-white rounded-xl w-[270px] h-[50px] text-[16px] font-bold ml-6"
                                        value="Create an account"
                                    />
                                    <p class="text-[#A8A8A8] text-center">
                                        New to Scratch? <br />{" "}
                                        <Link to="/signin">
									<span class="underline text-[#30BE76] font-medium">
										Create Account Here
									</span>
                                        </Link>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};