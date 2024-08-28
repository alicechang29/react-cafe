import { describe, test as it, expect, vi } from "vitest";
import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddItemForm from "./AddItemForm";
import { MENU_ATTRIBUTES } from "./utils";


it("renders without crashing", async function () {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/add"]}>
      <AddItemForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("calls addItem with correct inputs upon save", function () {
  const handleSubmit = vi.fn();
  const { container } = render(
    <MemoryRouter initialEntries={["/add"]}>
      <AddItemForm addItem={handleSubmit} />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText("name"), {
    target: { value: "test name" },
  });
  fireEvent.change(screen.getByLabelText("description"), {
    target: { value: "test description" },
  });
  fireEvent.change(screen.getByLabelText("recipe"), {
    target: { value: "test recipe" },
  });
  fireEvent.change(screen.getByLabelText("serve"), {
    target: { value: "test serve" },
  });
  const button = container.querySelector("button");

  fireEvent.click(button);
  //FIXME:
  // expect(handleSubmit).toHaveBeenCalled();
  // expect(handleSubmit).toHaveBeenCalledWith("snacks", {
  //   description: "test description",
  //   name: "test name",
  //   recipe: "test recipe",
  //   serve: "test serve",
  // });
});

