import { useState } from "react";
import { MENU_ATTRIBUTES, convertToId } from "./utils.js";
import MenuItemInput from "./MenuItemInput.jsx";

/**
 * AddItemForm
 *
 * Props: addItem //FIXME:
 *
 * State: formData //FIXME:
{
  menuItems: {id: '', title: '', description: '', recipe: '', serving: ''}
  type: "snack"
}
 *
 * App -> { AddItemForm } -> MenuItemInput
 */

function AddItemForm({ addItem }) {
  const initialFormData = {
    menuItem: { id: '', name: '', description: '', recipe: '', serve: '' },
    type: "snacks"
  };
  console.log("AddItemForm");
  const [formData, setFormData] = useState(initialFormData);

  /** Handle submission of form, normalizes form data inputs, resets form*/
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("AddItemFormDisplay: handleSubmit", { formData });

    formData.menuItem.id = convertToId(formData.menuItem.id); //TODO: check this

    addItem(formData);

    setFormData(initialFormData);
  }


  /** Update form input. */
  function handleChange(evt) {
    console.log(evt.target);
    const { name, value } = evt.target;

    if (name === "type") {
      setFormData(currData => ({
        ...currData,
        [name]: value
      }));
    } else {
      setFormData(currData => ({
        ...currData,
        menuItem: { ...currData.menuItem, [name]: value }
      }));
    }

  }

  //TODO: how do i put the label htmlFor for my inputs
  return (
    <form className="AddItemFormDisplay" onSubmit={handleSubmit}>
      <label htmlFor="AddItemFormDisplay-label">Add to the Menu</label>

      {MENU_ATTRIBUTES.map(m => (
        <input
          id={"AddItemFormDisplay" + m}
          key={"AddItemFormDisplay" + m}
          className="form-control"
          value={formData.menuItem[m]}
          name={m}
          placeholder={m}
          required
          onChange={handleChange}
        />
      ))}

      <label htmlFor="AddItemFormDisplay-type"
        className="d-inline-flex">Snack or Drink?</label>
      <select
        id="AddItemFormDisplay-type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        className=
        "form-control form-control-sm d-inline-flex AddItemFormDisplay-type"
      >
        <option value="snacks">Snack</option>
        <option value="drinks">Drink</option>
      </select>


      <button className="btn-primary btn btn-sm AddItemFormDisplay-addBtn">
        Add to Menu!
      </button>
    </form >

  );


}

export default AddItemForm;


/*
{MENU_ATTRIBUTES.map((menuAttr, i) => (
        <MenuItemInput
          key={i}
          menuAttr={menuAttr}
          answer={formData[menuAttr]}
          handleChange={handleChange} />
      ))}



*/