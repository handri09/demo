import React from 'react';
function Button({ children, color }) {
  return (
    <>
      {!color && (
        <button
          className={`text-md md:text-lg uppercase font-medium rounded-lg shadow-lg py-2 px-7 bg-green-400 text-white
            hover:ring-2 hover:ring-green-500 hover:bg-green-500
            focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-600`}>
          {children}
        </button>
      )}
      {color === 'white' && (
        <button
          className={`text-lg uppercase font-medium rounded-lg shadow-lg py-2 px-7 bg-white text-green-600 
        hover:ring-2 hover:ring-white
        border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
