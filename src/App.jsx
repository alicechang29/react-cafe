import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import AliceCafeAPI from "./api";
import "./App.css";

/** Main application.
 *
 * Props: (none)
 *
 * State:
 * - itemsFetch:
 * {snacks: [item,item, ...], drinks: [item,item, ...], isLoading: true|false}
 *     where each item is {id, name, description, recipe, serve}
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

  /**Fetches data on component mount*/
  useEffect(function fetchItemsOnMount() {
    console.log("useEffect fetchItemsOnMount");

    fetchItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  /**fetches snacks and drinks data from API*/
  async function fetchItems() {
    const snacks = await AliceCafeAPI.getSnacks();
    const drinks = await AliceCafeAPI.getDrinks();
    setItemsFetch({ snacks, drinks, isLoading: false });
  }

  /**adds new snack or drink to the DB via API*/
  async function addItem(formData) {
    console.log("App - addItem", formData);

    await AliceCafeAPI.addItem(
      formData.menuItem,
      formData.type
    );

    fetchItems();
  }

  return (
    <div className="App">
      <NavBar />
      <RoutesList snacks={snacks} drinks={drinks} addItem={addItem} />
    </div>
  );
}

export default App;
