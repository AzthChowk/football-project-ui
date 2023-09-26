import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/LandingPage/HomePage";
import HomePageRoot from "./pages/LandingPage/HomePageRoot";
import LoginPage from "./pages/Login/LoginPage";
import News from "./pages/News/News";
import NoPageFound from "./pages/NoPageFound/NoPageFound";
import Players from "./pages/Players/Players";
import Register from "./pages/Register/Register";
import Result from "./pages/Result/Result";
import Teams from "./pages/Teams/Teams";
import TeamsDetails from "./pages/Teams/TeamsDetails";
import FixturePage from "./pages/fixture-page/FixturePage";
import AdminRouteProtect from "./routeProtect/AdminRouteProtect";

import DashboardIndex from "./pages/DashBoard/DashBoardIndex";
import DashboardFixtures from "./pages/DashBoard/DashboardFixtures";
import DashboardPlayers from "./pages/DashBoard/DashboardPlayers";
import DashboardPtTbl from "./pages/DashBoard/DashboardPtTbl";
import DashboardResults from "./pages/DashBoard/DashboardResults";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardTeams from "./pages/DashBoard/DashboardTeams";

//query client
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// react redux
import { Provider } from "react-redux";
import AddNews from "./pages/News/AddNews";
import NewsFullDetailsPage from "./pages/News/NewsFullDetailsPage";
import NewsRoot from "./pages/News/NewsRoot";
import ReporterNews from "./pages/News/ReporterNews";
import PointTable from "./pages/PointTable/PointTable";
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
        path: "teams/:id",
        element: <TeamsDetails />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsFullDetailsPage />,
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
      {
        path: "point-table",
        element: <PointTable />,
      },
      {
        path: "reporter",
        element: <NewsRoot />,
        children: [
          {
            path: "news",
            element: <ReporterNews />,
          },
          {
            path: "news/add",
            element: <AddNews />,
          },
        ],
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
