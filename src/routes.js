
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Teams from "views/Teams.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import CollegeTeam from "views/CollegeTeam.js";
import Family from "views/Family.js";
import Civic from "views/Civic.js";
import Mental from "views/Mental.js";
import Senior from "views/Senior.js";
import Educational from "views/Educational.js";
import Crisis from "views/Crisis.js";





var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/teams",
    name: "Teams",
    icon: "nc-icon nc-caps-small",
    component: Teams,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/CollegeTeam",
    component: CollegeTeam,
    layout: "/admin",
  },
  {
    path: "/Family",
    layout: "/admin",
  },
  {
    path: "/Mental",
    layout: "/admin",
  },
  {
    path: "/Senior",
    layout: "/admin",
  },
  {
    path: "/Educational",
    layout: "/admin",
  },
  {
    path: "/Crisis",
    layout: "/admin",
  },
  {
    path: "/Civic",
    layout: "/admin",
  },

];
export default routes;
