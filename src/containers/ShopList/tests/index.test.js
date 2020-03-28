import React from "react";
import { render } from "@testing-library/react";
import ShopList from "../";

import useSWR from "swr";

jest.mock("swr");

test("Initial page shows the loading", () => {
  const resp = {
    loading: true,
  };

  useSWR.mockReturnValue(resp);

  const { getByText } = render(<ShopList />);

  useSWR.mockImplementation(() => Promise.resolve(resp));

  expect(getByText(/loading/i)).toBeTruthy();
});

test("Display a list of shops when there is some data", () => {
  const resp = {
    data: {
      shops: [
        {
          name: "foo",
          address: "foo street",
          type: "grocery",
        },
        {
          name: "bar",
          address: "bar street",
          type: "wine",
        },
      ],
    },
  };

  useSWR.mockReturnValue(resp);

  const { getByText } = render(<ShopList />);

  useSWR.mockImplementation(() => Promise.resolve(resp));

  // TODO: change test and only check the components
  expect(getByText(/foo/i)).toBeTruthy();
  expect(getByText(/foo street/i)).toBeTruthy();

  expect(getByText(/bar/i)).toBeTruthy();
  expect(getByText(/bar street/i)).toBeTruthy();
});
