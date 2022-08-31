import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "../Tags/Tags";
import Links from "../Links/Links";
import Avatar from "../Avatar/Avatar";

const GistCard = ({ data }) => {
  return (
    <div className="card_custom">
      <Card>
        <Tags files={data.files} />
        <Links url={data.html_url} />
        <Avatar gistId={data.id} />
      </Card>
    </div>
  );
};

export default GistCard;
