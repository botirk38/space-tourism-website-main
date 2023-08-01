import "../css/App.css";
import "./Navbar";
import { useState, useEffect } from 'react';
import loadDestinationData from "../utils/loadDestinationData";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";



function Destinations() {
  const [destination, setDestination] = useState('Moon');
  const [destinationData, setDestinationData] = useState(null);

  useEffect(() => {
    loadDestinationData()
      .then(data => {
        setDestinationData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDestinationButtonClick = (e) => {
    setDestination(e.target.textContent);
  }

  const currentDestination = destinationData && destinationData.find(d => d.name === destination);

  return (
    <main id="main" className="grid-container--destination grid-container flow">
      <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your Destination</h1>
      {currentDestination && (
        <img src={currentDestination.name === "Moon" ? moon : currentDestination.name === "Mars" ? mars : currentDestination.name==="Europa" ? europa : titan} alt={currentDestination.name} className="moon" />
      )}

      <div className="tab-list underline-indicators flex">
        {destinationData && destinationData.map((d) => (
          <button
            key={d.name}
            aria-selected={destination === d.name}
            className="tab-list__item uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark"
            onClick={handleDestinationButtonClick}
          >
            {d.name}
          </button>
        ))}
      </div>
      {currentDestination && (
        <article className="destinations-info">
          <h2 className="fs-800 uppercase ff-serif">{currentDestination.name}</h2>
          <p>{currentDestination.description}</p>
          <div className="flex destination-meta">
            <div className="travel-distance">
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className="text-accent fs-500 ff-serif uppercase">{currentDestination.distance}</p>
            </div>
            <div className="travel-time">
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className="fs-500 ff-serif uppercase">{currentDestination.travel}</p>
            </div>
          </div>
        </article>
      )}
    </main>
  )
}

export default Destinations;
