import React from 'react';

const Error = ({ title, message }) => {
  return (
    <div className="max-w-md bg-red-300 mx-auto p-4 rounded">
      <h2 className="text-3xl font-bold text-red-950">{title}</h2>
      <p className="text-lg text-red-950">{message}</p>
    </div>
  );
};

export default Error;
