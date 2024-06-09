import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./Menu";
import ItemLoader from "./ItemLoader";
import AddItemForm from "./AddItemForm";

import SnackOrBoozeApi from "./api";
import "./App.css";

/** Snack or Booze main application.
 *
 * Props: (none)
 *
 * State:
 * - itemsFetch:
 * {snacks: [item,item, ...], drinks: [item,item, ...], isLoading: true|false}
 *     where item is {id, name, description, recipe, serve}
 */

function App() {
  const [itemsFetch, setItemsFetch] = useState(
    {
      snacks: null,
      drinks: null,
      isLoading: true
    }
  );

  const { snacks, drinks, isLoading } = itemsFetch;
  console.log("* App %o", { snacks, drinks, isLoading });

  useEffect(function fetchItemsOnMount() {
    console.log("useEffect fetchItemsOnMount");

    fetchItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  //fn to fetch items //TODO: docstring
  async function fetchItems() {
    const snacks = await SnackOrBoozeApi.getSnacks();
    const drinks = await SnackOrBoozeApi.getDrinks();
    setItemsFetch({ snacks, drinks, isLoading: false });
  }

  //fn to addItems to menu //TODO: docstring
  async function addItems(formData) {
    console.log("App - addItems", formData);

    await SnackOrBoozeApi.addItem(
      formData.menuItem,
      formData.type
    );

    //TODO: upon successful submission, navigate to...

    fetchItems();
  }

  return (
    <div className="App">
      <NavBar />
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
            element={<AddItemForm addItem={addItems} />} />
          <Route
            path="*"
            element={<p>Hmmm. I can't seem to find what you want.</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
