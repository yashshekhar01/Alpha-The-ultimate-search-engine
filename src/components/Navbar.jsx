import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-7 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-800 border-gray-300">
        <div className="flex justify-between items-center space-x-6 w-screen">
            <Link to="/">
                 <p className="text-3xl bg-blue-400 font-bold text-white py-2 px-4 rounded dark:bg-gray-400 dark:text-gray-800">
                     Search Engine 🔎
                 </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-100 dark:text-gray-800 bg-white border rounded-full px-4 py-2 hover:shadow-lg">
               {darkTheme ? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
    </div>
  );
}
