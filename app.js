// import React from "react";
import { React, lazy, Suspense, useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import Error from "/components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import useThemeContext from "./utils/useThemeContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/cartPage/Cart"));
const RestaurantMenu = lazy(
  () => import("./components/restaurantPage/RestaurantMenu"),
);

const AppLayout = () => {
  // reading system theme settings and applying the same to our app
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const isThemeDark = prefersDarkTheme.matches === true;

  // const { onlineCheck } = useOnlineCheck();
  const [themeName, setThemeName] = useState(isThemeDark ? "dark" : "light");
  const htmlTheme = document.documentElement;
  if (themeName == "light") {
    htmlTheme.classList.add("light");
    htmlTheme.classList.remove("dark");
  } else {
    htmlTheme.classList.add("dark");
    htmlTheme.classList.remove("light");
  }
  return (
    // Providing our redux store to our app
    <Provider store={appStore}>
      <useThemeContext.Provider value={{ setThemeName }}>
        <Header isThemeDark={isThemeDark} />
      </useThemeContext.Provider>
      {/* restores page scrolled */}
      <ScrollRestoration />
      {/** Below will load different components based on path */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Provider>
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
