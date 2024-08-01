import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={'/'} className="text-5xl text-white font-semibold">
          LEGO
        </Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default NavBar;
