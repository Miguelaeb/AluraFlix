import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <section className=" flex flex-col justify-center items-center min-h-[100vh] px-[1.5rem]">
            <div className=" flex flex-row-reverse items-center gap-4 mb-[3.65rem]">
                <h1>AluraFlix</h1>
                <img src="/images/Logo.svg" alt="logo" />
            </div>
            <form
                className=" bg-[#161D2F] w-full py-[2rem] px-[1.5rem] rounded-xl md:w-[25rem]"
                action=""
                onSubmit={handleLogin}>
                <h1 className=" mb-10">Login</h1>
                <div className=" mb-6">
                    <label className=" sr-only hidden">Email:</label>
                    <input
                        className=" loginInput"
                        type="email"
                        value={email}
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=" mb-10">
                    <label className=" sr-only hidden">Password:</label>
                    <input
                        className=" loginInput"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className=" loginButton">Login to your account</button>

                <div className=" flex justify-center gap-2">
                    <p className=" text-[0.9375rem] font-light text-white">
                        Don’t have an account?
                    </p>
                    <Link className=" text-[#FC4747]" to="">
                        Sign Up
                    </Link>
                </div>
            </form>
        </section>
    );
}
