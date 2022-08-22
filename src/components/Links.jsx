import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
     { url: '/search', text: '🔎 All' },
     { url: '/news', text: '📰 News' },
     { url: '/images', text: '📸 Images' },
     { url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
    return (
    <div className="flex sm:justify-around justify-between items-center mt-6">
    {links.map(({ url, text }) => (
      <NavLink to={url} className="m-4 mb-0" activeClassName="text-blue-900 border-b-4 dark:text-blue-200 border-blue-900 pb-4">
        {text}
        </NavLink>
    ))}
  </div>
);
    }

