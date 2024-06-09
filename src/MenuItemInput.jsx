import React from 'react';

/** MenuItemInput
 *
 * A single menu item input for the AddItemFormDisplay.
 *
 * Props:
 * - handleChange: fn that updates the state of parent component
 (AddItemFormDisplay)
 *
 * - menuAttr:
 *    string value that is used for name of field ("id", "recipe", etc.)
 *
 * - answer:
 *   the answer to display as value
 *
 * AddItemFormDisplay -> { MenuItemInput }
 */

function MenuItemInput({ handleChange, menuAttr, answer }) {

  /** User has changed input box: update parent with value. */
  function handleChange(evt) {
    const { value } = evt.target;
    handleChange(menuAttr, value);
  }

  return (
    <div className="MenuItemInput">
      <input
        placeholder={menuAttr}
        value={answer}
        onChange={handleChange}
      />
    </div>
  );

}

export default MenuItemInput;
