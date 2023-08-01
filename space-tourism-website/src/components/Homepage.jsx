import { Link } from "react-router-dom";
import "../css/App.css";

function Homepage() {

    return(
        
        <main id="main" className="homepage-grid-container grid-container--home grid-container">
            <div className="homepage-content">
                <h1 className=" display-block text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So you want to travel to <span className="fs-900 ff-serif text-white">Space</span></h1>
                <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
                </p>
            </div>

                <div className="homepage-content__buttons">
                <Link to="/destinations" className="large-button uppercase ff-serif text-dark bg-white">Explore</Link>
                </div>
        </main>
    )
}

export default Homepage;