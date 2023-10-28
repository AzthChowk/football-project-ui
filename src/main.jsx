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

import DashboardFixtures from "./pages/AdminDashboard/Fixture/DashboardFixtures";
import DashboardPlayers from "./pages/AdminDashboard/Players/DashboardPlayers";
import DashboardPtTbl from "./pages/AdminDashboard/PointTable/DashboardPtTbl";
import DashboardResults from "./pages/AdminDashboard/Result/DashboardResults";
import DashboardRoot from "./pages/AdminDashboard/DashboardRoot";
import DashboardTeams from "./pages/AdminDashboard/Teams/DashboardTeams";

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
import ReporterRouteProtect from "./routeProtect/ReporterRouteProtect";
import EditNews from "./pages/News/EditNews";
import Users from "./pages/AdminDashboard/Users/Users";
import Profile from "./pages/Profile/Profile";

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
        element: (
          <ReporterRouteProtect>
            <NewsRoot />,
          </ReporterRouteProtect>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "news",
            element: <ReporterNews />,
          },
          {
            path: "news/add",
            element: <AddNews />,
          },
          {
            path: "news/edit/:id",
            element: <EditNews />,
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
      { index: true },
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
      {
        path: "users",
        element: <Users />,
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
