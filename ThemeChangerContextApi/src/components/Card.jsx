import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="data:image/png;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
