import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePageRoot from "./pages/LandingPage/HomePageRoot";
import HomePage from "./pages/LandingPage/HomePage";
import Teams from "./pages/Teams";
import News from "./pages/News";
import Players from "./pages/Players/Players";
import Login from "../src/components/Login/Login";

//query client
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

// react redux
import { Provider } from "react-redux";
import store from "./redux-store/store";

//Dashboard
import DashboardIndex from "./pages/DashBoard/DashBoardIndex";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardPlayers from "./pages/DashBoard/Players"; // renamed from players
import DashboardTeams from "./pages/DashBoard/Teams";
import FixturePage from "./pages/fixture-page/FixturePage";
import Result from "./pages/Result/Result";
import AdminRouteProtect from "./routeProtect/AdminRouteProtect";
import NoPageFound from "./pages/NoPageFound/NoPageFound";

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
