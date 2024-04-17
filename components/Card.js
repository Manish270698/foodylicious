import { RES_IMG } from "../utils/constants";
import star from "../images/star.png";

const Card = (props) => {
  const { resData } = props;
  let { name, cuisines, costForTwo, sla, avgRating, aggregatedDiscountInfoV3 } =
    resData?.info;
  cuisines =
    cuisines.join(", ").length > 30
      ? cuisines.join(", ").slice(0, 30) + "..."
      : cuisines.join(", ");

  return (
    <div className="w-[300px] pb-10 text-[#02060c] duration-100 ease-in hover:scale-95 dark:text-[#e2e8f0] md:w-[253px]">
      <div className="relative">
        <img
          className="h-[200px] w-[300px] rounded-2xl object-cover md:h-[168px] md:w-[253px] lg:h-[168px]  xl:h-[168px] "
          alt="restaurant image"
          src={RES_IMG + resData.info.cloudinaryImageId}
        ></img>
        <div className="absolute bottom-0 h-[100px] w-[300px] rounded-b-2xl bg-gradient-to-t from-slate-900 object-cover md:h-[84px] md:w-[253px]">
          <p className="absolute bottom-2 ml-2 text-2xl font-extrabold text-white opacity-90 md:text-xl">
            {aggregatedDiscountInfoV3?.header &&
            aggregatedDiscountInfoV3?.subHeader
              ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`
              : ""}
          </p>
        </div>
      </div>
      <div className="pl-3 pt-2 opacity-75">
        <h4 className="text-lg font-semibold">
          {name.length > 22 ? name.slice(0, 22) + "..." : name}
        </h4>
        <div className="flex items-center gap-1 font-semibold">
          {avgRating ? (
            <p className="flex items-center gap-1">
              <img className="inline-block w-5" src={star} alt="rating" />
              {avgRating}
            </p>
          ) : null}
          •<p className="inline-block">{sla.deliveryTime} mins</p>
        </div>
        <p className="opacity-60 dark:text-[#b4b4b6]">{costForTwo}</p>
        <p className="opacity-60 dark:text-[#b4b4b6]">{cuisines}</p>
      </div>
    </div>
  );
};

// Higher-Order Function
export const CardPromoted = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10 rounded-br-md rounded-tl-2xl bg-[#0f172a] px-2 text-sm text-gray-200">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
