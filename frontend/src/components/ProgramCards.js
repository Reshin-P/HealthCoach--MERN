import React from "react";

import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Cards = ({ programs }) => {
  return (

    <Card key={programs.programname} className=" mx-auto border_gradient px-auto my-3  shadow" style={{ minWidth: "50%" , maxWidth:"80%" }}>
       <LinkContainer to={`/programs/${programs.programname}`}>
        <Card.Img width="100%" height="500" src={programs.image} />
     </LinkContainer> 
    <Card.Title className="text-center mt-3 text-danger">{programs.programname}</Card.Title>
    </Card >

  );
};

export default Cards;
