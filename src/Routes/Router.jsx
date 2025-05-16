import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddCoffe from "../Pages/AddCoffe";
import CoffeeDetail from "../Pages/CoffeeDetail";
import UpdateCoffee from "../Pages/UpdateCoffee";
import ErrorPage from "../Pages/ErrorPage";

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
          path: "*",
          Component: ErrorPage
        }

    ]
  },
]);