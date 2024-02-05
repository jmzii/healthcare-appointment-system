import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/MakeAppointment">
        <button>Make an Appointment</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  );
}

export default Navigation;
