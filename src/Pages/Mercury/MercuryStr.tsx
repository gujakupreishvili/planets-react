import Header from "../../components/Header/Header";
import { SetStateAction, useState } from "react";
import { PlanetData } from "../../components/interface/common";
import data from "../../data.json";
import planetMercuryInterla from "../../../public/assets/Mercury/planet-mercury-internal.svg";
import { Link } from "react-router-dom";
import Structure from "../../components/Structure/Structure";
import Footer from "../../components/Footer/Footer";

export default function MercuryStructure() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [overviewActive, setOverviewActive] = useState(true);
  const [structureActive, setStructureActive] = useState(false);
  const [surfaceActive, setSurfaceActive] = useState(false);

  const toggleActive = (section: string) => {
    setOverviewActive(section === "overview");
    setStructureActive(section === "structure");
    setSurfaceActive(section === "surface");
  };

  // Find the planet data for Mercury
  const findMercury = () => {
    const find = data.find((res) => res.name === "Mercury");
    if (find) {
      setSelectedPlanet(find);
    }
  };
  // Call findMercury() to set the selectedPlanet data
  useState(() => {
    findMercury();
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
          to="/Mercury"
          onClick={() => toggleActive("overview")}
          className={overviewActive ? "active" : "no-active"}
        >
          OVERVIEW
        </Link>
        <Link
          to="/Mercury/structure"
          onClick={() => toggleActive("structure")}
          className={structureActive ? "active" : "no-active"}
        >
          Structure
        </Link>
        <Link
          to="/Mercury/surface"
          onClick={() => toggleActive("surface")}
          className={surfaceActive ? "active" : "no-active"}
        >
          Surface
        </Link>
      </div>
      <hr className=" header-bar-hr" />
      {selectedPlanet && (
        <>
          <Structure
            img={planetMercuryInterla}
            planetName={selectedPlanet.name}
            structure={selectedPlanet.structure.content}
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
