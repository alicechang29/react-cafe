import { Navigate, useParams } from "react-router-dom";
import Item from "./Item";

/** Find a food/drink item and render it.
 *
 * Props:
 * - items: [{id, name, description, recipe, serve}, ...]
 * - cantFindPath: path to redirect to if not found
 *
 * Params:
 * - id
 *
 * App -> { ItemLoader } -> Item
 */

function ItemLoader({ items, cantFindPath }) {
  const { id } = useParams();

  //find returns first elem in array that matches search criteria
  const item = items.find(item => item.id === id);
  console.log("* ItemLoader %o", { items, cantFindPath, id, item });

  if (!item) return <Navigate to={cantFindPath} />;

  return <Item item={item} />;
}

export default ItemLoader;
