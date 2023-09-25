import RestarentCard from "./RestarentCard";
import resdata from "../utils/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [data, setData] = useState([]);
  const [filterRes, setfilterRes] = useState([]);
  const fetchData = async (url) => {
    try {
      let responce = await fetch(url);
      let json = await responce.json();
      //console.log(json);
      // console.log(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants?.info.name
      // );
      setData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilterRes(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e);
    }
  };

  //console.log(data);
  useEffect(() => {
    fetchData(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9589498&lng=77.6996902&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  }, []);
  const [search, setSearch] = useState("");
  console.log(filterRes);
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="srh"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            onClick={() => {
              let filter = data.filter((val, id) => {
                return val.info.name.includes(search);
              });
              console.log(filter);
              setfilterRes(filter);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("btn clicked");
            let filterData = data.filter((val, id) => {
              return val.info.avgRating > 4.2;
            });
            console.log(filterData);
            setData(filterData);
          }}
        >
          Top Rated restaurent
        </button>
      </div>
      <div className="res-container">
        {filterRes.length > 0 ? (
          filterRes.map((val, id) => (
            <Link to={"/restaurants/" + val.info.id}>
              <RestarentCard key={id} resdata={val} />
            </Link>
          ))
        ) : (
          <h1>not rendered</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
