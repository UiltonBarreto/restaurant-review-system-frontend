
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GetReviews from "../ReviewComponent/GetReviews";

const Restaurant = () => {
  const { restaurantId } = useParams();

  let navigate = useNavigate();

  let user = JSON.parse(sessionStorage.getItem("active-user"));
  let admin = JSON.parse(sessionStorage.getItem("active-admin"));

  const [restaurant, setRestaurant] = useState({});

  const retrieveRestaurant = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/restaurant/fetch/id?restaurantId=" + restaurantId
    );

    return response.data;
  };

  useEffect(() => {
    const getRestaurant = async () => {
      const retrievedRestaurant = await retrieveRestaurant();

      setRestaurant(retrievedRestaurant.restaurants[0]);
    };

    getRestaurant();

  }, [restaurantId]);

  const navigateToAddReviewPage = () => {
    navigate("/restaurant/" + restaurantId + "/add/review");
  };

  return (
    <div className="container-fluid mb-5">
      <div class="row">
      
        <div class="col-sm-5 mt-2">
          <div class="card form-card custom-bg">
            <div class="card-header bg-color">
              <div className="d-flex justify-content-between">
                <h3 className="custom-bg-text">{restaurant.name}</h3>
              </div>
            </div>

            <div class="card-body text-left text-color">
              <div class="text-left mt-3">
                <h4>Description :</h4>
              </div>
              <h6 class="card-text">{restaurant.description}</h6>

              <div class="text-left mt-3">
                <h4>Type :</h4>
              </div>
              <h6 class="card-text">{restaurant.type}</h6>

              <div class="text-left mt-3">
                <h4>Location :</h4>
              </div>
              <h6 class="card-text">{restaurant.location}</h6>
              <div class="text-left mt-3">
                <h4>Contact :</h4>
              </div>
              <h6 class="card-text">{restaurant.contact}</h6>
              <div class="text-left mt-3">
                <h4>Address :</h4>
              </div>
              <h6 class="card-text">{restaurant.address}</h6>
            </div>

            <div class="card-footer custom-bg">
              {(() => {
                if (user) {
                  
                  return (
                    <div>
                      <input
                        type="submit"
                        className="btn text-white bg-color mb-3"
                        value="Add Review"
                        onClick={navigateToAddReviewPage}
                      />
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      

        <div class="col-sm-4 mt-2">
          <GetReviews item={restaurant} />
        </div>
      </div>

     
      
    </div>
  );
};

export default Restaurant;
