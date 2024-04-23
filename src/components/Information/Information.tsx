interface InformationProps {
  img: string;
  planetName: string;
  overviewContant: string;
  source: string;
}

export default function Information({
  img,
  planetName,
  overviewContant,
  source,
}: InformationProps) {
  return (
    <div className="information-div">
      <img src={img} alt="" />
      <div className="text-div">
        <div className="info">
          <h1>{planetName}</h1>
          <p>{overviewContant}</p>
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
