interface FooterProps {
  rotation: string;
  revolution: string;
  radius: string;
  average: string;
}

export default function Footer({ rotation, revolution, radius, average }: FooterProps) {
  return (
    <div className="last-info">
      <div>
        <p>ROTATION TIME</p>
        <h3>{rotation}</h3>
      </div>
      <div>
        <p>REVOLUTION TIME</p>
        <h3>{revolution}</h3>
      </div>
      <div>
        <p>radius</p>
        <h3>{radius}</h3>
      </div>
      <div>
        <p>AVERAGE TEMP.</p>
        <h3>{average}</h3>
      </div>
    </div>
  );
}

