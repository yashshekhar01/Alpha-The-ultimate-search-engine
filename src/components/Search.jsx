import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext} from '../contexts/ResultContextProvider';
import { Links } from './Links';

export const Search = () => {
  const [text, setText] = useState('Steve Jobs');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-52 md:ml-80 sm:-mt-9 mt-5">
        <input
            value={text}
            type="text"
            className="sm:w-96 w-80 h-9 dark:bg-gray-300 border rounded-full shadow-sm outline-none p-8 text-black hover:shadow-lg"
            placeholder="🔎 Search Alpha or type URL"
            onChange={(e) => setText(e.target.value)}
        />
        {!text && (
          <button type="button" className="absolute" top-1 right-3 text-3xl text-gray-600 onClick={() => setText('')}>
              x
          </button>
        )}
        <Links />
    </div>
  );
};

