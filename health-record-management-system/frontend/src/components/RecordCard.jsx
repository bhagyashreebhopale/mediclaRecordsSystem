import React from 'react';

const RecordCard = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default RecordCard;