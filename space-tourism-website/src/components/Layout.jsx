import PropTypes from 'prop-types';
import Navbar from './Navbar';

function HomePageLayout({ children }) {
  return (
    <div className="App">
      <a className="skip-to-content" href="#main">
        Skip to main content
      </a>
      <Navbar />
      {children}
    </div>
  );
}

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageLayout;
