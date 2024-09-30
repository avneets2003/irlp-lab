import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from "./pages/home/index";
import PeoplePage from "./pages/people/index";
import ResearchPage from "./pages/research/index";
import PublicationsPage from "./pages/publications/index";
import EventsPage from "./pages/events/index";
import ContactPage from "./pages/contact/index";

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-fill">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
