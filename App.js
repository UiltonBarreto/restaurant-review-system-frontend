import Header from "./pages/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUserForm from "./userComponent/AddUserForm";
import UserLoginForm from "./userComponent/UserLoginForm";
import AddReview from "./ReviewComponent/AddReview";
import Restaurant from "./pages/Restaurant";
import AddRestaurant from "./pages/AddRestaurant";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/product/categories" element={<HomePage />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/customer/register" element={<AddUserForm />} />
        <Route path="/user/admin/register" element={<AddUserForm />} />
        <Route
          path="/restaurant/:restaurantId/detail"
          element={<Restaurant />}
        />
         <Route
          path="/restaurant/:restaurantId/add/review"
          element={<AddReview />}
        />
        <Route
          path="/restaurant/add"
          element={<AddRestaurant />}
        />

        
      </Routes>
    </div>
  );
}

export default App;
