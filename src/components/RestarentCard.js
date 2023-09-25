import food from "../assests/food.jpg";
import resdata from "./../utils/data";
const RestarentCard = (prop) => {
  //console.log(prop);
  const { resdata } = prop;
  //console.log(resdata?.info);
  const {
    name,
    areaName,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resdata.info;
  // console.log(
  //   name,
  //   areaName,
  //   cloudinaryImageId,
  //   avgRating,
  //   cuisines,
  //   costForTwo,
  //   deliveryTime
  // );

  let url = "https://media-assets.swiggy.com/";
  return (
    <div className="restaurant-grid">
      <div className="res-card">
        <h4>{name}</h4>
        <h4>{areaName}</h4>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{deliveryTime}</h4>
        <img src={url + cloudinaryImageId} />
      </div>
    </div>
  );
};
export default RestarentCard;
