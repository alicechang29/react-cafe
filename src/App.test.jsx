import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import api from "./api";

import React from "react";
import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// api.getItems = vi.fn();
api.getDrinks = vi.fn();
api.getSnacks = vi.fn();
api.addItem = vi.fn();

const WELCOME_TEXT = "Welcome to Alice's Cafe!";

describe("Cafe routes", function () {
  beforeEach(function () {
    api.getDrinks.mockReturnValue([]);
    api.getSnacks.mockReturnValue([]);
    api.addItem.mockReturnValue([]);
  });

  afterEach(function () {
    api.getDrinks.mockReset([]);
    api.getSnacks.mockReset([]);
    api.addItem.mockReset();
  });

  it("renders without crashing", async function () {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      screen.getByText(WELCOME_TEXT);
    });
  });

  it("renders the home snapshot", async function () {
    const { asFragment, debug } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(WELCOME_TEXT));
    expect(api.getDrinks).toHaveBeenCalledTimes(1);
    expect(api.getSnacks).toHaveBeenCalledTimes(1);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a loading message before the data is loaded", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/Loading\s*…/i);
    await waitFor(() => screen.getByText(WELCOME_TEXT));
  });

  it("renders the snack menu", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/snacks"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(/Snacks\s*Menu/i));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the drink menu", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/drinks"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(/Drinks\s*Menu/i));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a drink from the menu", async function () {
    api.getDrinks.mockReturnValue([
      {
        id: "martini",
        name: "Martini",
        description: "A ice-cold, refreshing classic.",
        recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
        serve: "Serve very cold, straight up.",
      },
    ]);
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/drinks/martini"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText("Martini"));
    screen.getByText(/refreshing classic/i);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a snack from the menu", async function () {
    api.getSnacks.mockReturnValue([
      {
        id: "nachos",
        name: "Nachos",
        description: "An American classic!",
        recipe: "Cover expensive, organic tortilla chips with Cheez Whiz.",
        serve:
          "Serve in a hand-thrown ceramic bowl, garnished with canned black olives",
      },
    ]);

    const { asFragment } = render(
      <MemoryRouter initialEntries={["/snacks/nachos"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText("Nachos"));
    screen.getByText(/an american classic/i);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the add item form", async function () {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/snacks/nachos"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByText(/add item/i));
    expect(asFragment()).toMatchSnapshot();
  });
  //FIXME:
  // it("adds an item successfully", async function () {
  //   const { container, debug } = render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   await waitFor(() => fireEvent.click(screen.getByText("Add Item")));

  //   fireEvent.change(screen.getByLabelText("name"), {
  //     target: { value: "test name" },
  //   });
  //   fireEvent.change(screen.getByLabelText("description"), {
  //     target: { value: "test description" },
  //   });
  //   fireEvent.change(screen.getByLabelText("recipe"), {
  //     target: { value: "test recipe" },
  //   });
  //   fireEvent.change(screen.getByLabelText("serve"), {
  //     target: { value: "test serve" },
  //   });


  //   // // Submit the form
  //   // const button = screen.getByRole("button", { name: /Add to Menu!/i });
  //   // fireEvent.click(button);

  //   // // Verify the API call
  //   // await waitFor(() => expect(api.addItem).toHaveBeenCalled());

  //   // await waitFor(() => screen.getByText(WELCOME_TEXT));
  // });
});
