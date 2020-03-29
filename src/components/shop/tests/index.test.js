import React from "react";
import { cleanup, render } from "@testing-library/react";
import Shop from "../";

describe("Shop data is shows", () => {
  test("Full data is show", () => {
    const data = {
      name: "foo",
      email: "info@domain.it",
      urls: ["https://www.domain.it/"],
      phones: ["1234567"],
      address: "main street",
      merce: ["ENOTECA"],
      consegna: "",
    };
    const { getByText, querySelector } = render(<Shop shop={data} />);

    expect(getByText(/foo/i)).toBeTruthy();
    expect(getByText(/main street/i)).toBeTruthy();
    expect(getByText(/info@domain.it/i)).toBeTruthy();
    expect(getByText(/foo/i).href).toBe("https://www.domain.it/");
    expect(getByText(/123456/i)).toBeTruthy();
    expect(getByText(/enoteca/i)).toBeTruthy();
  });

  test("Partial data is shown", () => {
    const data = {
      name: "foo",
      address: "main street",
    };
    const { queryByText } = render(<Shop shop={data} />);

    expect(queryByText(/foo/i)).toBeTruthy();
    expect(queryByText(/main street/i)).toBeTruthy();
  });
});
