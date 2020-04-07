import React from "react";
import { render } from "@testing-library/react";
import CityFilter from "../";

describe("It is possible to filter basing on the city", () => {
  test("A dropdown with the cities is show", () => {
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

    let cityFilter = "";

    const setCityFilter = jest.fn();

    const { getByText, queryByText } = render(
      <CityFilter
        data={data}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
      />
    );

    expect(getByText("Seleziona una città")).toBeInTheDocument();
    // expect(getByText("city1")).toBeInTheDocument();
    // expect(getByText("city2")).toBeInTheDocument();

    // fireEvent.change(screen.getByLabelText(/password/i), {
    //   target: {value: 'norris'},
    // })
  });
});
