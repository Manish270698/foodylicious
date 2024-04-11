import { useParams } from "react-router-dom";
import Shimmer from "../Shimmer";
import useRestaurantFetchMenu from "../../utils/useRestaurantFetchMenu";
import ItemCategory from "./ItemCategory";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantFetchMenu(resId);
  // varibale to learn Lifting up the state
  const [activeIndex, setActiveIndex] = useState(0);

  if (resInfo.length == 0) {
    return <ShimmerRestaurantMenu />;
  }

  const { name, costForTwoMessage} =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="min-h-screen">
      <div className="m-auto w-5/6 pt-28 text-[#02060c] dark:text-[#e2e8f0] lg:w-3/5">
        <div className="mb-4">
          <h1 className="pb-2 text-2xl font-bold">{name}</h1>
          <h2 className="text-base font-semibold">{costForTwoMessage}</h2>
        </div>
      </div>
      <div className="-z-10 m-auto w-5/6 rounded-2xl p-2 shadow-lg dark:bg-[#1e293b] md:p-4 lg:w-3/5 lg:p-6 xl:p-8">
        {categories.map((category, index) => (
          <ItemCategory
            key={category?.card?.card?.title}
            data={category}
            isActive={activeIndex === index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
