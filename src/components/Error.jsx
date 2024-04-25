import React from 'react';

const Error = ({ title, message }) => {
  return (
    <div className="max-w-md bg-red-300 mx-auto p-4 rounded m-4">
      <h2 className="text-xl font-bold text-red-950">{title}</h2>
      <p className="text-lg text-red-950">{message}</p>
    </div>
  );
};

export default Error;
