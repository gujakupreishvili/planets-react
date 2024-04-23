interface StructureProps {
  img: string;
  planetName: string;
  structure: string;
  source: string;
}

export default function Structure({ img, planetName, structure, source }: StructureProps) {
  return (
    <div className="information-div">
      <img src={img} alt="" />
      <div className="text-div">
        <div className="info">
          <h1>{planetName}</h1>
          <p>{structure}</p>
          <p>
            Source:{" "}
            <a href={source} target="_blank" rel="noopener noreferrer">
              Wikipedia
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
  );
}

