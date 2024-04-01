import searchIcon from "../images/searchIcon.png";

const Shimmer = () => {
  return (
    <div className="h-screen">
      <div className="pt-28 dark:bg-[#0f172a] dark:text-[#e2e8f0]">
        <div className="sticky top-28 z-10 flex justify-center">
          <div className="flex items-center justify-center">
            {/* Whenever the state varibale changes, React re-renders the whole component. But only the chnaged part is updated */}
            <input className=" h-10 rounded-l-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff] p-4 shadow-xl focus:outline-none   dark:bg-[#1e293b] md:w-96 lg:w-96" />
            <button className=" flex h-10 items-center justify-center rounded-r-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff]  shadow-xl dark:border-[#d3deef] dark:bg-[#1e293b]">
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
              <button className="fixed z-10 mb-4 flex h-8 items-center justify-center rounded-full border-[0.01rem] border-[#a8a9aa] bg-[#ffffff] p-2 text-[#334155]  shadow-xl active:scale-95 dark:border-[#d3deef] dark:bg-[#1e293b] dark:text-[#e2e8f0]">
                Top Rated Restaurants
              </button>
            </div>
            <div className="w-[364px] rounded-2xl p-8 dark:bg-[#1e293b] md:w-[602px] lg:w-[907px] xl:w-[1192px]">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="w-[300px] animate-pulse pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] animate-pulse rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
                <div className="w-[300px] animate-pulse  pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
                  <div className="h-[200px] w-[300px] rounded-2xl bg-gray-500 object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"></div>
                  <div className="h-20 pl-3 pt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
