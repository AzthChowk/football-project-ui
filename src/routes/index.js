import HomePageRoutes from "./HomePageRoutes";
import NewsRoutes from "./NewsRoutes";
import TeamsRoutes from "./TeamsRoutes";
import LoginRoutes from "./LoginRoutes";
import DashBoardPageRoutes from "./DashBoardPageRoutes";
import PlayersPageRoutes from "./PlayersPageRoutes";
import PlayerAddPageRoutes from "./PlayerAddPageRoutes";
import TeamAddPageRoutes from "./TeamAddPageRoutes";

const applicationRoutes = [
  ...HomePageRoutes,
  ...TeamsRoutes,
  ...NewsRoutes,
  ...LoginRoutes,
  ...DashBoardPageRoutes,
  ...PlayersPageRoutes,
  ...PlayerAddPageRoutes,
  ...TeamAddPageRoutes,
];
export default applicationRoutes;
