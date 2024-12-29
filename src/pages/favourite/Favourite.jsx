import Container from "../../components/container/Container";
import FavoriteProduct from "./FavoriteProduct";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { resetFavorite } from "../../redux/proSlice";
const Favorite = () => {
  const { favoriteData } = useSelector((state) => state.pro);
  const dispatch = useDispatch();
  const handleFavoriteCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetFavorite());
        Swal.fire(
          "Reset!",
          "Your cart has been reset.",
          "success"
        );
      }
    });
  };
  return (
    <Container>
      {favoriteData?.length > 0 ? (
        <div>
          <div className="border-b border-b-gray-300 py-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Favorite Products
            </h2>
            <p className="mt-2 text-md text-gray-500 max-w-[500px] tracking-wide">
              Welcome to the Shofy website. Here are the products that you liked. Thank you.
            </p>
          </div>
          <div className="my-8 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
              {favoriteData?.map((product) => (
                <FavoriteProduct key={product?.id} product={product} />
              ))}
            </div>
          </div>
          <button
            onClick={handleFavoriteCart}
            className="bg-red-500 text-white w-36 py-3 my-5 rounded-md uppercase text-xs font-semibold hover:text-white duration-200"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="mx-auto my-16 flex max-w-3xl flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Nothing added to Favorite
          </h2>
          <p className="text-lg tracking-wide leading-6 text-gray-500">
            Welcome to the Shofy website. So far, you have not registered any likes for the products. Go to the Shop page, and if you like a product, add it to your favorites. Thank you.
          </p>
          <Link
            to={"/shop"}
            className="w-full mt-2 rounded-md border border-transparent px-8 py-3 text-base font-medium text-amber-900 bg-gray-100 sm:w-auto hover:bg-black hover:text-white duration-200"
          >
            Add Products
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Favorite;
