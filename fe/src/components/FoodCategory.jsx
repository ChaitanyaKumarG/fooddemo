import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const foodData = {
  biriyani: [
    {
      id: 1,
      name: "ChickenBiriyani",
      price: "$8",
      image:
        "https://www.shutterstock.com/image-photo/biryani-600w-1948602916.jpg",
    },
    {
      id: 2,
      name: "ChickenBiriyani",
      price: "$8",
      image:
        "https://www.shutterstock.com/image-photo/biryani-600w-1948602916.jpg",
    },
    {
      id: 3,
      name: "ChickenBiriyani",
      price: "$8",
      image:
        "https://www.shutterstock.com/image-photo/biryani-600w-1948602916.jpg",
    },
    {
      id: 4,
      name: "ChickenBiriyani",
      price: "$8",
      image:
        "https://www.shutterstock.com/image-photo/biryani-600w-1948602916.jpg",
    },
    {
      id: 5,
      name: "Mutton Biriyani",
      price: "$10",
      image:
        "https://www.shutterstock.com/image-photo/mutton-biryani-600w-2308585351.jpg",
    },
    {
      id: 6,
      name: "Veg Biriyani",
      price: "$6",
      image:
        "https://www.shutterstock.com/image-photo/veg-biryani-600w-1993036819.jpg",
    },
  ],
  friedrice: [
    {
      id: 1,
      name: "Egg Fried Rice",
      price: "$5",
      image:
        "https://www.shutterstock.com/image-photo/egg-fried-rice-600w-1820548476.jpg",
    },
    {
      id: 2,
      name: "Chicken Fried Rice",
      price: "$7",
      image:
        "https://www.shutterstock.com/image-photo/chicken-fried-rice-600w-1820548468.jpg",
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      price: "$4",
      image:
        "https://www.shutterstock.com/image-photo/veg-fried-rice-600w-1820548472.jpg",
    },
  ],
  curries: [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: "$6",
      image:
        "https://www.shutterstock.com/image-photo/paneer-butter-masala-600w-1820548479.jpg",
    },
    {
      id: 2,
      name: "Chicken Curry",
      price: "$8",
      image:
        "https://www.shutterstock.com/image-photo/chicken-curry-600w-1820548482.jpg",
    },
    {
      id: 3,
      name: "Fish Curry",
      price: "$9",
      image:
        "https://www.shutterstock.com/image-photo/fish-curry-600w-1820548485.jpg",
    },
  ],
};

export const FoodCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setItems(foodData[category]);
  };

  return (
    <div className="mb-5">
      <div
        className="container-flex d-flex flex-column align-items-center justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <div className="d-flex w-100 mb-4 justify-content-evenly">
          <div
            className="text-center p-3 bg-primary text-white w-25 rounded clickable"
            onClick={() => handleCategoryClick("biriyani")}
          >
            Biriyani
          </div>
          <div
            className="text-center p-3 bg-danger text-white w-25 rounded clickable"
            onClick={() => handleCategoryClick("friedrice")}
          >
                      FriedRice
          </div>
          <div
            className="text-center p-3 bg-success text-white w-25 rounded clickable"
            onClick={() => handleCategoryClick("curries")}
          >
             Curries
          </div>
        </div>

        {selectedCategory && (
          <div className="w-100 container mb-5">
            <h2 className="text-center mb-3">
              {selectedCategory.toUpperCase()}
            </h2>
            <div className="row row-cols-2 g-3 justify-content-center">
              {items.map((item) => (
                <div key={item.id} className="col">
                  <div
                    className="card d-flex flex-column"
                    style={{ minHeight: "100px" }}
                  >
                    <div
                      className="card-img-top"
                      style={{
                        height: "100px",
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                      <h5
                        className="card-title mb-1"
                        style={{
                          fontSize: "1rem",
                          height: "1.5rem",
                          overflow: "hidden",
                        }}
                      >
                        {item.name}
                      </h5>
                      
                      <p
                        className="card-text"
                        style={{
                          fontSize: "0.9rem",
                          height: "1.2rem",
                          overflow: "hidden",
                        }}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCategory;
