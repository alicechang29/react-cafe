import { useState } from "react";
import { MENU_ATTRIBUTES, convertToId } from "./utils.js";

const defaultInitialFormData = {
  menuItem: MENU_ATTRIBUTES,
  type: "snacks"
};

/**
 * AddItemForm
 *
 * Props:
 * - initialFormData
 * - addItem: function to call in parent
 *
 * State: formData
{
 menuItem: { id: '', name: '', description: '', recipe: '', serve: '' },
type: "snacks"
}
 *
 * App -> { AddItemForm }
 */

function AddItemForm({ initialFormData = defaultInitialFormData, addItem }) {
  console.log("AddItemForm");

  const [formData, setFormData] = useState(initialFormData);
  const [alertMsg, setAlertMsg] = useState(false);

  /** Call parent function, converts form data id, resets form */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("AddItemForm: handleSubmit", { formData });

    formData.menuItem.id = convertToId(formData.menuItem.id);

    addItem(formData);

    setFormData(initialFormData);

    updateAlertMsg(true);
  }


  /** Update non-numeric form inputs. */
  function handleChange(evt) {
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

    updateAlertMsg(false);
  }

  /**Sets state of AlertMsg */
  function updateAlertMsg(status) {
    setAlertMsg(status);
  }


  return (
    <form className="AddItemForm" onSubmit={handleSubmit}>
      <label htmlFor="AddItemForm-label">Add to the Menu</label>

      {Object.keys(initialFormData.menuItem).map(m => (
        <input
          id={"AddItemForm-" + m}
          key={"AddItemForm-" + m}
          className="form-control"
          value={formData.menuItem[m]}
          name={m}
          placeholder={m}
          required
          onChange={handleChange}
          aria-label={m}
        />
      ))}

      <label htmlFor="AddItemForm-type"
        className="d-inline-flex">Snack or Drink?</label>
      <select
        id="AddItemForm-type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        className=
        "form-control form-control-sm d-inline-flex AddItemForm-type"
      >
        <option value="snacks">Snack</option>
        <option value="drinks">Drink</option>
      </select>

      <button className="btn-primary btn btn-sm AddItemForm-addBtn">
        Add to Menu!
      </button>

      {alertMsg &&
        <div className="alert alert-success" role="alert">
          Thank you for submitting!
        </div>
      }
    </form >

  );

}

export default AddItemForm;


