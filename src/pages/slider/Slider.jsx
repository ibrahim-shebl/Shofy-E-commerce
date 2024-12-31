import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Aos from "aos";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });

    fetch("https://berryapp.runasp.net/api/Banner")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center mt-6 text-lg">Loading!</div>;
  }

  return (
    <div className="container overflow-hidden md:p-10 p-5">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}
            data-aos="fade-up"
            data-aos-delay={`${product * 100}`}
            className="px-2">
            <div className="flex gap-4 bg-gradient-to-tr to-[#d9e2f1] from-[#cce7f5] p-7 w-full rounded-xl h-full">
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  <h1 className="md:text-lg text-base font-semibold">{product.productName}</h1>
                  <h1 className="text-gray-600 text-xs md:text-sm max-w-96">
                    {product.description}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <Link to='/shop'>
                    <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-2 rounded-lg">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <img
                  className="h-[4rem] md:h-[9rem]"
                  src={product.catImgPath}
                  alt={product.productName}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderApp;
