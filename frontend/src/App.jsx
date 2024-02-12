import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MakeAppointment from "./MakeAppointment.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/MakeAppointment" element={<MakeAppointment />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
