import React from "react";
import { NavLink } from "react-router-dom";

export const ListView = (props) => {
  const products = props.products;
  return (
    <div className="list-view">
      {  products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <>
            <div className="list-img">
              <figure>
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="list-card-data">
              <h3>{name}</h3>
              <p className="p">{price}</p>
              <p className="p1">{description}</p>

              <NavLink to={`/singleproduct/${id}`}>
                <button className="button">READ MORE</button>
              </NavLink>
            </div>
          </>
        );
      })}
    </div>
  );
};
