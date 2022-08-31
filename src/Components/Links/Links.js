import React from "react";
import { FaLink, FaArrowRight } from "react-icons/fa";

const Links = ({ url }) => {
  return (
    <div className="links">
      <span>
        {" "}
        <FaLink />
      </span>
      <a target="blank" href={url}>
        View Gist <FaArrowRight style={{ fontSize: "13px" }} />
      </a>
    </div>
  );
};

export default Links;
