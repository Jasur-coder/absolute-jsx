import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { truncateString } from "../utils/helper";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const products = await axios.get(
        "https://fakestoreapi.com/products?limit=6"
      );
      if (products.status == 200) {
        setData(products.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Tryed to data fetching");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="product-list">
      <div className="container">
        <div className="grid">
          {data.length > 0 &&
            data.map((el) => {
              const rating = Math.round(el.rating.rate);
              const title = truncateString(el.title, 10);
              const description = truncateString(el.description, 90);
              return (
                <div key={el.id} className="card">
                  <div className="img-wrapper">
                    <img src={el.image} alt={el.title} />
                  </div>

                  <div className="card-content">
                    <div className="card-header">
                      <h2 className="card-title">{title}</h2>
                      <span className="card-price">
                        {el.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>

                    <p className="description">{description}</p>

                    <div className="card-footer">
                      <button className="cart-btn">+</button>
                      <Rating initialValue={rating} size={30} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

