import React from "react";
import Link from "next/link";
import{BsShop} from "react-icons/bs";


const Canceled = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsShop/> 
        </p>
        <h2>Return to home page to continue shopping</h2>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
