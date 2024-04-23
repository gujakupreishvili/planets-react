import Header from "../../components/Header/Header";
import { SetStateAction, useState } from "react";
import { PlanetData } from "../../components/interface/common";
import data from "../../data.json";
import { Link } from "react-router-dom";
import planetEarthGeo from "../../../public/assets/Earth/geology-earth.png";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";

export default function EarthSurface() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [overviewActive, setOverviewActive] = useState(true);
  const [structureActive, setStructureActive] = useState(false);
  const [surfaceActive, setSurfaceActive] = useState(false);

  const toggleActive = (section: string) => {
    setOverviewActive(section === "overview");
    setStructureActive(section === "structure");
    setSurfaceActive(section === "surface");
  };

  const findVenus = () => {
    const find = data.find((res) => res.name === "Venus");
    if (find) {
      setSelectedPlanet(find);
    }
  };

  useState(() => {
    findVenus();
  });
  return (
    <>
      <Header
        menu={false}
        setMenu={function (_value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="header-bar">
        <Link
          to="/Earth"
          onClick={() => toggleActive("overview")}
          className={overviewActive ? "active" : "no-active"}
        >
          OVERVIEW
        </Link>
        <Link
          to="/Earth/structure"
          onClick={() => toggleActive("structure")}
          className={structureActive ? "active" : "no-active"}
        >
          Structure
        </Link>
        <Link
          to="/Earth/surface"
          onClick={() => toggleActive("surface")}
          className={surfaceActive ? "active" : "no-active"}
        >
          Surface
        </Link>
      </div>
      <hr className=" header-bar-hr" />
      {selectedPlanet && (
        <>
          <Information
            img={planetEarthGeo}
            planetName={selectedPlanet.name}
            overviewContant={selectedPlanet.overview.content}
            source={selectedPlanet.structure.source}
          />
          <Footer
            revolution={selectedPlanet.revolution}
            rotation={selectedPlanet.rotation}
            radius={selectedPlanet.radius}
            average={selectedPlanet.temperature}
          />
        </>
      )}
    </>
  );
}
