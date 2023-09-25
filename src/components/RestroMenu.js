import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const params = useParams();
  const URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9589498&lng=77.6996902&restaurantId=";
  let parms = useParams();
  console.log(params);
  const fetchMenu = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMenuData(data.data.cards);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMenu(URL + params.ids);
  }, []); // Ensure that useEffect runs when the URL changes

  const { id, name, avgRatingString, cuisines, costForTwoMessage } =
    menuData[0]?.card?.card?.info || {};

  // Define the items array based on the actual structure of menuData
  const items =
    menuData[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div>
      <h2>menus</h2>
      {menuData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>{name}</li>
          <li>{cuisines}</li>
          <li>{avgRatingString}</li>
          <li>{costForTwoMessage}</li>
        </ul>
      )}
      {/* Render items only if menuData is available */}
      {menuData.length !== 0 && (
        <ul>
          {items.map((val) => (
            <li key={val.card.info.id}>{val.card.info.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestroMenu;
