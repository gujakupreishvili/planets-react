import { useState } from "react";
import Header from "../Header/Header";
import data from "../../data.json";
import { PlanetData } from "../interface/common";
import Footer from "../Footer/Footer";

export default function Content() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const result = (planet: string) => {
    console.log(planet);
    const find = data.find((res) => res.name === planet);
    console.log(find);
    if (find) {
      setSelectedPlanet(find);
    }
  };

  return (
    <>
      <Header />
      <div>
        <button onClick={() => result("Mercury")}>Mercury</button>
        <button onClick={() => result("Venus")}>Venus</button>
        <button onClick={() => result("Earth")}>Earth</button>
        <button onClick={() => result("Mars")}>Mars</button>
        <button onClick={() => result("Jupiter")}>Jupiter</button>
        <button onClick={() => result("Saturn")}>Saturn</button>
        <button onClick={() => result("Uranus")}>Uranus</button>
        <button onClick={() => result("Neptune")}>Neptune</button>
      </div>
      <div className="info">
        {selectedPlanet && (
          <div className=" info-div">
            <img src={selectedPlanet.images.geology} alt="" />
            <div className=" text-div">
              <div className="info">
                <h1>{selectedPlanet.name}</h1>
                <p>{selectedPlanet.overview.content}</p>
                <p>
                  Source:{" "}
                  <a
                    href={selectedPlanet.structure.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"wikipedia"}
                  </a>
                </p>
              </div>
              <div className="btn-div">
                <button>01</button>
                <button>02</button>
                <button>03</button>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
