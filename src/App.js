import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ProductDetails from "./pages/product/ProductDetails";
import ContactUs from "./pages/contact Us/ContactUs";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Favourite from "./pages/favourite/Favourite";
import PersonalPage from "./pages/profile/PersonalPage";
import Portfolio from "./pages/profile/Portfolio";
import Help from "./pages/profile/Help";
import Admin from "./admin/Admin";
import ProtectedRouteUser from "./pages/profile/ProtectedRouteUser";
import ProtectedRouteAdmin from "./pages/login/ProtectedRouteAdmin ";
import CheckoutBtn from "./components/checkout/CheckoutBtn";
import NotFound from "./pages/notfound/NotFound";
function App() {

   return (
      <>
         <Router>
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path='/product/:id' element={<ProductDetails />} />
                  <Route path='/contact' element={<ContactUs />} />
                  <Route path='/shop' element={<Shop />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/favourite' element={<Favourite />} />
                  <Route path="*" element={<NotFound />} />
                  <Route element={<ProtectedRouteAdmin />}>
                     <Route path="/admin" element={<Admin />} />
                  </Route>

                   
                     <Route path='/cart' element={<Cart />} />
                     
                     <Route path='' element={<CheckoutBtn />} />
                     <Route path="" element={<PersonalPage />}>
                        <Route path="/information" element={<Portfolio />} />

                        <Route path="/help" element={<Help />} />
                     </Route>
                 
               </Routes>
            </Layout>
         </Router>
      </>
   );
}

export default App;
