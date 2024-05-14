import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [tempLocation, setTempLocation] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getAllRestaurants = async () => {
      const allRestaurants = await retrieveAllRestaurants();
      if (allRestaurants) {
        setRestaurants(allRestaurants.restaurants);
      }
    };

    const getRestaurantsBYLocation = async () => {
      const allRestaurants = await retrieveAllRestaurantsByLocation();
      if (allRestaurants) {
        setRestaurants(allRestaurants.restaurants);
      }
    };

    if (location === "") {
      getAllRestaurants();
    } else {
      getRestaurantsBYLocation();
    }
  }, [location]);

  const retrieveAllRestaurants = async () => {
    const response = await axios.get("http://localhost:8080/api/restaurant/fetch/all");

    return response.data;
  };

  const retrieveAllRestaurantsByLocation = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/restaurant/fetch/location-wise?location=" + location
    );

    return response.data;
  };

  const searchLocation = (e) => {
    setLocation(tempLocation);
    e.preventDefault();
  };


  return (
    <div className="container-fluid mb-2">

<form class="row g-3">
            <div class="col-auto">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Enter location..."
                onChange={(e) => setTempLocation(e.target.value)}
                value={tempLocation}
                required
              />
            </div>
            <div class="col-auto">
              <button
                type="submit"
                class="btn bg-color custom-bg-text mb-3"
                onClick={searchLocation}
              >
                Search
              </button>
            </div>
          </form>
     
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {restaurants.map((restaurant) => {
                return <RestaurantCard item={restaurant} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
