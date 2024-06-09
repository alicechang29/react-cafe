const MENU_ATTRIBUTES = ["id", "title", "description", "recipe", "serving"];

/**Normalizes the id string value
 *  formats to lowercase and replaces spaces with dashes  */
function convertToId(id) {
  return id.toLowerCase().replace(" ", "-");
}

export { MENU_ATTRIBUTES, convertToId };