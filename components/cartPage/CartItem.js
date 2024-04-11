import vegIcon from "../../images/vegIcon.png";
import nonVegIcon from "../../images/nonVegIcon.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { removeItem } from "../../utils/cartSlice";

const CartItem = ({ data }) => {
  //   console.log(data);
  const { itemData, count } = data;
  const categoryImg =
    itemData?.card?.info?.itemAttribute?.vegClassifier.toLowerCase() === "veg"
      ? vegIcon
      : nonVegIcon;

  const itemPrice =
    (itemData?.card?.info?.price
      ? itemData?.card?.info?.price / 100
      : itemData?.card?.info?.defaultPrice / 100) * count;

  const dispatch = useDispatch();
  // adding item to cart from cart page
  const handleAddItem = () => {
    // console.log(itemData);
    dispatch(addItem(itemData));
  };
  // removing item to cart from cart page
  const handleRemoveItem = () => {
    dispatch(removeItem(itemData));
  };

  return (
    <div>
      <div className="m-auto mb-4 mt-0 flex flex-wrap items-center justify-center rounded-2xl py-3 text-[#484949]  shadow-lg dark:bg-[#0f172a] dark:text-[#e2e8f0] ">
        <span className="flex w-1/12 justify-center">
          <img src={categoryImg} alt="veg/non-veg" className="sticky h-5 w-5" />
        </span>

        <span className="w-5/12 md:w-7/12">
          <h1 className="">{itemData?.card?.info?.name}</h1>
        </span>
        <div className="mx-2 flex w-2/12 items-center justify-between rounded-2xl border-2 border-slate-200 p-2 text-lg font-bold text-[#33bd3c] shadow-2xl dark:border-slate-400 dark:bg-slate-600 xl:w-28">
          <button onClick={handleRemoveItem} className="">
            -
          </button>
          <p className="flex justify-center">{count}</p>
          <button onClick={handleAddItem} className="">
            +
          </button>
        </div>
        <div className="w-2.2/12 md:w-1.2/12 m-auto">
          ₹ {itemPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
