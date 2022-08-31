import React from "react";
import { FaTag } from "react-icons/fa";
const Tags = ({ files }) => {
  return (
    <div className="tags">
      <h2>
        <FaTag />
      </h2>
      {Object.keys(files).map((key) => {
        return (
          <span key={key}>
            {files[key].language}
            <h3>{files[key].filename}</h3>
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
