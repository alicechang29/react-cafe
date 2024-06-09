const MENU_ATTRIBUTES = ["id", "name", "description", "recipe", "serve"];

/**Normalizes the id string value
 *  formats to lowercase and replaces spaces with dashes  */
function convertToId(id) {
  return id.toLowerCase().replace(" ", "-");
}

export { MENU_ATTRIBUTES, convertToId };