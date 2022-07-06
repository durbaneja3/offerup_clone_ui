import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

export default function Header({ search, setSearch }) {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname !== "/") {
      history.push("/");
    }
  }, [history.location.pathname]);

  return (
    <div className="header">
      <div className="navbar">
        <form className="title">
          <h1>OfferUp</h1>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h2>Location: 30 miles + Shipping</h2>
        </form>

        <div className="links">
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Log in</li>
          </ul>
        </div>
      </div>

      <div className="categories">
        <ul>
          <li>Electronics & Media</li>
          <li>Home & Garden</li>
          <li>Clothing, Shoes, & Accessories</li>
          <li>Baby & Kids</li>
          <li>Vehicles</li>
          <li>Toys, Games, & Hobbies</li>
          <li>Sports & Outdoors</li>
          <li>Collectibles & Art</li>
          <li>Pet Supplies</li>
          <li>More</li>
        </ul>
      </div>

      <div className="ad">
        <h2>The simpler way to buy and sell locally! </h2>
        <button>Get the app</button>
      </div>
    </div>
  );
}
