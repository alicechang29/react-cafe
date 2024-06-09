import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import ItemLoader from "./ItemLoader";
import AddItemForm from "./AddItemForm";


/** RoutesList
 *
 * Props:
 * - addItem: callback fn
 * - snacks
 * - drinks
 *
 * State: none
 *
 * Effects: none
 *
 *  App -> RoutesList
 */

function RoutesList({ snacks, drinks, addItem }) {
  console.log("RoutesList");

  return (
    <div className="RoutesList">
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home snacks={snacks} drinks={drinks} />} />
          <Route
            path="/snacks"
            element={<Menu items={snacks} type="snacks" title="Snacks" />} />
          <Route
            path="/drinks"
            element={<Menu items={drinks} type="drinks" title="Drinks" />} />
          <Route
            path="/snacks/:id"
            element={<ItemLoader items={snacks} cantFindPath="/snacks" />} />
          <Route
            path="/drinks/:id"
            element={<ItemLoader items={drinks} cantFindPath="/drinks" />} />
          <Route
            path="/add-item"
            element={<AddItemForm addItem={addItem} />} />
          <Route
            path="*"
            element={<p>Hmmm. I can't seem to find what you want.</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default RoutesList;
