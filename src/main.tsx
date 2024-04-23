import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mercury from "./Pages/Mercury/Mercury.tsx";
import MercuryStructure from "./Pages/Mercury/MercuryStr.tsx";
import MercurSurface from "./Pages/Mercury/MercurySurf.tsx";
import VenusFirst from "./Pages/Venus/VenusFirst.tsx";
import VenusStructure from "./Pages/Venus/VenusSecond.tsx";
import VenusSurface from "./Pages/Venus/VenusThird.tsx";
import Earth from "./Pages/Earth/Earth.tsx";
import EarthStructure from "./Pages/Earth/EarthSec.tsx";
import EarthSurface from "./Pages/Earth/EarthThr.tsx";
import Mars from "./Pages/Mars/Mars.tsx";
import MarsStructure from "./Pages/Mars/MarsSec.tsx";
import MarsSurface from "./Pages/Mars/MarsThd.tsx";
import Jupiter from "./Pages/Jupiter/Jupiter.tsx";
import JupiterSurface from "./Pages/Jupiter/JupiterTrd.tsx";
import JupiterStructure from "./Pages/Jupiter/JupiterSec.tsx";
import Saturn from "./Pages/Saturn/Satrun.tsx";
import SaturnStructure from "./Pages/Saturn/SatrunSec.tsx";
import SaturnSurface from "./Pages/Saturn/SaturnThd.tsx";
import Uranus from "./Pages/Uranus/Uranus.tsx";
import UranuStructure from "./Pages/Uranus/UranusSec.tsx";
import UranuSurface from "./Pages/Uranus/UranusTrd.tsx";
import Neptune from "./Pages/Neptune/Neptune.tsx";
import NeptuneStructure from "./Pages/Neptune/NeptuneSec.tsx";
import NeptuneSurface from "./Pages/Neptune/NeptuneTrd.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Mercury",
    element: <Mercury />,
  },
  {
    path: "/Mercury/structure",
    element: <MercuryStructure />,
  },
  {
    path: "/Mercury/surface",
    element: <MercurSurface />,
  },
  {
    path: "/Venus/first",
    element: <VenusFirst />,
  },
  {
    path: "/Venus/structure",
    element: <VenusStructure />,
  },
  {
    path: "/Venus/surface",
    element: <VenusSurface />,
  },
  {
    path: "/Earth",
    element: <Earth />,
  },
  {
    path: "/Earth/structure",
    element: <EarthStructure />,
  },
  {
    path: "/Earth/surface",
    element: <EarthSurface />,
  },
  {
    path: "/Mars",
    element: <Mars />,
  },
  {
    path: "/Mars/structure",
    element: <MarsStructure />,
  },
  {
    path: "/Mars/surface",
    element: <MarsSurface />,
  },
  {
    path: "/Jupiter",
    element: <Jupiter />,
  },
  {
    path: "/Jupiter/structure",
    element: <JupiterStructure />,
  },
  {
    path: "/Jupiter/surface",
    element: <JupiterSurface />,
  },
  {
    path: "/Saturn",
    element: <Saturn />,
  },
  {
    path: "/Saturn/structure",
    element: <SaturnStructure />,
  },
  {
    path: "/Saturn/surface",
    element: <SaturnSurface />,
  },
  {
    path: "/Uranus",
    element: <Uranus />,
  },
  {
    path: "/Uranus/structure",
    element: <UranuStructure />,
  },
  {
    path: "/Uranus/surface",
    element: <UranuSurface />,
  },
  {
    path: "/Neptune",
    element: <Neptune />,
  },
  {
    path: "/Neptune/structure",
    element: <NeptuneStructure />,
  },
  {
    path: "/Neptune/surface",
    element: <NeptuneSurface />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
