import React from "react";
import styled from "styled-components";
import { A } from "@bootstrap-styled/v4";

const Name = styled.div`
  font-weight: 700;
`;

export default ({ shop }) => {
  return (
    <div>
      <Name>
        {shop.urls ? <A href={shop.urls[0]}>{shop.name}</A> : shop.name}
      </Name>
      <div>{shop.address}</div>
      <div>{shop.merce ? shop.merce.join(", ") : ""}</div>
      <div>{shop.consegna}</div>
      <div>{shop.email}</div>
      <div>{shop.phones ? shop.phones.join(", ") : ""}</div>
      <hr />
    </div>
  );
};
