import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ItemCard from '../components/ItemCard.jsx';
import Header from "../components/Header.jsx";

function ShoppingPage() {
  const [redwines, setRedwines] = useState([]);
  const [whitewines, setWhitewines] = useState([]);
  const [rosewines, setRosewines] = useState([]);
  const [sparklingwines, setSparklingwines] = useState([]);
  const url = "http://localhost:5000/";

  useEffect(() => {
    const fetchRedWine = async () => {
      try {
        const response = await axios.get(`${url}api/wines/category/redwines`);
        setRedwines(response.data);
      } catch (error) {
        console.log("Error fetching Red Wine data: " + error);
      }
    };
    fetchRedWine();
  }, []);

  useEffect(() => {
    const fetchWhiteWine = async () => {
      try {
        const response = await axios.get(`${url}api/wines/category/whitewines`);
        setWhitewines(response.data);
      } catch (error) {
        console.log("Error fetching White Wine data: " + error);
      }
    };
    fetchWhiteWine();
  }, []);

  useEffect(() => {
    const fetchRoseWine = async () => {
      try {
        const response = await axios.get(`${url}api/wines/category/rosewines`);
        setRosewines(response.data);
      } catch (error) {
        console.log("Error fetching Rose Wine data: " + error);
      }
    };
    fetchRoseWine();
  }, []);

  useEffect(() => {
    const fetchSparklingWine = async () => {
      try {
        const response = await axios.get(`${url}api/wines/category/sparklingwines`);
        setSparklingwines(response.data);
      } catch (error) {
        console.log("Error fetching Sparkling Wine data: " + error);
      }
    };
    fetchSparklingWine();
  }, []);

  // Render method with Navbar and Footer added
  return (
    <div>
      <Header/>
      <Navbar />

      <div className="container">
        <h1>Red Wines</h1>
        <div className="flexItems">
          {redwines.map((wine, index) => (
            <ItemCard
              key={index}
              id={wine.id}
              name={wine.name}
              image={wine.image}
              info={wine.info}
              price={wine.price}
            />
          ))}
        </div>

        <h1>White Wines</h1>
        <div className="flexItems">
          {whitewines.map((wine, index) => (
            <ItemCard
              key={index}
              id={wine.id}
              name={wine.name}
              image={wine.image}
              info={wine.info}
              price={wine.price}
            />
          ))}
        </div>

        <h1>Rosé Wines</h1>
        <div className="flexItems">
          {rosewines.map((wine, index) => (
            <ItemCard
              key={index}
              id={wine.id}
              name={wine.name}
              image={wine.image}
              info={wine.info}
              price={wine.price}
            />
          ))}
        </div>

        <h1>Sparkling Wines</h1>
        <div className="flexItems">
          {sparklingwines.map((wine, index) => (
            <ItemCard
              key={index}
              id={wine.id}
              name={wine.name}
              image={wine.image}
              info={wine.info}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      {/* Add the Footer component here */}
      <Footer />
    </div>
  );
}

export default ShoppingPage;
