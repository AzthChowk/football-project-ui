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

//Dashboard
import DashboardIndex from "./pages/DashBoard/DashBoardIndex";
import DashboardRoot from "./pages/DashBoard/DashboardRoot";
import DashboardPlayers from "./pages/DashBoard/Players"; // renamed from players
import DashboardTeams from "./pages/DashBoard/Teams";
import FixturePage from "./pages/fixture-page/FixturePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageRoot />,
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
    element: <DashboardRoot />,
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
