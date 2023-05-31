import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import HomeScreen from "../Pages/HomeScreen";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomeScreen/>,
      },
    ],
  },
]);
