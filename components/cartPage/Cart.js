import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  let totalCost = 0;
  // Subsribing to the store using a Selector
  const cartItems = useSelector((store) => store?.cart?.items);
  const itemEmpty = Object.keys(cartItems).length === 0;

  const cartArr = [];
  for (const item in cartItems) {
    cartArr.push(cartItems[item]);
    totalCost +=
      (cartItems[item]?.itemData?.card?.info?.price
        ? cartItems[item]?.itemData?.card?.info?.price / 100
        : cartItems[item]?.itemData?.card?.info?.defaultPrice / 100) *
      cartItems[item]?.count;
  }

  const dispatch = useDispatch();
  // Clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen relative z-10">
      <div className="relative m-auto flex w-5/6 flex-wrap pt-28 text-[#02060c] dark:text-[#e2e8f0] lg:w-3/5">
        <div className="mb-4">
          <h1 className="pb-2 text-2xl font-bold">Cart</h1>
        </div>
        <button
          onClick={handleClearCart}
          className="absolute right-0 rounded-2xl border-2 border-slate-200 p-2 active:scale-95 dark:border-slate-400 dark:bg-slate-600"
        >
          Clear Cart
        </button>
      </div>
      {itemEmpty ? (
        <EmptyCart />
      ) : (
        <div className="-z-10 m-auto w-5/6 rounded-2xl p-2 shadow-lg  dark:bg-[#1e293b] md:p-4 lg:w-3/5 lg:p-6 xl:p-8">
          {cartArr.map((item) => (
            <CartItem key={item?.itemData?.card?.info?.id} data={item} />
          ))}
          {totalCost > 0 ? (
            <div className="m-auto mb-4 mt-0 flex flex-wrap items-center justify-center rounded-2xl py-3 text-[#484949]  dark:text-[#e2e8f0]">
              <span className="w-1/12"></span>
              <span className="w-5/12 md:w-7/12"></span>
              <span className="m-auto flex w-2/12 justify-center text-lg font-bold shadow-2xl xl:w-28">
                Total:{" "}
              </span>
              <span className="w-2.2/12 md:w-1.2/12 m-auto shadow-2xl">
                ₹ {totalCost.toFixed(2)}
              </span>
              <div className="cursor-pointer mt-6 flex w-80 items-center justify-center rounded-2xl border-2 border-slate-200 bg-[#f7d3c2] p-2 text-lg font-bold text-[#ea624d] shadow-2xl active:scale-95 dark:border-slate-400 dark:bg-slate-950 md:w-96">
                <button>Proceed to Pay</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
