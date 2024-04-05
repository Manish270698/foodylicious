import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="dark:bg-[#0f172a] dark:text-[#e2e8f0]">
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!!</h2>
      {/* <h3>{err.}</h3> */}
      <h3>{err.data}</h3>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
