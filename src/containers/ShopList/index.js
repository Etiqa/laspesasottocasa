import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

import Shop from "../../components/shop";
import CityFilter from "../CityFilter";

const Div = styled.div``;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default () => {
  const { data, error } = useSWR(
    process.env.PUBLIC_URL + "/data/torino.json",
    fetcher
  );
  const [cityFilter, setCityFilter] = useState();

  if (error) return <Div>failed to load</Div>;
  if (!data) return <Div>loading...</Div>;

  return (
    <div>
      filtering {cityFilter}
      <CityFilter
        data={data}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
      />
      {data
        .filter((city) => !cityFilter || city.comune === cityFilter)
        .map((city) =>
          city.shops.map((shop) => (
            <Shop key={`${shop.name}-${Math.random()}`} shop={shop} />
          ))
        )}
    </div>
  );
};
