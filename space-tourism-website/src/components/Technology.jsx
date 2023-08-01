import "../css/App.css";
import loadData from "../utils/loadData";
import { useEffect, useState } from "react";
import launchVehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePort from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";

const mobileMaxWidth = 560; // 35rem
const tabletMaxWidth = 800; // 50rem

function Technology() {
  const [technologyData, setTechnologyData] = useState(null);
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType());

    window.addEventListener("resize", handleResize);

    // Cleanup this component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    loadData()
      .then((data) => {
        if (data && data.technology && data.technology.length > 0) {
          setTechnologyData(data.technology);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Set the initial selected index to 0 (the first button).
    if (technologyData && technologyData.length > 0) {
      setSelectedTechnologyIndex(0);
    }
  }, [technologyData]);

  const handleTechnologyButtonClick = (index) => {
    setSelectedTechnologyIndex(index);
  };

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= mobileMaxWidth) {
      return 'mobile';
    } else if (width <= tabletMaxWidth) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  function getImageSource(deviceType, selectedTechnology) {
    if (!selectedTechnology) return;

    switch (selectedTechnology.name) {
      case "Launch vehicle":
        return deviceType === 'desktop' ? launchVehiclePortrait : launchVehicle;
      case "Spaceport":
        return deviceType === 'desktop' ? spacePortPortrait : spacePort;
      case "Space capsule":
        return deviceType === 'desktop' ? spaceCapsulePortrait : spaceCapsule;
      default:
        return; // default image
    }
  }

  return (
    <main id="main" className="grid-container--technology grid-container flow">
      <h1 className="numbered-title uppercase letter-spacing-2 ff-serif">
        <span aria-hidden="true">03</span>Space Launch 101
      </h1>
      <div className="tab-list dot-indicators large-dot-indicators  flex ">
        {technologyData &&
          technologyData.map((d, i) => (
            <button
              key={d.name}
              aria-selected={selectedTechnologyIndex === i}
              className="tab-list__item uppercase ff-sans-cond letter-spacing-2 fs-400"
              onClick={() => handleTechnologyButtonClick(i)}
              style={{ width: "4rem", height: "4rem" }}
            >
              {console.log(d.name)}
              {i + 1}
            </button>
          ))}
      </div>

      <section className="technology-info flow ">
        <p className="ff-serif uppercase fs-400 letter-spacing-2 text-accent">
          The terminology
        </p>
        <h2 className="fs-700 uppercase ff-serif">
          {technologyData && technologyData[selectedTechnologyIndex]?.name}
        </h2>
        <p className="fs-400 text-accent">
          {technologyData && technologyData[selectedTechnologyIndex]?.description}
        </p>
      </section>

      <picture className="technology-image">
        <img
          src={getImageSource(deviceType, technologyData && technologyData[selectedTechnologyIndex])}
          alt={technologyData && technologyData[selectedTechnologyIndex]?.name}
        />
      </picture>
    </main>
  );
}

export default Technology;
