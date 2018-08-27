import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div id="Dashboard">
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/surveys/new"className="btn-floating btn-large deep-orange lighten-1">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
