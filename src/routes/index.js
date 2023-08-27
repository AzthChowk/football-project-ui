import DashBoardPageRoutes from "./DashBoardPageRoutes";
import HomePageRoutes from "./HomePageRoutes";
import LoginRoutes from "./LoginRoutes";
import NewsAddFormRoutes from "./NewsAddFormRoutes";
import NewsRoutes from "./NewsRoutes";
import PlayerAddPageRoutes from "./PlayerAddPageRoutes";
import PlayersPageRoutes from "./PlayersPageRoutes";
import TeamAddPageRoutes from "./TeamAddPageRoutes";
import TeamsRoutes from "./TeamsRoutes";

const applicationRoutes = [
  ...HomePageRoutes,
  ...TeamsRoutes,
  ...NewsRoutes,
  ...LoginRoutes,
  ...DashBoardPageRoutes,
  ...PlayersPageRoutes,
  ...PlayerAddPageRoutes,
  ...TeamAddPageRoutes,
  ...NewsAddFormRoutes,
];
export default applicationRoutes;
