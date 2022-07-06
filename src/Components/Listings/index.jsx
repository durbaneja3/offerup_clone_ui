import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { OFFERUP_API_URL } from "../../Constants";
import { useHistory } from "react-router-dom";

export default function Listings({ search }) {
  const [data, setData] = useState(null);
  const items = data?.offerup?.vehicles?.filter((v) =>
    v.make.toUpperCase().includes(search.toUpperCase())
  );
  const hasItems = items?.length >= 1;
  let route = useHistory();

  useEffect(() => {
    fetch(OFFERUP_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="listing-wrapper">
      {!!hasItems ? (
        items.map((vehicle) => {
          const { make, model, price, year, location } = vehicle;
          return (
            <div
              onClick={() => route.push(`/listing/${vehicle.id}`)}
              key={vehicle.id}
              className="listing-card"
            >
              <img
                src={vehicle.image}
                style={{ maxWidth: 300, minHeight: 200 }}
              ></img>
              <h3
                style={{
                  wordWrap: "break-word",
                }}
              >
                {year} {make} {model}
              </h3>
              <h4>Price: ${price}</h4>
              <p>Location: {location}</p>
            </div>
          );
        })
      ) : (
        <p>No items found...</p>
      )}
    </div>
  );
}
