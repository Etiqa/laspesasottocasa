import React, { useState, setState } from "react";
import { render } from "@testing-library/react";
import ShopList from "../";

import useSWR from "swr";

jest.mock("swr");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

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

beforeEach(() => {
  useState.mockImplementation((init) => ["TUTTI", setState]);
  useSWR.mockReturnValue(resp);
});

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
  const { getByText } = render(<ShopList />);

  // TODO: change test and only check the components
  expect(getByText(/foo1/i)).toBeTruthy();
  expect(getByText(/main street1/i)).toBeTruthy();
});

test("Display multiple cities", () => {
  const { getByText } = render(<ShopList />);
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

test("Filter cities", () => {
  useState.mockImplementation((init) => ["city1", setState]);

  const { getByText, queryByText } = render(<ShopList />);

  // TODO: change test and only check the components
  expect(getByText(/foo1/i)).toBeTruthy();
  expect(getByText(/main street1/i)).toBeTruthy();

  expect(getByText(/bar1/i)).toBeTruthy();
  expect(getByText(/first street1/i)).toBeTruthy();

  expect(queryByText(/foo2/i)).toBe(null);
  expect(queryByText(/main street2/i)).toBe(null);

  expect(queryByText(/bar2/i)).toBe(null);
  expect(queryByText(/first street2/i)).toBe(null);
});

// test("Filter cities works", () => {
//   useState.mockImplementation(init => ['city1', setState]);

//   const { getByText, queryByText } = render(<ShopList />);

//   // TODO: change test and only check the components
//   expect(getByText(/foo1/i)).toBeTruthy();
//   expect(getByText(/main street1/i)).toBeTruthy();

//   expect(getByText(/bar1/i)).toBeTruthy();
//   expect(getByText(/first street1/i)).toBeTruthy();

//   expect(queryByText(/foo2/i)).toBe(null);
//   expect(queryByText(/main street2/i)).toBe(null);

//   expect(queryByText(/bar2/i)).toBe(null);
//   expect(queryByText(/first street2/i)).toBe(null);

//   setState('city2');

//   expect(queryByText(/foo1/i)).toBe(null);
//   expect(queryByText(/main street1/i)).toBe(null);

//   expect(queryByText(/bar1/i)).toBe(null);
//   expect(queryByText(/first street1/i)).toBe(null);

//   expect(queryByText(/foo2/i)).toBe(true);
//   expect(queryByText(/main street2/i)).toBe(true);

//   expect(queryByText(/bar2/i)).toBe(true);
//   expect(queryByText(/first street2/i)).toBe(true);

// })
