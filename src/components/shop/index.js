import React from "react";
import styled from "styled-components";

const Name = styled.div`
  font-weight: 700;
  color: white;
`;

const Address = styled.div``;

const Phone = styled.div`
  color: grey;
`;

const Email = styled.div``;

const Type = styled.div``;

const Hr = styled.hr`
  color: white;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

export default ({ shop }) => {
  return (
    <div>
      <Name>
        {shop.urls ? <A href={shop.urls[0]}>{shop.name}</A> : shop.name}
      </Name>
      <Address>{shop.address}</Address>
      <Email>{shop.email}</Email>
      <Phone>{shop.phones ? shop.phones.join(", ") : ""}</Phone>
      <Type>{shop.merce ? shop.merce.join(", ") : ""}</Type>
      <Hr />
    </div>
  );
};
