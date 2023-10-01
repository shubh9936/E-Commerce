import React from "react";
// import {TbTruckDelivery} from "react-icons/tb";
import { GiReceiveMoney} from "react-icons/gi";
import { MdSecurity} from "react-icons/md";
import {  RiSecurePaymentLine} from "react-icons/ri";

const Services = () => {
  return (
    <div className="service">
      <div className="services-1">
        <div>
          <MdSecurity className="icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>
      </div>
           
      <div className="services-2">
        <div className="services-row-1">
          <div>
            <MdSecurity className="icon" />
            <h3>Non-contact Shipping</h3>
          </div>
        </div>
        <div className="services-row-1">
          <div>
            <GiReceiveMoney className="icon" />
            <h3>Money-back gauranteed</h3>
          </div>
        </div>
      </div>

      <div className="services-3">
      <div>
          <RiSecurePaymentLine className="icon" />
          <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
