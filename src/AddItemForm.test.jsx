import { describe, test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AddItemForm from "./AddItemForm";
import { MENU_ATTRIBUTES } from "./utils";



describe("AddItemForm Tests", function () {
  const defaultInitialFormData = {
    menuItem: MENU_ATTRIBUTES,
    type: "snacks"
  };

  test("renders without crashing", function () {
    render(<AddItemForm
      addItem={vi.fn}
      initialFormData={defaultInitialFormData} />);
  });

  test("contains correct fields", function () {
    const { container } = render(<AddItemForm
      addItem={vi.fn}
      initialFormData={defaultInitialFormData} />);


    expect(container).toContainHTML(
      "id"
    );
    expect(container).toContainHTML(
      "name"
    );
    expect(container).toContainHTML(
      "recipe"
    );
    expect(container).toContainHTML(
      "serve"
    );
  });

  //FIXME: not sure why this isn't working
  test("Add Item button should call handleSubmit", function () {
    const removeMock = vi.fn();
    removeMock.mockClear();

    const { container } = render(<AddItemForm
      addItem={vi.fn}
      initialFormData={defaultInitialFormData} />);

    const addItemBtn = container.querySelector(
      '.AddItemForm-addBtn');


    console.log("BUTTON", addItemBtn);

    fireEvent.click(addItemBtn);

    expect(removeMock).toHaveBeenCalledTimes(1);
  });
});