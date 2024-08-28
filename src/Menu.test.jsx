import { describe, it, expect } from "vitest";

import { screen, fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

it("renders without crashing for snacks", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/snacks"]}>
      <Menu type="snacks" items={[{ id: 0, name: "test snack" }]} />
    </MemoryRouter>
  );
  screen.getByText("test snack");
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing for drinks", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/drinks"]}>
      <Menu type="drinks" items={[{ id: 0, name: "test drink" }]} />
    </MemoryRouter>
  );
  screen.getByText("test drink");

  expect(asFragment()).toMatchSnapshot();
});
