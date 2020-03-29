import React from "react";
import styled from "styled-components";
import useSWR from "swr";

import Shop from "../../components/shop";

const Div = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default () => {
  const { data, error } = useSWR("data/shops.json", fetcher);

  if (error) return <Div>failed to load</Div>;
  if (!data) return <Div>loading...</Div>;
  return (
    <Div>
      {data.shops.map((s) => (
        <Shop key={s.name} data={s} />
      ))}
    </Div>
  );
};
