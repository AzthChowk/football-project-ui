import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import HomePageRoot from "./pages/LandingPage/HomePageRoot";
import NoPageFound from "./pages/NoPageFound/NoPageFound";
import HomePage from "./pages/LandingPage/HomePage";
import Teams from "./pages/Teams/Teams";
import News from "./pages/News/News";
import NewsFullDetails from "./components/News/NewsFullDetails";
import Players from "./pages/Players/Players";
import Result from "./pages/Result/Result";
import LoginPage from "./pages/Login/LoginPage";
import FixturePage from "./pages/fixture-page/FixturePage";
import Register from "./pages/Register/Register";
import AdminRouteProtect from "./routeProtect/AdminRouteProtect";

import DashboardIndex from "./pages/DashBoard/DashBoardIndex";
import DashboardFixtures from "./pages/DashBoard/DashboardFixtures";
import DashboardNews from "./pages/DashBoard/DashboardNews";
import DashboardPtTbl from "./pages/DashBoard/DashboardPtTbl";
import DashboardResults from "./pages/DashBoard/DashboardResults";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardPlayers from "./pages/DashBoard/DashboardPlayers";
import DashboardTeams from "./pages/DashBoard/DashboardTeams";
import NewsAddForm from "./components/News/NewsAddForm";

//query client
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// react redux
import { Provider } from "react-redux";
import store from "./redux-store/store";

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
        path: "news/:id",
        element: <NewsFullDetails />,
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
        element: <LoginPage />,
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
