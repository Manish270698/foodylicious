import { useState } from "react";
import down from "../../images/down.png";
import up from "../../images/up.png";
import ItemCard from "./ItemCard";

const ItemCategory = ({ data }) => {
  const [expand, setExpand] = useState(up);
  const [showItems, setShowItems] = useState(true);
  const handleExpand = () => {
    setShowItems(!showItems);
    expand === down ? setExpand(up) : setExpand(down);
  };

  return (
    <div className="">
      <div className="rounded-b-2xl">
        <div
          className="relative z-10 mt-5 flex cursor-pointer items-center justify-between rounded-b-2xl border-b-2 bg-white p-3 text-[#02060c] opacity-100 dark:border-[#61676d] dark:bg-[#1e293b] dark:text-[#e2e8f0]"
          onClick={handleExpand}
        >
          <h1>
            {data?.card?.title?.length > 20
              ? data?.card?.card?.title.slice(0, 15) + "..."
              : data?.card?.card?.title}{" "}
            ({data?.card?.card?.itemCards?.length})
          </h1>
          <img className="h-4 w-4" src={expand} alt="expand icon" />
        </div>
        {showItems && <ItemCard itemData={data?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default ItemCategory;
