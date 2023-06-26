import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  console.log(item)
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <div className="des">
          <span>{item?.attributes.desc}</span>
          <h5>{item?.attributes.title}</h5>
          <h4>{item?.attributes.weight} gm</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
