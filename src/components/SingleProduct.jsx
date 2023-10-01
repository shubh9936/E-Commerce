import React, { useEffect } from "react";
import {   useParams } from "react-router-dom";

import { useProductContext } from "../context/productcontext";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import MyCart from "./MyCart";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct);

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
    colors,
  } = singleProduct;
console.log(colors);
  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="single">
      <PageNavigation title={name} />

      {/* product image */}
      <div>
        <MyImage imgs={image} />
      </div>

      {/* product data */}
      <div className="product-data">
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>{reviews} reviews</p>

        <p className="product-price">
          MRP: RS.
          <del>{price + 2000}</del>
        </p>

        <p className="deal">Deal of the Day: RS.{price}</p>
        <p>{description}</p>

        <div className="product-data-warranty">
          <div className="product-warranty-data">
            <TbTruckDelivery className="icon" />
            <p>Free Delivery</p>
          </div>

          <div className="product-warranty-data">
            <TbReplace className="icon" />
            <p>30 Days Replacement</p>
          </div>

          <div className="product-warranty-data">
            <TbReplace className="icon" />
            <p>Thapa Delivered</p>
          </div>

          <div className="product-warranty-data">
            <MdSecurity className="icon" />
            <p>2 Year warranty </p>
          </div>
          <hr />
        </div>

        <div className="product-data-info">
          <p>
            Available:
            <strong> {stock > 0 ? "In stock" : "Not Avilabel"}</strong>
          </p>
          <p>
            ID:<strong>{alias}</strong>
          </p>
          <p>
            Brand:<strong>{company}</strong>
          </p>
        </div>
      </div>
       
      {  <MyCart product= {singleProduct} />}
      {/* <MyCart product={singleProduct}/> */}

     
    </div>
  );
};

export default SingleProduct;
