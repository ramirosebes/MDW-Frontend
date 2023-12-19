import React from 'react';
import './notfound.css';
const NotFound = () => {
  return (
    <div className="notFound">
      <h2 className="notFundTitle">404</h2>
      <p className="notFoundP1">Not Found</p>
      <p className="notFoundP2">The page you are looking foy may have been moved, deleted or possibly never existed.</p>
    </div>
  );
};

export default NotFound;