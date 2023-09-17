import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../src/components/Login/Login";
import "./index.css";
import HomePage from "./pages/LandingPage/HomePage";
import HomePageRoot from "./pages/LandingPage/HomePageRoot";
import News from "./pages/News/News";
import Players from "./pages/Players/Players";
import Teams from "./pages/Teams";

//query client
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// react redux
import { Provider } from "react-redux";
import store from "./redux-store/store";

//Dashboard
import NewsAddForm from "./components/News/NewsAddForm";
import Register from "./components/Register/Register";
import DashboardIndex from "./pages/DashBoard/DashBoardIndex";
import DashboardFixtures from "./pages/DashBoard/DashboardFixtures";
import DashboardNews from "./pages/DashBoard/DashboardNews";
import DashboardPtTbl from "./pages/DashBoard/DashboardPtTbl";
import DashboardResults from "./pages/DashBoard/DashboardResults";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardPlayers from "./pages/DashBoard/DashboardPlayers";
import DashboardTeams from "./pages/DashBoard/DashboardTeams";
import NoPageFound from "./pages/NoPageFound/NoPageFound";
import Result from "./pages/Result/Result";
import FixturePage from "./pages/fixture-page/FixturePage";
import AdminRouteProtect from "./routeProtect/AdminRouteProtect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoot />,
    errorElement: <NoPageFound />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "players",
        element: <Players />,
      },
      {
        path: "results",
        element: <Result />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "fixtures",
        element: <FixturePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NoPageFound />,
  },
  {
    path: "/admin",
    element: (
      <AdminRouteProtect>
        <DashboardRoot />
      </AdminRouteProtect>
    ),
    errorElement: <NoPageFound />,

    children: [
      { index: true, element: <DashboardIndex /> },
      {
        path: "players",
        element: <DashboardPlayers />,
      },
      {
        path: "teams",
        element: <DashboardTeams />,
      },
      {
        path: "news",
        element: <DashboardNews />,
      },
      {
        path: "addnews",
        element: <NewsAddForm />,
      },
      {
        path: "fixtures",
        element: <DashboardFixtures />,
      },
      {
        path: "results",
        element: <DashboardResults />,
      },
      {
        path: "pointtable",
        element: <DashboardPtTbl />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
