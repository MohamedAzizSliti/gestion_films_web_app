import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'; // Import your CSS for styles

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="page"
              >
                <SearchPage />
              </motion.div>
            }
          />
          <Route
            path="/movie/:imdbID"
            element={
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="page"
              >
                <DetailsPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
