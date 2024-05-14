import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
 
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    type: "",
    contact: "",
    location: "",
    address: "",
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const saveRestaurant = (e) => {
  
    fetch("http://localhost:8080/api/restaurant/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/home");
            }, 2000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          } else {
            toast.error("It Seems Server is down!!!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
    e.preventDefault();
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          class="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h5 class="card-title">Add Restaurant</h5>
          </div>
          <div class="card-body text-color">
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Restaurant Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="name"
                  placeholder="enter name.."
                  onChange={handleInput}
                  value={restaurant.name}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  <b>Restaurant Description</b>
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleInput}
                  value={restaurant.description}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Restaurant Type</b>
                </label>

                <select
                  name="type"
                  onChange={handleInput}
                  className="form-control"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Family Restaurant">Family Restaurant</option>
                  <option value="Fast Food">Fast Food</option>
                  <option value="Fine Dining">Fine Dining</option>
                  <option value="Café">Café</option>
                  <option value="Buffet">Buffet</option>
                 <option value="Food Truck">Food Truck</option>
                 <option value="Barbecue">Barbecue</option>
                  <option value="Pub">Pub</option>
                  <option value="Pizzeria">Pizzeria</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Vegetarian/Vegan">Vegetarian/Vegan</option>
                  <option value="Seafood">Seafood</option>
                  <option value="Ethnic Cuisine">Ethnic Cuisine</option>
                  <option value="Steakhouse">Steakhouse</option>
                  
                </select>
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Restaurant Location</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="location"
                  placeholder="enter location.."
                  onChange={handleInput}
                  value={restaurant.location}
                />
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Restaurant Contact</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="title"
                  name="contact"
                  placeholder="enter name.."
                  onChange={handleInput}
                  value={restaurant.contact}
                />
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Restaurant Address</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="address"
                  placeholder="enter address.."
                  onChange={handleInput}
                  value={restaurant.address}
                />
              </div>

              <button
                type="submit"
                onClick={saveRestaurant}
                class="btn bg-color custom-bg-text"
              >
                Add Restaurant
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
