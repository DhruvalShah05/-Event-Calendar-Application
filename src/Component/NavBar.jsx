import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Event Scheduler</div>
      </div>
    </nav>
  );
};

export default NavBar;
