import { Link } from "react-router-dom";
import banner from '../../assets/71Oy86VIHbL._AC_SX679_.jpg'
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full">
        <div className="flex-1 flex flex-col md:gap-10 gap-4">
          <h2 className="text-gray-500 text-xs md:text-base">
            NEW FASHION
          </h2>
          <div className="flex flex-col gap-4">
            <Link to='/'>
              <h1 className="md:text-3xl text-xl font-semibold max-w-[40rem]">
              Welcome to the Shofy Electrical Appliances website. You can buy the appliances you want.
              </h1>
            </Link>
             
          </div>

          <div className="flex items-center gap-4">
            <Link
              to='/shop'
            >
              <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg">
                SHOP NOW
              </button>
            </Link>
          </div>

        </div>
        <div className="">
          <Link>
            <img
              className="h-[14rem] md:h-[23rem]"
              src={banner}
              alt="banner_Img"
            />
          </Link>
        </div>
      </div>
    </div >
  );

}
export default Banner