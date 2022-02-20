import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import { ImCheckmark } from "@react-icons/all-files/im/ImCheckmark";

const StyleDiv = styled.div`
  .icon-green {
    color: var(--green);
    margin-right: 5px;
  }
  .listgroups {
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

function Details() {
  return (
    <StyleDiv>
      <h3>facilities</h3>
      <div className="listgroups">
        <ListGroup>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            swimming pool
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            spa
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            tennis lounge
          </ListGroup.Item>
        </ListGroup>

        <ListGroup>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            gym
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            wifi
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            room services
          </ListGroup.Item>
        </ListGroup>

        <ListGroup>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            sports arena
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            bar
          </ListGroup.Item>
          <ListGroup.Item>
            <ImCheckmark className="icon-green" />
            children playground
          </ListGroup.Item>
        </ListGroup>
      </div>
    </StyleDiv>
  );
}

export default Details;
