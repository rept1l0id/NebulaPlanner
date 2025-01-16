import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
        </Router>
    );
};

export default App;
