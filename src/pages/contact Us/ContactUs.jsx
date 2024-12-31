import ImgAnimation from './img_animation/ImgAnimation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from './contact.module.css';

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataObj = new FormData();
        formDataObj.append('Name', formData.Name);
        formDataObj.append('Email', formData.Email);
        formDataObj.append('Description', formData.Description);

        try {
            const response = await axios.post("https://berryapp.runasp.net/api/ContactUs", formDataObj);

            if (response.status === 200) {
                toast.success("تم إرسال الرسالة بنجاح");
                setFormData({ Name: '', Email: '', Description: '' });  
                navigate('/contact');  
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("حدث خطأ أثناء إرسال الرسالة");
        }
    };

    return (
        <div className='container'>
            <section dir="ltr" className='text-black'>
                <div className="pt-5 pb-5 px-sm-5">
                    <h3 className="text-black text-3xl my-3">Contact Us</h3>
                    We are happy to contact us.
                    <br />
                    We will respond to you as soon as you request.
                    <div className="flex flex-wrap pt-3 items-center">
                        <div className="w-full md:w-1/2">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        required
                                        type="text"
                                        className="w-full bg-[#F4B318] py-1.5 px-4 outline-none placeholder:text-black dark:placeholder-white focus:placeholder-black focus:ring-main-color"
                                        name="Name"
                                        placeholder="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-[#F4B318] py-1.5 px-4 outline-none placeholder:text-black dark:placeholder-white focus:placeholder-black focus:ring-main-color"
                                        name="Email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        required
                                        className="w-full bg-[#F4B318] py-1.5 px-4 outline-none placeholder:text-black dark:placeholder-white focus:placeholder-black focus:ring-main-color"
                                        name="Description"
                                        rows="5"
                                        placeholder="Message"
                                        value={formData.Description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="bg-[#F4B318] text-black dark:text-white py-1.5 px-8 rounded-full transition duration-300 ease-in-out hover:text-white">Send</button>
                            </form>
                        </div>

                        <div className={`${styles.imgUptated} pr-0 mt-16 md:mt-5 md:pl-48 md:w-1/2 `}>
                            <ImgAnimation />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
