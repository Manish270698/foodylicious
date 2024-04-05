// import React from "react";
import { React, lazy, Suspense, useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "/components/Error";
// import Cart from "./components/Cart";
// import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import useOnlineCheck from "./utils/useOnlineCheck";
import useThemeContext from "./utils/useThemeContext";

// const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(
  () => import("./components/restaurantPage/RestaurantMenu"),
);

const AppLayout = () => {
  // const { onlineCheck } = useOnlineCheck();
  const [themeName, setThemeName] = useState("light");
  const htmlTheme = document.documentElement;
  if (themeName == "light") {
    htmlTheme.classList.add("light");
    htmlTheme.classList.remove("dark");
  } else {
    htmlTheme.classList.add("dark");
    htmlTheme.classList.remove("light");
  }
  return (
    <div className="">
      <useThemeContext.Provider value={{ setThemeName }}>
        <Header />
      </useThemeContext.Provider>
      <ScrollRestoration />
      {/** Below will load different components based on path */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
