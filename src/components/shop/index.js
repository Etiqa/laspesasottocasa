import React from "react";
import styled from "styled-components";

export default ({ data }) => {
  return (
    <div>
      Shop {data.name} in {data.address}
    </div>
  );
};
