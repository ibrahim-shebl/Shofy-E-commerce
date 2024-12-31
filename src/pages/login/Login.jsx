import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import logo from '../../assets/logo.png';
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://mohmed.testworks.top/public/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        const accessToken = data.data.token;
        const user = data.data.user;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', true);  

        navigate('/');
        toast.success('SignIn Successfully');
      } else {
        console.log("error in signin:", data.message);
        toast.error('SignIn Failed', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <img className="h-12" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
          <h1 className="font-bold text-xl">Login With Email</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user-email"
              id="user-email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="user-password"
              id="user-password"
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Button type="submit" className='bg-blue-500 text-white'>
              Login
            </Button>
          </form>
          <div className="flex justify-between">
            <Link to='/signup'>
              <Button className="font-semibold text-sm text-blue-700">
                New? Create Account
              </Button>
            </Link>
            <Link to=''>
              <Button className="font-semibold text-sm text-blue-700">
                Forget Password?
              </Button>
            </Link>
          </div>
          <hr />
          <Button className='bg-gray-300'>
            Sign In With Google
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Login;