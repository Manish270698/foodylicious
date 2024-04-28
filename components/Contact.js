const Contact = () => {
  return (
    <div className="min-h-screen pt-28 dark:text-[#e2e8f0]">
      <div className="relative m-auto flex w-5/6 flex-wrap text-[#02060c] dark:text-[#e2e8f0] lg:w-3/5">
        <div className="mb-4">
          <h1 className="pb-2 text-2xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="-z-10 m-auto w-5/6 rounded-2xl p-2 shadow-lg  dark:bg-[#1e293b] md:p-4 lg:w-3/5 lg:p-6 xl:p-8">
        <div className="m-auto mb-4 mt-0 flex flex-wrap items-center justify-center rounded-2xl py-3 text-[#484949]  dark:text-[#e2e8f0]">
          <div className="mt-6 flex w-72 cursor-pointer items-center justify-center rounded-2xl border-2 border-slate-200 bg-[#f7d3c2] p-2 text-lg font-bold text-[#ea624d] shadow-2xl active:scale-95 dark:border-slate-400 dark:bg-slate-950 md:w-96">
            <a
              className="p-2 text-sm md:text-lg"
              href="mailto:manish.foodylicious@gmail.com"
            >
              manish.foodylicious@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
