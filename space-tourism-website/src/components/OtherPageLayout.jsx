import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "../css/App.css";

export default function OtherPageLayout({ children }) {
  const location = useLocation();

  return (
    <div className={`${location.pathname === "/destinations" ? "destination-page" : location.pathname==="/crew" ? "crew-page" : location.pathname==="/technology" ? "technology-page" : ""}`}>
      <a className="skip-to-content" href="#main">
        Skip to main content
      </a>
      <Navbar />
      {children}
    </div>
  );
}

OtherPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};