import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const ItemButton = (item) => {
  const dispatch = useDispatch();
  const itemsData = useSelector((store) => store.cart.items);
  //   console.log("item : ", item);
  // console.log("itemsData : ", itemsData[item?.item?.card?.info?.name]);
  //   console.log(item?.item?.card?.info?.id);
  const handleAddItem = () => {
    dispatch(addItem(item.item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.item));
  };

  if (!itemsData[item?.item?.card?.info?.name]?.count) {
    return (
      <div
        className={`absolute ${item?.item?.card?.info?.imageId ? "-bottom-3" : ""} flex w-[50%] justify-between md:w-[109px]`}
      >
        <button
          onClick={handleAddItem}
          className="w-[100%] rounded-xl bg-white px-2 py-1 text-sm font-bold text-green-500 shadow-lg active:scale-95 dark:bg-slate-700 md:text-lg"
        >
          ADD
        </button>
      </div>
    );
  } else {
    return (
      <div
        className={`absolute ${item?.item?.card?.info?.imageId ? "-bottom-3" : ""} flex w-[50%] justify-between rounded-xl bg-white px-2 py-1 text-sm font-bold text-green-500 shadow-lg dark:bg-slate-700 md:w-[109px] md:text-lg`}
      >
        <button onClick={handleRemoveItem} className="active:scale-95">
          -
        </button>
        <p>{itemsData[item?.item?.card?.info?.name]?.count}</p>
        <button onClick={handleAddItem} className="active:scale-95">
          +
        </button>
      </div>
    );
  }
};

export default ItemButton;
