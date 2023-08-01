import "./Navbar";
import { useState, useEffect } from 'react';
import loadData from "../utils/loadData";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import yuri from "../assets/crew/image-victor-glover.png";

function Crew() {
  const [crewData, setCrewData] = useState(null);
  const [selectedCrew, setSelectedCrew] = useState(null);

  useEffect(() => {
    loadData()
      .then(data => {
        if (data && data.crew && data.crew.length > 0) {
          setCrewData(data.crew);
          setSelectedCrew(data.crew[0]); // Set the first crew member as the initially selected crew

        } else {
          console.log("Invalid data format or empty crew array.");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleCrewButtonClick = (crewMember) => {
    setSelectedCrew(crewMember);
  };

  return (
    <main id="main" className="grid-container--crew grid-container flow">
        <h1 className="numbered-title uppercase letter-spacing-2"><span aria-hidden="true">02</span> Meet your crew</h1>
        <div className="crew-content flex flow">

        <div className="tab-list dot-indicators flex ">
            {crewData && crewData.map((crewMember) => (
                <button
                    key={crewMember.name}
                    aria-selected={selectedCrew === crewMember}
                    className="tab-list__item uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark"
                    onClick={() => handleCrewButtonClick(crewMember)}
                >
                </button>
            ))}
        </div>
            {selectedCrew && (
                <article className="crew-info flex">
                <div className="crew-details">
                    <p className="crew-role fs-500 ff-serif">{selectedCrew.role}</p>
                    <h2 className=" crew-member fs-700 uppercase ff-serif">{selectedCrew.name}</h2>
                    <p className="fs-400 text-accent">{selectedCrew.bio}</p>
                    </div>
                </article>
            )}
            </div>
            <picture className="crew-image">
                <img src={selectedCrew && selectedCrew.name === "Douglas Hurley" ? douglas : selectedCrew && selectedCrew.name === "Anousheh Ansari" ? anousheh : selectedCrew && selectedCrew.name === "Mark Shuttleworth" ? mark : yuri} alt={selectedCrew && selectedCrew.name} />
            </picture>

    </main>
  );
}

export default Crew;
