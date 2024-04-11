import { Link } from "react-router-dom";
import cage from "../../images/cage.png";

const EmptyCart = () => {
  return (
    <div className="-z-10 m-auto flex w-5/6 justify-center rounded-2xl p-8 text-[#484949] shadow-lg dark:bg-[#1e293b] dark:text-[#e2e8f0] lg:w-3/5">
      <div>
        <h1 className="mb-6 font-semibold"> Your cart is Empty :{"("}</h1>
        <div className="mb-6 flex justify-center">
          <img src={cage} alt="empty cart" />
        </div>
        <div className="flex justify-center">
          <Link
            className="font-lg mb-6 text-blue-600 visited:text-purple-600"
            to="/"
          >
            go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
