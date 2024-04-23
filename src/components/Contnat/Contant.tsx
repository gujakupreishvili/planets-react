import { useState } from "react";
import Header from "../Header/Header";
import data from "../../data.json";
import { PlanetData } from "../interface/common";
// import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Content() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const result = (planet: string) => {
    console.log(planet);
    const find = data.find((res) => res.name === planet);
    console.log(find);
    if (find) {
      setSelectedPlanet(find);
    }
  };
  console.log(menu);
  console.log(selectedPlanet);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} onClick={handleMenu} />
      <div className={menu ? "contant" : "none"}>
        <Link
          to="/Mercury"
          onClick={() => result("Mercury")}
          className="section"
        >
          <div className="oval"></div>
          <h2>Mercury</h2>
        </Link>
        <hr />
        <Link
          to="/Venus/first"
          onClick={() => result("Venus")}
          className="section"
        >
          <div className="oval-2"></div>
          <h2>Venus</h2>
        </Link>
        <hr />
        <Link to="/Earth" onClick={() => result("Earth")} className="section">
          <div className="oval-3"></div>
          <h2>Earth</h2>
        </Link>
        <hr />
        <Link to="/Mars" onClick={() => result("Mars")} className="section">
          <div className="oval-4"></div>
          <h2>Mars</h2>
        </Link>
        <hr />
        <Link
          to="/Jupiter"
          onClick={() => result("Jupiter")}
          className="section"
        >
          <div className="oval-5"></div>
          <h2>Jupiter</h2>
        </Link>
        <hr />
        <Link
          to={"/Saturn"}
          onClick={() => result("Saturn")}
          className="section"
        >
          <div className="oval-6"></div>
          <h2>Saturn</h2>
        </Link>
        <hr />
        <Link to="/Uranus" onClick={() => result("Uranus")} className="section">
          <div className="oval-7"></div>
          <h2>Uranus</h2>
        </Link>
        <hr />
        <Link
          to="/Neptune"
          onClick={() => result("Neptune")}
          className="section"
        >
          <div className="oval-8"></div>
          <h2>Neptune</h2>
        </Link>
      </div>
      <div className={menu ? "info" : "none"}></div>
    </>
  );
}
