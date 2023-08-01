import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Destinations from './components/Destinations';
import Crew from './components/Crew';
import Technology from './components/Technology';
import ErrorPage from './components/ErrorPage';
import HomePageLayout from './components/Layout';
import OtherPageLayout from './components/OtherPageLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageLayout><Homepage /></HomePageLayout>} />
        <Route path="/destinations" element={<OtherPageLayout><Destinations /></OtherPageLayout>} />
        <Route path="/crew" element={<OtherPageLayout><Crew /></OtherPageLayout>} />
        <Route path="/technology" element={<OtherPageLayout><Technology /></OtherPageLayout>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
