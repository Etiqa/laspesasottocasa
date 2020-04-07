import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CityFilter from "../";

describe("It is possible to filter basing on the city", () => {
  const data = [
    {
      comune: "city1",
      shops: [],
    },
    {
      comune: "city2",
      shops: [],
    },
  ];
  const cityFilter = "";
  const setCityFilter = jest.fn();

  test("A dropdown with the cities is show", () => {
    const { getByText, getByLabelText } = render(
      <CityFilter
        data={data}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
      />
    );

    expect(getByText("city1")).toBeInTheDocument();
    expect(getByText("city2")).toBeInTheDocument();
  });

  test("The dropdown sets the city in the cityFiler", () => {
    const { getByText, getByLabelText } = render(
      <CityFilter
        data={data}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
      />
    );

    fireEvent.change(getByLabelText(/cityFilter/i), {
      target: { value: "city1" },
    });

    expect(setCityFilter).toBeCalledWith("city1");
  });
});
