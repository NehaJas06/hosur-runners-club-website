import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { GalleryCorner } from "./pages/GalleryCorner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/team",
    Component: Team,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/gallery",
    Component: GalleryCorner,
  },
]);
