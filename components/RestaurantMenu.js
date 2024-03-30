import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantFetchMenu from "../utils/useRestaurantFetchMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantFetchMenu(resId);

  if (resInfo.length == 0) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, areaName, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[2]?.card?.card?.itemCards
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
  console.log("itemCards:", itemCards);

  return (
    <div>
      <div className="pt-28 dark:text-[#e2e8f0]">
        <h1>{name}</h1>
        <br />
        <p>{cuisines + " - " + costForTwoMessage}</p>
        <p>{areaName}</p>
        <p>{avgRatingString} stars</p>
        <br />
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>

        {/* <p>{itemCards[0]?.card?.info?.name}</p> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
