import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  }
];

export default routes;
