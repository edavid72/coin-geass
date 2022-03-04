import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../views/MainPage';
import ResumePage from '../views/ResumePage';
import AboutPage from '../views/AboutPage';
import NotFoundPage from '../views/NotFoundPage';
import Navbar from '../components/navbar/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Redirect */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
