import React, { useEffect, useState } from 'react';
import { Rating } from "@mui/material";
import img from '../../assets/user-icon.png';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://berryapp.runasp.net/api/Reviews');
                const allReviews = response.data;
                const lastFourReviews = allReviews.slice(-4);
                setReviews(lastFourReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="flex flex-col gap-3 p-3 rounded-xl border w-full">
            <h1 className="text-lg font-semibold">Reviews</h1>
            <div className="flex flex-col gap-4">
                {reviews.map((review) => (
                    <div key={review.id} className="flex gap-3">
                        <div>
                            <img src={img} alt='review_img' className="w-12 h-12 rounded-full" />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-semibold">{review.name}</h1>
                                    <Rating value={review.rate} readOnly size="small" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 pt-1">{review.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
