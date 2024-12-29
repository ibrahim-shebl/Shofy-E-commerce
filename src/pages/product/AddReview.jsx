import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { Rating } from "@mui/material";
import axios from 'axios';
import toast from "react-hot-toast";
const AddReview = () => {
    const [name, setName] = useState('');
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        const body = {
            name: name,
            rate: rate,
            description: description
        };

        try {
            const response = await axios.post('http://berryapp.runasp.net/api/Reviews', body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Review Saved successfully!");

            setName('');
            setRate(0);
            setDescription('');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review. Please try again.');
        }
    };

    return (
        <div className="flex flex-col gap-3 p-3 rounded-xl border w-full">
            <h1 className="text-lg font-semibold">Rate This Product</h1>
            <input
                placeholder="Enter Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
            />
            <Rating
                value={rate}
                onChange={(e, newValue) => setRate(newValue)}
            />
            <textarea
                type="text"
                rows="5"
                placeholder="Enter your thoughts on this product ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-lg px-4 py-2 focus:outline-none"
            />
            <Button className='bg-gray-300 py-6 rounded-xl' onPress={handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default AddReview;
