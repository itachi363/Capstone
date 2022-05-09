import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css"
import bokksuone from "../Images/bokksuone.jpg"
import bokksutwo from "../Images/bokksutwo.jpg"
import bokksuthree from "../Images/bokksuthree.jpg"

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);

  return (
    <div>
      <div>
        <img src={bokksuone} className="box"></img>
      </div>
      <div className="center">
        <p>The best box of japanese snacks you can enjoy.</p>
      </div>
      <div>
        <img src={bokksutwo} className="box"></img>
      </div>
      <div className="center">
        <p>With four seasons of snacks.</p>
      </div>
      <div>
        <img src={bokksuthree} className="box"></img>
      </div>
      <div className="center">
        <p>With up to 24 snacks per box.</p>
      </div>
      <div>
        {/* {cars &&
          cars.map((car) => (
            <p key={car.id}>
              {car.year} {car.make} {car.model}
            </p>
          ))} */}
      </div>
    </div>
  );

};

export default HomePage;
