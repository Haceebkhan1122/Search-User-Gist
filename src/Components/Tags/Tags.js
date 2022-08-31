import React from "react";

const Tags = ({ files }) => {
  return (
    <div className="tags">
      {Object.keys(files).map((key) => {
        return <span>{files[key].language}</span>;
      })}
    </div>
  );
};

export default Tags;
