import { RES_IMG } from "../../utils/constants";
import ItemDescription from "./ItemDescription";

const ItemCard = ({ itemData }) => {
  console.log("itemData:", itemData);
 
  return (
    <div className="h-100 relative -top-4 mb-4 mt-0 rounded-b-2xl py-3 pt-7 text-[#02060c] shadow-2xl dark:bg-[#0f172a] dark:text-[#e2e8f0]">
      <div>
        {itemData.map((item) => (
          <div key={item.card.info.id}>
            <div className="mb-2 flex w-[100%] flex-wrap justify-between text-sm">
              <div className="w-[60%] flex-row pl-4 md:pl-7">
                <div className="font-semibold md:text-lg">
                  {item.card.info.name}
                </div>
                <div className="mb-2 font-semibold md:text-lg">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </div>
                {item.card.info.description ? (
                  <div className="text-xs font-normal opacity-60 md:text-sm">
                    <div className="hidden lg:block">
                      {item.card.info.description}
                    </div>
                    <ItemDescription item={item} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {item.card.info.imageId ? (
                <div className="flex w-[35%] flex-row-reverse pr-4 md:pr-7">
                  <img
                    className="h-[82px] w-[100%] rounded-xl object-cover md:h-[144] md:w-[156]"
                    src={RES_IMG + item.card.info.imageId}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            {itemData[itemData.length - 1] !== item ? (
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
