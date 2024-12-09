import React from "react";
import { BrowserRouter, Routes,  Route} from "react-router-dom";
import WelcomeModal from "./components/WelcomeModal";
import HomePage from "./pages/HomePage";
import FoodCategory from "./components/FoodCategory";
import FoodItems from "./components/FoodItems";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const biryaniItems = {
    title: "Biryani",
    data: [
      {
        name: "Chicken Biryani",
        description: "Delicious spicy biryani",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "Veg Biryani",
        description: "Delicious vegetarian biryani",
        image: "https://via.placeholder.com/300",
      },
    ],
  };

  return (
    <div className="" style={{height:"100vh"}}>
      <h1>{React.version}</h1>
      <WelcomeModal />
<Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/veg" element={<FoodCategory isVeg={true} />} />
        <Route path="/nonveg" element={<FoodCategory isVeg={false} />} />
        <Route path="/biryani" element={<FoodItems items={biryaniItems} />} />
        {/* Add similar routes for FriedRice and Curries */}
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

export default App;
