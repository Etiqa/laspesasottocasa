import React from "react";
import { cleanup, render } from "@testing-library/react";
import Shop from "../";

describe("Shop data is shows", () => {
  test("Full data is show", () => {
    const data = {
      name: "foo",
      address: "foo street",
      phone: "123456",
    };
    const { getByText } = render(<Shop shop={data} />);

    expect(getByText(/foo/i)).toBeTruthy();
    expect(getByText(/foo street/i)).toBeTruthy();
    expect(getByText(/123456/i)).toBeTruthy();
  });

  test("Partial data is shown", () => {
    const data = {
      name: "foo",
      address: "foo street",
    };
    const { queryByText } = render(<Shop shop={data} />);

    expect(queryByText(/foo/i)).toBeTruthy();
    expect(queryByText(/foo street/i)).toBeTruthy();
    expect(queryByText(/123456/i)).toBe(null);
  });
});
