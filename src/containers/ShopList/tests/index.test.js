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
    data: [
      {
        comune: "city",
        shops: [
          {
            name: "foo",
            address: "main street",
            type: "grocery",
          },
          {
            name: "bar",
            address: "first street",
            type: "wine",
          },
        ],
      },
    ],
  };

  useSWR.mockReturnValue(resp);

  const { getByText } = render(<ShopList />);

  useSWR.mockImplementation(() => Promise.resolve(resp));

  // TODO: change test and only check the components
  expect(getByText(/foo/i)).toBeTruthy();
  expect(getByText(/main street/i)).toBeTruthy();

  expect(getByText(/bar/i)).toBeTruthy();
  expect(getByText(/first street/i)).toBeTruthy();
});

test("Display multiple cities", () => {
  const resp = {
    data: [
      {
        comune: "city1",
        shops: [
          {
            name: "foo1",
            address: "main street1",
            type: "grocery",
          },
          {
            name: "bar1",
            address: "first street1",
            type: "wine",
          },
        ],
      },
      {
        comune: "city2",
        shops: [
          {
            name: "foo2",
            address: "main street2",
            type: "grocery",
          },
          {
            name: "bar2",
            address: "first street2",
            type: "wine",
          },
        ],
      },
    ],
  };

  useSWR.mockReturnValue(resp);

  const { getByText } = render(<ShopList />);

  useSWR.mockImplementation(() => Promise.resolve(resp));

  // TODO: change test and only check the components
  expect(getByText(/foo1/i)).toBeTruthy();
  expect(getByText(/main street1/i)).toBeTruthy();

  expect(getByText(/bar1/i)).toBeTruthy();
  expect(getByText(/first street1/i)).toBeTruthy();

  expect(getByText(/foo2/i)).toBeTruthy();
  expect(getByText(/main street2/i)).toBeTruthy();

  expect(getByText(/bar2/i)).toBeTruthy();
  expect(getByText(/first street2/i)).toBeTruthy();
});
