import React from "react";
import { Row } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import "../../CSS/index.css";
const top_contributors = [
  {
    image: "https://tinyurl.com/y3o9st92",
    name: "User Name",
  },
  {
    image: "https://tinyurl.com/y3o9st92",
    name: "User Name",
  },
  {
    image: "https://tinyurl.com/y3o9st92",
    name: "User Name",
  },
  {
    image: "https://tinyurl.com/y3o9st92",
    name: "User Name",
  },
];

function TopContributor() {
  return (
    <div>
      <div>
        <h5 align="center">Top Contributors</h5>
      </div>

      <div>
        {top_contributors.map((top) => (
          <Row className="avtar">
            <Avatar src={top.image} alt={top.name} />
            <p className="avtar-name">{top.name}</p>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default TopContributor;
