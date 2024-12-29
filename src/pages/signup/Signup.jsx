import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import toast from "react-hot-toast";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    async function signup() {
        if (!name || !email || !password || !phone) {
            alert("Please fill in all fields");
            return;  
        }
    
        let item = { name, email, password, phone };
        let result = await fetch("https://mohmed.testworks.top/public/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        });
    
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem("userEmail", email);
        let Email = result.data.user.email;
        console.log(Email);  
        toast.success('SignUp Successfully')
        navigate("/");
    }
    return (
        <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="h-12" src={logo} alt="Logo" />
                </div>
                <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
                    <h1 className="font-bold text-xl">Sign Up With Email</h1>
                    <form
                        className="flex flex-col gap-3"
                    >
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required  
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <input
                            placeholder="Enter Your Email"
                            type="email"
                            name="user-email"
                            id="user-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <input
                            placeholder="Enter Your Phone"
                            type="number"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <input
                            placeholder="Enter Your Password"
                            type="password"
                            name="user-password"
                            id="user-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="px-3 py-2 rounded-xl border focus:outline-none w-full"
                        />
                        <button
                            id='send'
                            onClick={signup}
                            className='bg-blue-500 text-white py-2'
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="flex justify-between">
                        <Link to='/login'>
                            <button className="font-semibold text-sm text-blue-700">
                                Already user? Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup