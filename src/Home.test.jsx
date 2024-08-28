import { describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

const testData = {
  drinks: [
    {
      id: "martini",
      name: "Martini",
      description: "A ice-cold, refreshing classic.",
      recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
      serve: "Serve very cold, straight up.",
    },
    {
      id: "negroni",
      name: "Negroni",
      description: "A nice drink for a late night conversation.",
      recipe: "Mix equal parts of gin, Campari, and sweet vermouth.",
      serve: "Serve cold, either on the rocks or straight up.",
    },
  ],
  snacks: [
    {
      id: "nachos",
      name: "Nachos",
      description: "An American classic!",
      recipe: "Cover expensive, organic tortilla chips with Cheez Whiz.",
      serve:
        "Serve in a hand-thrown ceramic bowl, garnished with canned black olives",
    },
  ],
};

describe("Home component", function () {
  it("renders the home component", function () {
    render(<Home drinks={testData.drinks} snacks={testData.snacks} />);
  });

  it("matches a snapshot", function () {
    const { getByText, asFragment } = render(
      <Home drinks={testData.drinks} snacks={testData.snacks} />
    );
    getByText(/Snacks: 1/);
    getByText(/Drinks: 2/);

    expect(asFragment()).toMatchSnapshot();
  });
});
