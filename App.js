import React from "react";
import ReactDOM from "react-dom/client";
import logos from "./assests/logo.jpg";
import food from "./assests/food.jpg";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logos} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestarentCard = (prop) => {
  const { resdata } = prop;
  console.log(resdata);
  const { name, avgRatingString, cuisines } = resdata;
  console.log(name);
  return (
    <div className="res-card">
      <img src={food} />
      <h3>{name}</h3>
      <h4>{avgRatingString}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>38 mins</h4>
    </div>
  );
  ` `;
};
let resdata = [
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
  {
    id: "17303",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Thubarahalli",
    areaName: "Marathahalli",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 3.8,
    parentId: "547",
    avgRatingString: "3.8",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resdata.map((val, id) => (
          <RestarentCard key={id} resdata={val} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const heading = React.createElement("h1", {}, "hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
