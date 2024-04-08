import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./tour-card.css";

const GuideCard = ({ guide }) => {
  const {
    firstName,
    image,
    lastName,
    phone,
    pricePerHour,
    rating,
    _id,
  } = guide;


  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={image} alt="tour-img" />
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex alignt-items center gap-1">
              <i className="ri-map-pin-2-line"></i> {phone}
            </span>
            <span className="tour__rating d-flex alignt-items center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {rating === 0 ? null : rating}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/guides/${_id}`}>{`${firstName} ${lastName}`}</Link>
          </h5>

          <div className="card__bottom d-flex alignt-items-center justify-content-between mt-3">
            <h5>
              ${pricePerHour} <span></span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/guides/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GuideCard;
