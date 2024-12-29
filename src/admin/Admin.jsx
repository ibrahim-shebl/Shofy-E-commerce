import React ,{useState} from 'react'
import './admin.css'
import { Link, useNavigate } from 'react-router-dom'
import nav_link from '../assets/data/dashboard'
import { toast } from "react-hot-toast";
const Admin = () => {

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  return (
    <section>
      <div className="flex bg-[#f1f5f9] min-h-screen mt-2.5 md:mt-[25px] mb-[35px]">
        <div className="sidebar_dashbord relative p-1.5 md:p-[14px] w-[58px] md:w-[250px] shadow-[0_0_10px_#ddd] bg-white">
          <h3 className='relative text-center md:text-xl text-sm mt-0 md:mb-12 mb-4 text-black'>Shofy</h3>
          <ul className='list-none p-0'>
            {nav_link.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={`flex items-center text-base text-black rounded-lg transition duration-300 mb-[5px] md:p-2 p-1 hover: ${item.active ? 'active' : ''}`} >
                  <i className={item.icon}></i>
                  <span className='text-base ml-2.5'>{item.display}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="admin_contant overflow-hidden w-full">
          <h1 className='m-[20px_20px_40px] text-black relative'>Home Page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:mx-5 md:mb-5 sm:ml-2.5 sm:mr-2.5 sm:gap-2.5">
            {/* Start companies Widget */}
            <div className="companies rounded-xl p-5 bg-white">
              <h2 className='mt-0 mb-2.5 text-black md:text-2xl text-lg'>Center Statistics.</h2>
              <p className='text-gray-700 mt-0 mb-2.5 text-lg'>The number of customers and Products we deal with.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  text-center gap-5 ">
                <div className="border border-gray-300 p-5 text-sm rounded-lg text-black">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                  <span className="block text-black font-bold text-2xl mb-4 ">200</span>
                  Total
                </div>
                <div className="border border-gray-300 p-5 text-sm rounded-lg text-black">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                  <span className="block text-black font-bold text-2xl mb-4 ">200</span>
                  Total
                </div>
                <div className="border border-gray-300 p-5 text-sm rounded-lg text-black">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                  <span className="block text-black font-bold text-2xl mb-4 ">200</span>
                  Total
                </div>
                <div className="border border-gray-300 p-5 text-sm rounded-lg text-black">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                  <span className="block text-black font-bold text-2xl mb-4 ">200</span>
                  Total
                </div>
              </div>
            </div>
            {/* End companies Widget */}
             
          </div>
          
        </div>
      </div>
    </section>

  )
}

export default Admin

