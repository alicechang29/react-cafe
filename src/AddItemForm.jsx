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
  console.log("AddItemForm");
  const [formData, setFormData] = useState(
    {
      menuItem: { id: '', title: '', description: '', recipe: '', serving: '' },
      type: "snack"
    }
  );

  /** Handle submission of form and normalizes form data inputs*/
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("AddItemFormDisplay: handleSubmit", { formData });

    addItem(currData => ({
      ...currData,
      id: convertToId(formData.id)
    })
    );
  }


  /** Update form input. */
  function handleChange(evt) {
    console.log(evt.target);
    const { name, value, option } = evt.target;
    const menuType = document.querySelector("#menu-type").value;

    setFormData(currData => ({
      ...currData,
      menuItem: { ...currData.menuItem, [name]: value },
      type: menuType
    }));

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

      <label htmlFor="menu-type">Snack or Drink?</label>
      <select name="menu-type" id="menu-type" onChange={handleChange}>
        <option value="snack">Snack</option>
        <option value="drink">Drink</option>
      </select>


      <button>Add to Menu!</button>
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