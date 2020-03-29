import React from "react";
import styled from "styled-components";

export default ({ shop }) => {
  return (
    <div>
      Shop {shop.name} in {shop.address}. Phone:{" "}
      {shop.phone ? shop.phone : "N/A"}
    </div>
  );
};
