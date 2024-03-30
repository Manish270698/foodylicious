// import resList from "../utils/mockData";
import Card, { CardPromoted, CardPromoted } from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import searchIcon from "../images/searchIcon.png";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const { restaurantList, filteredResList, setFilteredResList } =
    useRestaurants();

  const [searchText, setSearchText] = useState("");
  const CardsPromoted = CardPromoted(Card);
  let promoted = false; // variable to learn higher-order functions

  // Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="dark h-screen">
      <div className="pt-28 dark:bg-[#0f172a] dark:text-[#e2e8f0]">
        <div className="sticky top-28 z-20 flex justify-center">
          <div className="flex items-center justify-center">
            {/* Whenever the state varibale changes, React re-renders the whole component. But only the chnaged part is updated */}
            <input
              className=" h-10 rounded-l-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff] p-4 shadow-xl focus:outline-none   dark:bg-[#1e293b] md:w-96 lg:w-96"
              id="search"
              type="search"
              placeholder="restaurants and cuisines"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                // To filter as we type
                if (restaurantList.length != 0) {
                  const input = document.querySelector("#search").value;
                  const filteredList = restaurantList.filter(
                    (res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(input.toLowerCase()) ||
                      res.info.cuisines
                        .join(",")
                        .toLowerCase()
                        .includes(input.toLowerCase()),
                  );
                  setFilteredResList(filteredList);
                }
              }}
            />
            <button
              className=" flex h-10 items-center justify-center rounded-r-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff]  shadow-xl dark:border-[#d3deef] dark:bg-[#1e293b]"
              onClick={() => {
                if (restaurantList.length != 0) {
                  const input = document.querySelector("#search").value;
                  const filteredList = restaurantList.filter(
                    (res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(input.toLowerCase()) ||
                      res.info.cuisines
                        .join(",")
                        .toLowerCase()
                        .includes(input.toLowerCase()),
                  );
                  setFilteredResList(filteredList);
                }
              }}
            >
              <img
                className="m-2 h-8 active:scale-90"
                src={searchIcon}
                alt="search icon"
              />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className="relative m-4 ml-4 mt-4 h-10 w-[364px] overflow-hidden md:w-[602px] lg:w-[907px] xl:w-[1192px]">
              <button
                className=" fixed z-20 mb-4 flex h-8 items-center justify-center rounded-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff] p-2 text-[#334155]  shadow-xl active:scale-95 dark:border-[#d3deef] dark:bg-[#1e293b] dark:text-[#e2e8f0]"
                onClick={() => {
                  const filteredList = filteredResList.filter(
                    (res) => res.info.avgRating > 4,
                  );
                  setFilteredResList(filteredList);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>

            <div className="w-[364px] rounded-2xl p-8 dark:bg-[#1e293b] md:w-[602px] lg:w-[907px] xl:w-[1192px]">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredResList.map((restaurant) => (
                  <Link
                    key={restaurant?.info.id}
                    to={"/restaurants/" + restaurant?.info?.id}
                  >
                    {promoted ? (
                      <CardsPromoted resData={restaurant} />
                    ) : (
                      <Card resData={restaurant} />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
