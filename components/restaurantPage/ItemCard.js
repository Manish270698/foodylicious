import { RES_IMG } from "../../utils/constants";
import ItemDescription from "./ItemDescription";
import rating from "../../images/rating.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import ItemButton from "./ItemButton";

const ItemCard = ({ itemData }) => {
  const dispatch = useDispatch();

  // dispatcher function
  const handleAddItem = (item) => {
    console.log("item: ", item);
    // dispatch an actions
    dispatch(addItem(item));
  };

  return (
    <div className="relative -top-4 z-0 mb-4 mt-0 rounded-b-2xl py-3 pt-10 text-[#02060c] shadow-lg dark:bg-[#0f172a] dark:text-[#e2e8f0]">
      <div>
        {itemData?.map((item) => (
          <div key={item?.card?.info?.id}>
            <div className="mb-2 flex w-[100%] flex-wrap justify-between text-sm">
              <div className=" w-[60%] flex-row pl-4 md:pl-7">
                <div className="font-semibold md:text-lg">
                  {item?.card?.info?.name}
                </div>
                <div className="mb-2 font-semibold md:text-lg">
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </div>
                {Object.entries(item?.card?.info?.ratings?.aggregatedRating)
                  .length !== 0 ? (
                  <div className="mb-2 flex items-center gap-1 text-xs font-bold">
                    <img src={rating} alt="rating" className="h-4 w-4" />
                    <span className="text-green-700 dark:text-green-500">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </span>

                    <span>
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {item?.card?.info?.description ? (
                  <div className="text-xs font-normal opacity-60 md:text-sm">
                    <div className="hidden lg:block">
                      {item?.card?.info?.description}
                    </div>
                    <ItemDescription item={item} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex w-[35%] flex-row-reverse pr-4 md:pr-7">
                <div className="relative flex h-[82px]  w-[100%] items-start justify-end md:h-[144] md:w-[156]">
                  {/* button rendering based on image availability */}

                  <div className="flex items-center justify-center">
                    {item?.card?.info?.imageId ? (
                      <img
                        className="h-[82px] w-[88px] rounded-xl bg-slate-300 object-cover shadow-2xl md:h-[144] md:w-[156]"
                        src={RES_IMG + item?.card?.info?.imageId}
                        alt="item image"
                      />
                    ) : (
                      <div className="h-[82px] w-[88px] rounded-xl md:h-[144] md:w-[156]"></div>
                    )}
                    <ItemButton item={item} />
                  </div>
                </div>
              </div>
            </div>
            {itemData[itemData?.length - 1] !== item ? (
              <hr className="m-4 dark:opacity-20 md:m-7" />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
