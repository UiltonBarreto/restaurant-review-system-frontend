import { Link } from "react-router-dom";

const RestaurantCard = (restaurant) => {
  return (
    <div className="col">
      <div className="card border-color">
        <div class="card-body  text-color ">
          <h5 class="card-title d-flex justify-content-between">
            <div>
              <b>{restaurant.item.name}</b>
            </div>
            
          </h5>
          <p className="card-text">{restaurant.item.description}</p>
          <p class="text-color">
            <b>
              <i>Restaurant Type :</i> {restaurant.item.type}
            </b>
          </p>
          <p class="text-color">
            <b>
              <i>Restaurant Location :</i> {restaurant.item.location}
            </b>
          </p>
        </div>
        <div class="card-footer">
         
          <div className="d-flex justify-content-center">
            <Link
              to={`/restaurant/${restaurant.item.id}/detail`}
              className="btn bg-color custom-bg-text"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default RestaurantCard;
