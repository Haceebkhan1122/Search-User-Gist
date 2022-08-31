import React from "react";

const Links = ({ url }) => {
  return (
    <div className="links">
      <span>Gist Url: </span>
      <a target="blank" href={url}>
        {url}
      </a>
    </div>
  );
};

export default Links;
