import { useEffect } from "react";
import { Rating } from "@mui/material";
import Aos from "aos";
const OurCustomers = () => {
  useEffect(() => {
      Aos.init({
        once: true,
        duration: 1200,
      });
    }, []);
    const list = [
        {
          name: "Ibrahim Ahmed",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          rating: 4.5,
          imageLink:
            "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          name: "Omar Mahmoud",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          rating: 5,
          imageLink:
            "https://emilly-store1.myshopify.com/cdn/shop/files/bakery-testi-5.jpg?v=1721992196&width=512",
        },
        {
          name: "Ahmed Saad",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          rating: 4.5,
          imageLink:
            "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ];
      return (
        <section className="flex justify-center mb-8">
          <div className="w-full p-5 md:max-w-[900px] flex flex-col gap-3">
            <h1 className="text-center font-semibold text-xl">
              Our customers  
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {list?.map((item, index) => {
                return (
                  <div data-aos="fade-up"
                  key={index}
                  data-aos-delay={100 + index * 100}
                   className="flex flex-col gap-2 p-4 rounded-lg justify-center items-center border">
                    <img
                      src={item?.imageLink}
                      className="h-32 w-32 rounded-full object-cover"
                      alt=""
                    />
                    <h1 className="text-sm font-semibold">{item?.name}</h1>
                    <Rating
                      size="small"
                      name="customer-rating"
                      defaultValue={item?.rating}
                      precision={item?.rating}
                      readOnly
                    />
                    <p className="text-sm text-gray-500 text-center">
                      {item?.message}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
}

export default OurCustomers