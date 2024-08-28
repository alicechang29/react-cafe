import { v4 as uuidv4 } from 'uuid';

const MENU_ATTRIBUTES = {
  id: "",
  name: "",
  description: "",
  recipe: "",
  serve: ""
};

/**Normalizes the id string value
 *  formats to lowercase and replaces spaces with dashes  */
function convertToId(id) {
  const itemId = `${id.toLowerCase().replace(" ", "-")} - ${uuidv4()}`;

  return itemId;
}

export { MENU_ATTRIBUTES, convertToId };