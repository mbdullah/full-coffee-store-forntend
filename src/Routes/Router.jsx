import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import AddCoffe from "../Pages/AddCoffe";
import CoffeeDetail from "../Pages/CoffeeDetail";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateCoffee from "../Pages/UpdateCoffee";
import UsersInfo from "../Pages/UsersInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://pet-store-server.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffe,
      },
      {
        path: "coffeeDetail/:id",
        loader: ({ params }) =>
          fetch(`https://pet-store-server.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetail,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://pet-store-server.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "usersInfo",
        loader: () => fetch("https://pet-store-server.vercel.app/users"),
        Component: UsersInfo,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
