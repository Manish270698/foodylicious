import { Link } from "react-router-dom";
import empty from "../../images/empty.avif";

const EmptyCart = () => {
  return (
    <div className="-z-10 m-auto flex w-5/6 justify-center rounded-2xl p-8 text-[#484949] shadow-lg dark:bg-[#1e293b] dark:text-[#e2e8f0] lg:w-3/5">
      <div>
        <h1 className="mb-6 flex justify-center font-semibold">
          {" "}
          Your cart is Empty :{"("}
        </h1>
        <div className="mb-6 flex justify-center">
          <img
            className="w-96 mix-blend-color-burn"
            src={empty}
            alt="empty cart"
          />
        </div>
        <div className="flex justify-center">
          <Link
            className="font-lg mb-6 text-blue-600 visited:text-purple-600"
            to="/"
          >
            <div className="mt-6 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-slate-200 bg-[#f7d3c2] p-2 px-6 text-lg font-bold text-[#ea624d] shadow-2xl active:scale-95 dark:border-slate-400 dark:bg-slate-950 md:w-96">
              <button className="w-[100%]">See Restaurants Near You</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
