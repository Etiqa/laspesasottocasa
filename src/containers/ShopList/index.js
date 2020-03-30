import React from "react";
import styled from "styled-components";
import useSWR from "swr";

import Shop from "../../components/shop";

const Div = styled.div``;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default () => {
  const { data, error } = useSWR("laspesasottocasa/data/torino.json", fetcher);

  if (error) return <Div>failed to load</Div>;
  if (!data) return <Div>loading...</Div>;
  return (
    <Div>
      {data.map((city) =>
        city.shops.map((shop) => <Shop key={shop.name} shop={shop} />)
      )}
    </Div>
  );
};
