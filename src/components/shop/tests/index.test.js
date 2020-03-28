import React from "react";
import { cleanup, render } from "@testing-library/react";
import Shop from "../";

test("Shop shows name and address", () => {
  const data = {
    name: "foo",
    address: "foo street",
  };
  const { getByText } = render(<Shop data={data} />);

  expect(getByText(/foo/i)).toBeTruthy();
  expect(getByText(/foo street/i)).toBeTruthy();
});
