import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [overviewActive, setOverviewActive] = useState(true);
  const [structureActive, setStructureActive] = useState(false);
  const [surfaceActive, setSurfaceActive] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const toggleActive = (section: string) => {
    setOverviewActive(section === "overview");
    setStructureActive(section === "structure");
    setSurfaceActive(section === "surface");
  };
  
  return (
    <>
      <header>
        <h1>The Planets</h1>
        <FontAwesomeIcon
          icon={menu ? faTimes : faBars}
          onClick={handleMenu}
          className="menu-icon"
        />
      </header>
      <div className="header-bar">
        <p
          onClick={() => toggleActive("overview")}
          className={overviewActive ? "active" : "no-active"}
        >
          OVERVIEW
        </p>
        <p
          onClick={() => toggleActive("structure")}
          className={structureActive ? "active" : "no-active"}
        >
          Structure
        </p>
        <p
          onClick={() => toggleActive("surface")}
          className={surfaceActive ? "active" : "no-active"}
        >
          Surface
        </p>
      </div>
      <hr />
    </>
  );
}
