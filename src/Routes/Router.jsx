import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddCoffe from "../Pages/AddCoffe";
import CoffeeDetail from "../Pages/CoffeeDetail";
import UpdateCoffee from "../Pages/UpdateCoffee";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UsersInfo from "../Pages/UsersInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            loader: () => fetch('http://localhost:3000/coffees'),
            Component: Home
        },
        {
          path: "addCoffee",
          Component: AddCoffe
        },
        {
          path: "coffeeDetail/:id",
          loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
          Component: CoffeeDetail
        }, 
        {
          path: "updateCoffee/:id",
          loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
          Component: UpdateCoffee
        },
        {
          path: "login",
          Component: Login
        },
        {
          path: "register",
          Component: Register
        },
        {
          path: "usersInfo",
          loader: ()=> fetch('http://localhost:3000/users'),
          Component: UsersInfo
        },
        {
          path: "*",
          Component: ErrorPage
        }

    ]
  },
]);